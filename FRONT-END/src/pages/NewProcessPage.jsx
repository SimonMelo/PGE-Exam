import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Input, Grid } from '@mui/material';
import Header from '../components/Header';

const NewProcessPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        description: '',
        peopleNames: '',
        peopleDocuments: [],
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        setFormData({ ...formData, peopleDocuments: files });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode enviar os dados do formulário para onde precisar
        console.log('Dados do formulário:', formData);
    };
    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <Box sx={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}>
                    <Typography variant="h4" gutterBottom>
                        Novo Processo
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Nome do Processo"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Tipo do Processo"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Descrição do Processo"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Nomes das Pessoas Envolvidas"
                            name="peopleNames"
                            value={formData.peopleNames}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <Input
                            fullWidth
                            type="file"
                            name="peopleDocuments"
                            onChange={handleFileChange}
                            margin="normal"
                            multiple
                        />
                        <Grid style={{ marginTop: "10px" }}>
                            <Button type="submit" variant="contained" color="primary">
                                Enviar
                            </Button>
                        </Grid>
                    </form>
                </Box>
            </Box>

        </>
    );
};

export default NewProcessPage;
