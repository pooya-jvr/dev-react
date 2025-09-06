import { useState } from 'react'
import '../Login/Login.css'
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
    const [success, setSuccess] = useState(false)

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
        if (!formData.confirmPassword) newErrors.confirmPassword = 'لطفاً رمز عبور تکراری را وارد کنید.'
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'رمز عبور مطابقت ندارد.'

        setErrors(newErrors)


        try {
            setLoading(true)
            const data = await registerApi(formData);
            if (data.status === 201) {
                setSuccess(true)
                setTimeout(() => navigate('/login'), 2000);
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='login'>
            {success && (
                <div className="popup-success">
                    ثبت نام با موفقیت انجام شد!
                </div>
            )}
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
                        {errors.firstName &&
                            (<div className="error-tooltip">{errors.firstName}</div>
                            )}
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
                        {errors.lastName && <div className="error-tooltip">{errors.lastName}</div>}
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
                        {errors.username && <div className="error-tooltip">{errors.username}</div>}
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
                        {errors.password && <div className="error-tooltip">{errors.password}</div>}
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
                        {errors.confirmPassword && <div className="error-tooltip">{errors.confirmPassword}</div>}
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
                    >
                        {loading ? 'در حال انتقال...' : 'حساب کاربری دارید؟'}
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Register
