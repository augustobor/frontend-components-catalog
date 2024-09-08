// React imports
import React from 'react'

// Formik imports
import {  Form, Formik } from 'formik'

// Material UI imports
import { Button } from '@mui/material/Button';

// ValidatorSchemas imports
import { loginValidationSchema } from './validationSchema.js'

import FormField from '../components/FormField.jsx'


/*
@params:
    initialValues: json key-value where the 'key' is the field name and the 'value' the default
    handleSubmit: output error when validation schema fails
*/

export default function FormContainer (initialValues, handleSubmit) {

  // Used to redirect the user
  const navigate = useNavigate()

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={() => loginValidationSchema}
        onSubmit={async (values, { resetForm }) => await handleSubmit(values, resetForm)}
      >
        {({ errors, isSubmitting }) => (
          <Form className={styles.form}>
            <FormField fieldname='email' error_field_text={errors.email} />
            <FormField fieldname='password' error_field_text={errors.password} />

            <Button onClick={() => navigate('/reset-password')}>
              Forgot Password
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}