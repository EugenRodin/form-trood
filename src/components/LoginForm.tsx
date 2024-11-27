import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const validationScheme = Yup.object({
        login: Yup.string()
            .required('Login is required')
            .min(3, 'Login must be at least 3 characters')
            .max(15, 'Login must be less than 15 characters'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(20, 'Password must be less than 20 characters')
    })
    const handleSubmit = (values: { login: string; password: string }) => {
        console.log(values)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div>
            <h1 className='form-title-reg'>TROOD.</h1>
            <Formik initialValues={{ login: '', password: '' }} onSubmit={handleSubmit} validationSchema={validationScheme}>
                <Form>
                    <h2 className="form-title">Authorization</h2>
                    <div className='form-content'>
                        <div className="form-group">
                            <label htmlFor="login">Email</label>
                            <Field id="login" type="text" name="login" />
                            <ErrorMessage name="login" component="div" className="error" />
                        </div>
                        <div className="form-group password-group">
                            <label htmlFor="password">Password</label>
                            <Field id="password" type={showPassword ? "text" : "password"} name="password" />
                            <span className="password-toggle" onClick={togglePasswordVisibility}>
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </span>
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                    </div>
                    <div className='form-footer'>
                        <div className='form-button'>
                            <button className='btn-login' type="submit">Log in</button>
                            <button className='btn-signup' type='submit'>Sign up</button>
                        </div>
                        <button className='btn-forgot' type='submit'>Forgot password</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )

}

export default LoginForm
    const handleSubmit = (values: { login: string; password: string }) => {
        localStorage.setItem('user', JSON.stringify(values))
        alert('Login data saved!')
    }
