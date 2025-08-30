// src/api/auth.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL_LOCAL

export const loginApi = async (username, password) => {
    const res = await fetch(`${BASE_URL}/users/api/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })

    const data = await res.json();

    if (!res.ok) {
        switch (res.status) {
            case 401:
                throw new Error('رمز عبور اشتباه است');
            case 400:
                throw new Error('نام کاربری یا رمز عبور اشتباه است');
            case 500:
                throw new Error('خطای سرور، دوباره تلاش کنید');
            case 405:
                throw new Error('این نام کاربری ثبت نشده است');
            default:
                throw new Error('خطای ناشناخته');
        }
    }
    return data
}
