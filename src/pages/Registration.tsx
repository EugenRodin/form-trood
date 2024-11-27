import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const Registration = () => {
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

    return (
        <div>
            <h1 className='form-title-reg'>TROOD.</h1>
            <Formik initialValues={{login: '', password: ''}} onSubmit={handleSubmit} validationSchema={validationScheme}>
                <Form>
                    <h2 className="form-title form-title__reg">Registration</h2>
                    <div className='form-content'>
                        <div className="form-group">
                            <label htmlFor="login">Email</label>
                            <Field id="login" type="text" name="login" />
                            <ErrorMessage name="login" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field id="password" type="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                    </div>
                    <div className='form-signup'>
                        <button className='btn-signup' type='submit'>Sign up</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )

}

export default Registration