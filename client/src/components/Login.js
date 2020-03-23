import React { useState } from 'react'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ credentials, setCredentails ] = useState({})

  return (
      <form onSubmit={ }>
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
