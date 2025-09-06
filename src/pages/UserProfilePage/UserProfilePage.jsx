import React from "react";
import "./UserProfilePage.css";
import { UserProfileApi } from "../../api/profile";
import { formatPersianDate } from "../../helpers/dateHelpers";

const UserProfilePage = () => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        UserProfileApi().then((data) => setUser(data));
    }, []);

    if (!user) return <div className="user-page">در حال بارگذاری...</div>;

    const avatarLetter = user.username ? user.username[0].toUpperCase() : "?";

    return (
        <div className="user-page">
            <h1>پروفایل کاربری</h1>
            <div className="user-card">
                <div className="avatar">{avatarLetter}</div>
                <h2>{user.username}</h2>
                <p>ایمیل: {user.email || "ثبت نشده"}</p>
                <p>نام: {user.first_name || "-"}</p>
                <p>نام خانوادگی: {user.last_name || "-"}</p>
                <p>شماره تماس: {user.mobile_number || "ثبت نشده"}</p>
                <p>تاریخ عضویت: {formatPersianDate(user.date_joined)}</p>
                {user.is_staff && <p>مدیر: بله</p>}
                <button>ویرایش پروفایل</button>
            </div>
        </div>
    );
};

export default UserProfilePage;
