import { useEffect, useState } from 'react'
import './loginPage.css'
import { loginUserValidation } from '../../../services/loginUserValidation'



const LoginForm = () => {



  let [errorArr, setError] = useState()

  let [userInfo, setUser] = useState({ email: '', password: '' })

  let foo;

  function submitHandler(e) {
    e.preventDefault()


    try {
      loginUserValidation(userInfo)


    } catch (err) {
      console.log(err)
      setError(err)
      console.log(errorArr)

      foo = errorArr.errorMessage[0].email
    }
  }



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
        <div>error{foo}</div>
      </form>

    </div>
  )
}

export default LoginForm;