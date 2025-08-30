import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import HomePage from '../pages/HomePage/HomePage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRoutes;
