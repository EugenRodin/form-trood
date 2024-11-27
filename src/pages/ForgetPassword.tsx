import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const Registration = () => {
    const validationScheme = Yup.object({
        login: Yup.string()
            .required('Email is required')
            .min(3, 'Email must be at least 3 characters')
            .max(15, 'Email must be less than 15 characters')
    })
    const handleSubmit = (values: { login: string }) => {
        console.log(values)
    }

    return (
        <div>
            <h1 className='form-title-reg'>TROOD.</h1>
            <Formik initialValues={{login: ''}} onSubmit={handleSubmit} validationSchema={validationScheme}>
                <Form>
                    <div className='form-header'>
                        <h2 className="form-title">Forgot your password</h2>
                        <p className='form-title__p'>Enter your email below and we’ll get you back on track</p>
                    </div>
                    <div className='form-content'>
                        <div className="form-group">
                            <label htmlFor="login">Email</label>
                            <Field id="login" type="text" name="login" />
                            <ErrorMessage name="login" component="div" className="error" />
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <div className='form-recover'>
                            <button className='btn-recover' type='submit'>Recover password</button>
                        </div>
                        <button className='btn-back'>Back to Log in</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )

}

export default Registration