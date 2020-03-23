import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = ( props ) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ credentials, setCredentials ] = useState({})

  const Login = ( e ) => {
    e.preventDefault()
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
                   .then(res => {
                     console.log(credentials, res.data)
                     localStorage.setItem('token', res.data.payload)
                     props.history.push('/bubblepage')
                   })
  }
  const handleChange = ( e ) => {
    setCredentials({
                     ...credentials,
                     [e.target.name]: e.target.value
                   })

  }
  return (
      <form onSubmit={ Login }>
        <h1>Welcome to the Bubble App!</h1>
        <label htmlFor="username">Username:
          <input name='username' id='username' value={ credentials.username }
                 onChange={ handleChange }/>
        </label>
        <label htmlFor='password'>Password:
          <input type="password" name='password' id='password' value={ credentials.password }
                 onChange={ handleChange }/>
        </label>
        <button>Login</button>
      </form>
  );
};

export default Login;
