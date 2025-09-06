import React from "react";
import "./ProductsPage.css";
import { GetProductsApi } from "../../api/GetProducts";

const ProductsPage = () => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        GetProductsApi().then((data) => setProducts(data));
    }, []);

    console.log(products);

    return (
        <div className="products-page">
            <h1>محصولات</h1>
            <div className="products-grid">
                {products.map((p) => (
                    <div key={p.id} className="product-card">
                        <img src={p.image} alt={p.name} />
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                        <span className="price">{p.price}</span>
                        <button>افزودن به سبد</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
