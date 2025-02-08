// src/pages/DataRepositoryPage.js

import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import DataCard from '../components/DataCard';
import Sidebar from '../components/Sidebar';

// Sample data array
const dataEntries = [
  {
    id: 1,
    title: 'Particle Collision Data Set',
    dataType: 'Particle Physics',
    description: 'Data from recent collider experiments.',
    tags: ['collider', 'experiment', 'proton'],
  },
  {
    id: 2,
    title: 'Nuclear Decay Rates',
    dataType: 'Nuclear Physics',
    description: 'Measurements of decay rates over time.',
    tags: ['decay', 'nuclear', 'radioactivity'],
  },
  // Add more data entries as needed
];

function DataRepositoryPage() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Data Repository
        </Typography>
        <Grid container spacing={4}>
          {dataEntries.map((data) => (
            <Grid item xs={12} sm={6} md={4} key={data.id}>
              <DataCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default DataRepositoryPage;