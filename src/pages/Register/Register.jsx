import { useState } from 'react'
import '../Login/Login.css'   // از همون استایل لاگین استفاده کن
import { registerApi } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    })

    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let newErrors = {}

        if (!formData.firstName) newErrors.firstName = 'لطفاً نام را وارد کنید.'
        if (!formData.lastName) newErrors.lastName = 'لطفاً نام خانوادگی را وارد کنید.'
        if (!formData.username) newErrors.username = 'لطفاً نام کاربری را وارد کنید.'
        if (!formData.password) newErrors.password = 'لطفاً رمز عبور را وارد کنید.'
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'رمز عبور مطابقت ندارد.'

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            try {
                setLoading(true)
                await registerApi(formData)   // این متد باید توی api/auth تعریف بشه
                navigate('/login')            // بعد از رجیستر بفرسته صفحه لاگین
            } catch (err) {
                setErrors({ general: err.message || 'خطای ناشناخته' })
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <div className='login'>
            <div className="login-container">
                <h2>ثبت‌نام کاربر</h2>
                <form onSubmit={handleSubmit} noValidate>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="نام"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={errors.firstName ? 'invalid' : ''}
                        />
                        {errors.firstName && <span className="tooltip">{errors.firstName}</span>}
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="نام خانوادگی"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={errors.lastName ? 'invalid' : ''}
                        />
                        {errors.lastName && <span className="tooltip">{errors.lastName}</span>}
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="username"
                            placeholder="نام کاربری"
                            value={formData.username}
                            onChange={handleChange}
                            className={errors.username ? 'invalid' : ''}
                        />
                        {errors.username && <span className="tooltip">{errors.username}</span>}
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="password"
                            name="password"
                            placeholder="رمز عبور"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? 'invalid' : ''}
                        />
                        {errors.password && <span className="tooltip">{errors.password}</span>}
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="تکرار رمز عبور"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={errors.confirmPassword ? 'invalid' : ''}
                        />
                        {errors.confirmPassword && <span className="tooltip">{errors.confirmPassword}</span>}
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="email"
                            name="email"
                            placeholder="ایمیل (اختیاری)"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {errors.general && (
                        <div className="error-general">{errors.general}</div>
                    )}

                    <button type="submit" disabled={loading}>
                        {loading ? 'در حال ثبت...' : 'ثبت‌نام'}
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate('/login')}
                        disabled={loading}
                    >
                        {loading ? 'در حال انتقال...' : 'حساب کاربری دارید؟'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
