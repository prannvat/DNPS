// src/components/UploadForm.js

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

function UploadForm() {
  const [file, setFile] = useState(null);
  const [dataTitle, setDataTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [dataType, setDataType] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !dataTitle || !dataType) {
      alert('Please provide all required information.');
      return;
    }

    // Implement the upload logic here
    // For example, using Axios to send the file to the backend
    // Update uploadProgress using setUploadProgress()
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
      </Grid>
    </form>
  );
}

export default UploadForm;