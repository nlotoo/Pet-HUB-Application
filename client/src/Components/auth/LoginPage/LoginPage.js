import { useEffect, useState } from 'react'
import './loginPage.css'
import { loginUserValidation } from '../../../services/loginUserValidation'
import ErrorBar from '../ErrorBar/ErrorBar'
import authService from '../authService'

const LoginForm = () => {



  let [errorArr, setError] = useState()

  let [userInfo, setUser] = useState({ email: '', password: '' })

  function submitHandler(e) {
    e.preventDefault()


    try {
      loginUserValidation(userInfo)

      authService.loginUser(userInfo)
        .then((data) => {
          setError({})
          return data
        })


    } catch (err) {
      setError(err)
    }
  }

  console.log(errorArr)


  const handleInputChange = (e) => setUser({
    ...userInfo,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return (
    <div className='login-card '>
      <form className='form-class-login' onSubmit={submitHandler}>
        <label>Email</label>
        <input id="email" name="email" onChange={handleInputChange} ></input>
        <label>Password</label>
        <input id="password" name="password" onChange={handleInputChange}></input>
        <button>Login</button>
        <div>  {errorArr ? <ErrorBar data={errorArr} /> : ''}</div>
      </form>

    </div>
  )
}

export default LoginForm;