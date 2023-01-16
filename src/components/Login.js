import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const validationSchema = Yup.object().shape({
        name: Yup.string().when('isLogin', {
            is: false,
            then: Yup.string().required('Name is required'),
        }),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    const handleToggle = () => setIsLogin(!isLogin);

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        if (isLogin) {
            // Handle login submission
            // ...
        } else {
            // Handle registration submission
            // ...
        }
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    {!isLogin && (
                        <Field
                            type="text"
                            name="name"
                            placeholder="Name"
                        />
                    )}
                    <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <ErrorMessage name="email" component="div" />
                    <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                    <button type="button" onClick={handleToggle}>
                        {isLogin ? 'Create an account' : 'Already have an account'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Login;
