import { useState } from 'react'
import './Login.css'
import { loginApi } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        let newErrors = {}
        if (!username) newErrors.username = 'لطفاً نام کاربری را وارد کنید.'
        if (!password) newErrors.password = 'لطفاً رمز عبور را وارد کنید.'

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {

            try {
                setLoading(true)
                const data = await loginApi(username, password)
                localStorage.setItem('token', data.access)
                navigate('/products/')

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
                <h2>ورود کاربر</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="نام کاربری"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={errors.username ? 'invalid' : ''}
                        />
                        {errors.username && (
                            <span className="tooltip">{errors.username}</span>
                        )}
                    </div>

                    <div className="input-wrapper">
                        <input
                            type="password"
                            placeholder="رمز عبور"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={errors.password ? 'invalid' : ''}
                        />
                        {errors.password && (
                            <span className="tooltip">{errors.password}</span>
                        )}
                    </div>

                    {errors.general && (
                        <div className="error-general">{errors.general}</div>
                    )}

                    <button type="submit" disabled={loading}>
                        {loading ? 'در حال دخول...' : 'برو داخل'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
