// src/components/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
        >
          DataConnect
        </Typography>
        <Button color="inherit" component={Link} to="/upload">
          Upload Data
        </Button>
        <Button color="inherit" component={Link} to="/repository">
          Data Repository
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;