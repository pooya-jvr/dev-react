const BASE_URL = import.meta.env.VITE_API_BASE_URL_LOCAL

export const GetProductsApi = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/products/products/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    })

    const ProductsData = await res.json();

    return ProductsData
}
