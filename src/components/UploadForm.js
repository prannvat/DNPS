import React, { useState } from 'react';
import {
  Button,
  TextField,
  LinearProgress,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import CryptoJS from 'crypto-js';
import { ethers } from 'ethers';
import HashToXRPLABI from '../abis/HashToXRPL.json'; // Import the ABI of the contract

function UploadForm() {
  const [file, setFile] = useState(null);
  const [dataTitle, setDataTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [dataType, setDataType] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [status, setStatus] = useState('');

  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {

    // Read the file content and compute the hash
    const reader = new FileReader();
    reader.onload = async (e) => {
      const fileContent = e.target.result;
      const hash = CryptoJS.SHA256(fileContent).toString(CryptoJS.enc.Hex);

      // Submit the hash to the smart contract
      try {
        await submitHashToContract(hash);
        setStatus('Hash submitted to smart contract successfully!');
      } catch (error) {
        setStatus('Error submitting hash: ' + error.message);
      }
    };
    reader.readAsText(file);
  };

  const submitHashToContract = async (hashKey) => {
    // Connect to the Ethereum network
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Contract address and ABI
    const contractAddress = '0x46A30F35B844049BdC068AbB7fCE8463e68BB3Dc'; // Replace with your deployed contract address
    const contract = new ethers.Contract(contractAddress, HashToXRPLABI, signer);

    // Submit the hash key to the contract
    console.log('Submitting hash key to contract:', hashKey);
    try {
      const tx = await contract.submitHashKey(ethers.utils.formatBytes32String(hashKey));
      console.log('Transaction hash:', tx.hash);
      await tx.wait();
    } catch (error) {
      console.error('Error submitting hash key to contract:', error);
      throw error;
    }
  };

  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Data Title"
            fullWidth
            value={dataTitle}
            onChange={(e) => setDataTitle(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth required>
            <InputLabel>Data Type</InputLabel>
            <Select value={dataType} onChange={(e) => setDataType(e.target.value)}>
              <MenuItem value="Particle Physics">Particle Physics</MenuItem>
              <MenuItem value="Nuclear Physics">Nuclear Physics</MenuItem>
              {/* Add more data types as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Tags"
            placeholder="e.g., collider, electron, experiment"
            fullWidth
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            accept=".csv,.txt,.json,.xml"
            style={{ display: 'none' }}
            id="upload-file"
            type="file"
            onChange={handleFileSelect}
          />
          <label htmlFor="upload-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<CloudUpload />}
            >
              Select File
            </Button>
          </label>
          {file && (
            <Typography variant="body1" style={{ marginTop: '1rem' }}>
              Selected File: {file.name}
            </Typography>
          )}
        </Grid>
        {uploadProgress > 0 && (
          <Grid item xs={12}>
            <LinearProgress variant="determinate" value={uploadProgress} />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            disabled={!file || !dataTitle || !dataType}
            onClick={handleUpload}
          >
            Upload Data
          </Button>
        </Grid>
        {status && (
          <Grid item xs={12}>
            <Typography variant="body1" style={{ marginTop: '1rem', color: 'green' }}>
              Status: {status}
            </Typography>
          </Grid>
        )}
      </Grid>
    </form>
  );
}

export default UploadForm;