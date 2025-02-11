import React from 'react';
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  TextField,
} from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            公式大全
          </Typography>
          <TextField
            size='small'
            placeholder='搜索公式...'
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
              width: 200,
            }}
          />
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 3 }}>{children}</Container>
    </Box>
  );
};

export default Layout;
