import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/Login/Login";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* صفحات بدون NavBar */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* صفحات با NavBar */}
        <Route
          path="/products"
          element={
            <Layout>
              <ProductsPage />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <div>صفحه پروفایل</div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
