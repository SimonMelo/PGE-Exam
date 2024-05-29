import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import { processes } from '../components/Process';
import Header from '../components/Header';

const ProcessDetailsPage = () => {
    return (<>
        <Header />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <Paper elevation={3} sx={{ p: 3, maxWidth: '600px', width: '100%' }}>
                <Typography variant="h4" gutterBottom>
                    Procuradoria Geral do Estado
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h5" gutterBottom>
                    Nome do Processo: {processes.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Tipo do Processo: {processes.type}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Pessoas Envolvidas: Pessoa A, Pessoa B, Pessoa C
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1">
                    Descrição do Processo: {processes.description}
                </Typography>
            </Paper>
        </Box>
    </>
    );
};

export default ProcessDetailsPage;