// src/api/auth.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL_LOCAL

export const UserProfileApi = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/users/user-profile/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    })

    const UserData = await res.json();

    return UserData
}
