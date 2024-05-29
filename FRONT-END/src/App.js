import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProcessDetailsPage from './pages/ProcessDetailsPage';
import NewProcessPage from './pages/NewProcessPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/process/:id" element={<ProcessDetailsPage />} />
                <Route path="/new-process" element={<NewProcessPage />} />
            </Routes>
        </Router>
    );
}

export default App;