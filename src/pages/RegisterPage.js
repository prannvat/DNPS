// src/pages/RegisterPage.js

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [institutionName, setInstitutionName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement registration logic here
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h4" gutterBottom align="center">
          Register
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Institution Name"
                fullWidth
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
                Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                Already have an account?{' '}
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  Login here
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default RegisterPage;