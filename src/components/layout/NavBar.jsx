import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { UserProfileApi } from "../../api/profile";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const token = localStorage.getItem("token");
    const menuRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        if (token) UserProfileApi().then((data) => setUser(data));
    }, [token]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <nav className="navbar">

            <div className="navbar-right" ref={menuRef}>
                {token && user ? (
                    <div className="profile-menu" onClick={() => setOpen(!open)}>
                        <span>
                            <FaUserCircle size={22} />
                            {user.username}
                        </span>
                        {open && (
                            <div className="dropdown">
                                <Link to="/profile"><FaUserCircle /> پروفایل من</Link>
                                <Link to="/orders">📦 سفارشات</Link>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        setUser(null);
                                        setOpen(false);
                                    }}
                                >
                                    <FaSignOutAlt /> خروج
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="btn-login">ورود</Link>
                )}
                <div className="nav-buttons">
                    <button onClick={() => navigate('/products/')}>محصولات</button>
                </div>
            </div>
            <div className="navbar-left">
                <Link to="/" className="logo">فروشگاه من</Link>
            </div>
        </nav>
    );
};

export default NavBar;
