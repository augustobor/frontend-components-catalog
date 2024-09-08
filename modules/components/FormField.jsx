// React imports
import React from 'react'

import Box from '@mui/material/Box';

// Formik imports
import { Field } from 'formik'

/*
@params:
    fieldname: name of the field in form
    error_field_text: output error when validation schema fails
*/

export default function FormField (fieldname, error_field_text) {
  return (
    <>
        <Box>
            <label htmlFor={fieldname}>{{ fieldname }}</label>
            <Field type='text' id={fieldname} name={fieldname} autoComplete='off' />
            <ErrorMessage name={fieldname} component={() => (<p className={styles.error}>{error_field_text}</p>)} />
        </Box>
    </>
  )
}