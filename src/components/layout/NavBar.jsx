import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [user, setUser] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(() => {
        // API Call برای گرفتن اطلاعات کاربر
        const fetchUser = async () => {
            try {
                if (!token) return;

                const res = await fetch("/api/user/profile/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                }
            } catch (err) {
                console.log("خطا در دریافت اطلاعات کاربر:", err);
            }
        };

        fetchUser();
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">فروشگاه من</Link>
            </div>

            <div className="navbar-right">
                {token && user ? (
                    <div className="profile-menu">
                        <span>سلام، {user.name}</span>
                        <div className="dropdown">
                            <Link to="/profile">پروفایل من</Link>
                            <Link to="/orders">سفارشات</Link>
                            <button
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    setUser(null);
                                }}
                            >
                                خروج
                            </button>
                        </div>
                    </div>
                ) : (
                    <Link to="/login" className="btn-login">ورود</Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
