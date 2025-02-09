// src/pages/UploadDataPage.js

import React, { useState } from 'react';
import { Container, Typography, Paper, Button, Input } from '@mui/material';
import CryptoJS from 'crypto-js';
import Sidebar from '../components/Sidebar';

function UploadDataPage() {
  const [fileHash, setFileHash] = useState('');
  const [status, setStatus] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        console.log('File content:', fileContent);
        const hash = CryptoJS.SHA256(fileContent).toString();
        setFileHash(hash);
        setStatus('File uploaded successfully!');
        console.log('File hash:', hash);
      };
      reader.readAsText(file);
  }
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
        <Button variant="contained" color="primary" onClick={handleFileUpload}>
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