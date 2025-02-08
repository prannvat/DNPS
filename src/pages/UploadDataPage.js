// src/pages/UploadDataPage.js

import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import UploadForm from '../components/UploadForm';
import Sidebar from '../components/Sidebar';

function UploadDataPage() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Upload Data
        </Typography>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <UploadForm />
        </Paper>
      </Container>
    </div>
  );
}

export default UploadDataPage;