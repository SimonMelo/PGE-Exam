import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProcessDetailsPage from './pages/ProcessDetailsPage';
import ClientDetailsPage from './pages/ClientDetailsPage';
import NewClientPage from './pages/NewClientPage';
import NewProcessPage from './pages/NewProcessPage';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import ScreenClients from './pages/ScreenClients';
import ScreenProcess from './pages/ScreenProcess'

function App() {
    return (
        <Router>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/clients" element={<ScreenClients />} />
                        <Route path="/process" element={<ScreenProcess />} />
                        <Route path="/process/:id" element={<ProcessDetailsPage />} />
                        <Route path="/clients/:id" element={<ClientDetailsPage />} />
                        <Route path="/new-process" element={<NewProcessPage />} />
                        <Route path="/new-clients" element={<NewClientPage />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}

export default App;