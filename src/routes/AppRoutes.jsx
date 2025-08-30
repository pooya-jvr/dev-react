import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import HomePage from '../pages/HomePage/HomePage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductsPage />} />
        </Routes>
    );
}

export default AppRoutes;
