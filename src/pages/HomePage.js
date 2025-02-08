// src/pages/HomePage.js

import React from 'react';
import { Container, Typography } from '@mui/material';

function HomePage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Continuous Data Platform
      </Typography>
      <Typography variant="body1">
        Upload and share your particle and nuclear physics data seamlessly.
      </Typography>
    </Container>
  );
}

export default HomePage;