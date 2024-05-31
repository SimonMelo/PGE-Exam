import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProcessDetailsPage from './pages/ProcessDetailsPage';
import NewProcessPage from './pages/NewProcessPage';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <Router>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/process/:id" element={<ProcessDetailsPage />} />
                        <Route path="/new-process" element={<NewProcessPage />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}

export default App;