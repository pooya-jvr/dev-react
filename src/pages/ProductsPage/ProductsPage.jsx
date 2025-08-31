import React from "react";
import "./ProductsPage.css";

const ProductsPage = () => {
    // داده تستی موقت
    const products = [
        { id: 1, name: "محصول ۱", description: "توضیحات محصول ۱", price: "200,000 تومان", image: "https://via.placeholder.com/200" },
        { id: 2, name: "محصول ۲", description: "توضیحات محصول ۲", price: "350,000 تومان", image: "https://via.placeholder.com/200" },
        { id: 3, name: "محصول ۳", description: "توضیحات محصول ۳", price: "150,000 تومان", image: "https://via.placeholder.com/200" },
        { id: 4, name: "محصول ۴", description: "توضیحات محصول ۴", price: "400,000 تومان", image: "https://via.placeholder.com/200" },
        { id: 5, name: "محصول ۵", description: "توضیحات محصول ۵", price: "180,000 تومان", image: "https://via.placeholder.com/200" },
        { id: 6, name: "محصول ۶", description: "توضیحات محصول ۶", price: "220,000 تومان", image: "https://via.placeholder.com/200" },
        { id: 1, name: "محصول ۱", description: "توضیحات محصول ۱", price: "200,000 تومان", image: "https://via.placeholder.com/200" },
        { id: 2, name: "محصول ۲", description: "توضیحات محصول ۲", price: "350,000 تومان", image: "https://via.placeholder.com/200" },
        { id: 3, name: "محصول ۳", description: "توضیحات محصول ۳", price: "150,000 تومان", image: "https://via.placeholder.com/200" },
        { id: 4, name: "محصول ۴", description: "توضیحات محصول ۴", price: "400,000 تومان", image: "https://via.placeholder.com/200" },
        { id: 5, name: "محصول ۵", description: "توضیحات محصول ۵", price: "180,000 تومان", image: "https://via.placeholder.com/200" },
        { id: 6, name: "محصول ۶", description: "توضیحات محصول ۶", price: "220,000 تومان", image: "https://via.placeholder.com/200" },
    ];

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
