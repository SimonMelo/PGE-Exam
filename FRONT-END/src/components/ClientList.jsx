import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ClientList = () => {
  const clients = [
    { id: 1, name: "Cliente A" },
    { id: 2, name: "Cliente B" },
    { id: 3, name: "Cliente C" },
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Typography style={{ fontWeight: "bold" }} variant="h5" component="div" gutterBottom>
        Clientes
      </Typography>
      <List>
        {clients.map((client) => (
          <ListItem key={client.id}>
            <ListItemText primary={client.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ClientList;