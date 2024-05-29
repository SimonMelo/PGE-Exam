import React from 'react';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import ProcessList from '../components/ProcessList';
import ClientList from '../components/ClientList';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <ProcessList />
        <ClientList />
      </Container>
    </div>
  );
};

export default HomePage;