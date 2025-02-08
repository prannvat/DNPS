// src/pages/LoginPage.js

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h4" gutterBottom align="center">
          Login
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
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
              <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                Don't have an account?{' '}
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  Register here
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginPage;