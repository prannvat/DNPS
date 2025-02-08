// src/components/DataCard.js

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
} from '@mui/material';

function DataCard({ data }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {data.dataType}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {data.description}
        </Typography>
        <div style={{ marginTop: '0.5rem' }}>
          {data.tags.map((tag) => (
            <Chip key={tag} label={tag} style={{ marginRight: '0.25rem' }} />
          ))}
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Download
        </Button>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default DataCard;