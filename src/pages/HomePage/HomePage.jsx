import React, { useRef } from "react";
import "./HomePage.css";
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
    const infoRef = useRef(null);
    const navigate = useNavigate()

    const scrollToInfo = () => {
        if (infoRef.current) {
            infoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="home">
            {/* بخش اصلی با دکمه‌ها */}
            <div className="homepage">
                <h1>خوش آمدید</h1>
                <p>بهترین تجربه خرید آنلاین با طراحی لوکس و مدرن با افکت‌های جذاب</p>
                <div className="button-group">
                    <button className="btn-buy" onClick={() => navigate('/products/')}>
                        خرید
                    </button>
                    <button className="btn-info" onClick={scrollToInfo}>
                        اطلاعات بیشتر
                    </button>
                </div>
            </div>

            {/* بخش اطلاعات پایین */}
            <div ref={infoRef} className="info-section">
                <h2>درباره فروشگاه</h2>
                <p>
                    ما ارائه دهنده بهترین محصولات با کیفیت بالا و قیمت مناسب هستیم.
                    هدف ما رضایت کامل مشتریان است.
                </p>

                <h3>اطلاعات تماس</h3>
                <p>تلفن: 021-12345678</p>
                <p>ایمیل: info@example.com</p>
                <p>آدرس: تهران، خیابان مثال، پلاک ۱۲۳</p>

                {/* دکمه بازگشت به بالا */}
                <button className="btn-top" onClick={scrollToTop}>
                    بازگشت به بالا
                </button>
            </div>
        </div>
    );
};

export default HomePage;
