import React, { useState } from 'react'
import axios from 'axios'
import { PETITIONS } from '../../../requestUrl'
import './register.css'
  

const Register = () => {
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState({})

  const validate = values => {
    const error = {}
    if (!values.name) {
      error.name = 'Required';
    } else if (values.name.test > 15) {
      error.name = 'Este campo es obligatorio';
    }
  
    if (!values.lastName) {
      error.lastName = 'Required';
    } else if (values.lastName.test > 20) {
      error.lastName = 'Este campo es obligatorio';
    }
  
    if (!values.email) {
      error.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      error.email = "Invalid email address";
    }
  
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(user))

    axios.post(PETITIONS.register, user )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  const handleName = (e) => {
    const names = e.target.value
    setUser({...user, names})

  }

  const handleLastName = (e) => {
    const surname = e.target.value
    setUser({...user, surname})

  }

  const handleEmail = (e) => {
    const email = e.target.value
    setUser({...user, email})
  }

  const handlePassword = (e) => {
    const password = e.target.value
    setUser({...user, password})
  }
  console.log(user)

  return (
    <>
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
      <h1> Registrate </h1>
        <label>Nombre</label>
        <input type='text' onChange={handleName}/>
        {errors.name && <p>{errors.name}</p>}
        <label>Apellido</label>
        <input type='text' onChange={handleLastName}/>
        {errors.lastName && <p>{errors.lastName}</p>}
        <label>Correo</label>
        <input type='email'onChange={handleEmail}/>

        <label>Contraseña</label>
        <input type='password'onChange={handlePassword}/>

        <input className='buttonS' type='submit'/>
      </form>
      </div>
    </>
  )
}

export default Register