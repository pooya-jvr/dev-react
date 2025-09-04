const BASE_URL = import.meta.env.VITE_API_BASE_URL_LOCAL
import api from "./api";

export const loginApi = async (username, password) => {
    try {
        const res = await api.post("/users/login/", { username, password });
        return res;
    } catch (err) {
        if (err.response) {
            const messages = {
                401: 'رمز عبور اشتباه است',
                400: 'نام کاربری یا رمز عبور اشتباه است',
                500: 'خطای سرور، دوباره تلاش کنید',
                405: 'این نام کاربری ثبت نشده است',
            };
            throw new Error(messages[err.response.status] || 'خطای ناشناخته');
        } else {
            throw new Error('خطای شبکه یا ناشناخته');
        }
    }
};


export const registerApi = async (formData) => {
    try {
        const res = await api.post("/users/register/", formData);
        return res;
    } catch (err) {
        if (err.response) {
            const data = err.response.data;
            const messages = Object.values(data).flat().join("\n");
            throw new Error(messages);
        } else {
            throw new Error("خطای ناشناخته رخ داد");
        }
    }
};