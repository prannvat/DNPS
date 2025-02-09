import React, { useState } from 'react';
import { Container, Typography, Paper, Button, Input } from '@mui/material';
import CryptoJS from 'crypto-js';
import { ethers } from 'ethers';
import Sidebar from '../components/Sidebar';
import HashToXRPLABI from '../abis/HashToXRPL.json'; // Import the ABI of the contract

function UploadDataPage() {
  const [fileHash, setFileHash] = useState('');
  const [status, setStatus] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        const hash = CryptoJS.SHA256(fileContent).toString(CryptoJS.enc.Hex);
        setFileHash(hash);
        setStatus('File uploaded successfully!');
        console.log('File hash:', hash);
      };
      reader.readAsText(file);
    }
  };

  const submitHashToContract = async (hashKey) => {
    // Connect to the Ethereum network
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    // Contract address and ABI
    const contractAddress = '0x46A30F35B844049BdC068AbB7fCE8463e68BB3Dc'; // Replace with your deployed contract address
    const contract = new ethers.Contract(contractAddress, HashToXRPLABI, signer);

    // Submit the hash key to the contract
    console.log('Submitting hash key to contract:', hashKey);
    try {
      const tx = await contract.submitHashKey(ethers.toUtf8Bytes(hashKey));
      console.log('Transaction hash:', tx.hash);
      await tx.wait();
      setStatus('Hash submitted to smart contract successfully!');
    } catch (error) {
      console.error('Error submitting hash key to contract:', error);
      setStatus('Error submitting hash: ' + error.message);
    }
  };

  const handleUploadAndSubmit = async () => {
    if (!fileHash) {
      alert('Please upload a file first.');
      return;
    }
    await submitHashToContract(fileHash);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Upload Data
        </Typography>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Input type="file" accept=".csv" onChange={handleFileUpload} />
          <Button variant="contained" color="primary" onClick={handleUploadAndSubmit}>
            Upload and Compute Hash
          </Button>
          {fileHash && (
            <Typography variant="body1" style={{ marginTop: '1rem' }}>
              Computed Hash: {fileHash}
            </Typography>
          )}
          {status && (
            <Typography variant="body1" style={{ marginTop: '1rem', color: 'green' }}>
              Status: {status}
            </Typography>
          )}
        </Paper>
      </Container>
    </div>
  );
}

export default UploadDataPage;