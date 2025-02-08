// src/components/Sidebar.js

import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StorageIcon from '@mui/icons-material/Storage';
import { Link } from 'react-router-dom';

function Sidebar() {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/upload">
          <ListItemIcon>
            <CloudUploadIcon />
          </ListItemIcon>
          <ListItemText primary="Upload Data" />
        </ListItem>
        <ListItem button component={Link} to="/repository">
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <ListItemText primary="Data Repository" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;