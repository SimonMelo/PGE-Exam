import React, { useState } from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import FormPF from '../components/FormPF';
import FormPJ from '../components/FormPJ';
import Header from '../components/Header';
import FormAdv from '../components/FormAdv';

const CadastroCliente = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Pessoa Física" />
                        <Tab label="Pessoa Jurídica" />
                        <Tab label="Advogado" />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <FormPF />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <FormPJ />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <FormAdv />
                </TabPanel>
            </Box>
        </>
    );
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
};

export default CadastroCliente;
