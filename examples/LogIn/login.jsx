// React imports
import React, { useState } from 'react'

import FormContainer from '../../modules/containers/FormContainer.jsx'

// Material UI imports
import { CircularProgress } from '@mui/material'

// Others
import { useNavigate } from 'react-router-dom'

export default function LoginPage () {
  // State used to render error messages from the backend
  const [statusMessage, setStatusMessage] = useState('')

  // Used to redirect the user
  const navigate = useNavigate()

  // Used to make changes to a global state
  const dispatch = useDispatch()

  // Formik form initial values
  const initialValues = {
    email: '',
    password: ''
  }

  const handleSubmit = async (values, reset) => {
    setStatusMessage('')

    try {
      const response = await axios.post('/login', values)

      // eslint-disable-next-line no-undef
      localStorage.setItem('token', response.data.body.token)

      dispatch(saveUser(response.data.body.user))

      reset()

      navigate('/home')
    } catch (error) {
      if (error.response.status === 301) navigate('/email-confirmation/false')
      if (error.response) setStatusMessage(error.response.data.message)
      else setStatusMessage(error.message)
    }
  }

  return (
    <>
      <FormContainer initialValues={initialValues} handleSubmit={handleSubmit} />

      {isSubmitting
        ? <div className={styles.progress}><CircularProgress /> </div>
        : <button type='submit'>Login</button>}
      {statusMessage ? <p className={styles.statusError}>{statusMessage}</p> : null}

    </>
  )
}