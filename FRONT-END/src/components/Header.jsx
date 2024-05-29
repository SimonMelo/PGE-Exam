import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Procuradoria Geral do Estado
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;