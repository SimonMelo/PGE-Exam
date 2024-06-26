import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Divider } from '@mui/material';
import Header from '../components/Header';
import { processes } from '../components/Process';

const ProcessDetailsPage = () => {
    const { id } = useParams();
    const process = processes.find(process => process.id === parseInt(id));

    if (!process) {
        return (
            <>
                <Header />
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                    <Typography variant="h6">
                        Processo não encontrado.
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
                        Nome do Processo: {process.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Tipo do Processo: {process.type}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Descrição do Processo: {process.description}
                    </Typography>
                </Paper>
            </Box>
        </>
    );
};

export default ProcessDetailsPage;
