// src/components/Footer.js

import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} DataConnect. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;