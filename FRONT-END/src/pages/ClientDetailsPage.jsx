import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Divider } from '@mui/material';
import { clientsMore } from '../components/ClientsMore';
import Header from '../components/Header';

const ClientDetailsPage = () => {
    const { id } = useParams();
    const client = clientsMore.find(client => client.id === parseInt(id));
    if (!client) {
        return (
            <>
                <Header />
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                    <Typography variant="h6">
                        Cliente não encontrado.
                    </Typography>
                </Box>
            </>
        );
    }

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <Paper elevation={3} sx={{ p: 3, maxWidth: '600px', width: '100%' }}>
                    <Typography variant="h4" gutterBottom>
                        Procuradoria Geral do Estado
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h5" gutterBottom>
                        Cliente: {client.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Documento do Cliente: {client.document}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body1">
                        Endereço: {client.address}
                    </Typography>
                </Paper>
            </Box>
        </>
    );
};

export default ClientDetailsPage;
