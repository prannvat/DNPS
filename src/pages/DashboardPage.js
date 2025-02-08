// src/pages/DashboardPage.js

import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from '../components/Sidebar';

const data = [
  { date: '2023-10-01', uploads: 5 },
  { date: '2023-10-02', uploads: 7 },
  { date: '2023-10-03', uploads: 3 },
  { date: '2023-10-04', uploads: 9 },
  { date: '2023-10-05', uploads: 4 },
  { date: '2023-10-06', uploads: 6 },
  { date: '2023-10-07', uploads: 8 },
  // Add more data points as needed
];

function DashboardPage() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Dashboard</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Upload Activity
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="uploads" stroke="#0D47A1" />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>
              <Typography variant="body1">Total Uploads: 42</Typography>
              <Typography variant="body1">Pending Verifications: 5</Typography>
              <Typography variant="body1">New Messages: 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>
              {/* List recent activity here */}
              <Typography variant="body2" color="textSecondary">
                - Uploaded "Particle Collision Data Set" on 2023-10-07
              </Typography>
              <Typography variant="body2" color="textSecondary">
                - Verification completed for "Nuclear Decay Rates" data
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DashboardPage;