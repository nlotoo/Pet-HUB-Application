import { useState } from 'react'
import './loginPage.css'
import { loginUserValidation } from '../../../services/loginUserValidation'
import ErrorBar from '../ErrorBar/ErrorBar'
import authService from '../authService'
import useResponsiveDesign from '../../../services/useResposiveDisplayTool'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

  let navigate = useNavigate()


  let [errorArr, setError] = useState()

  let [userInfo, setUser] = useState({ email: '', password: '' })

  let [token, setToken] = useState({})

  function submitHandler(e) {
    e.preventDefault()
    try {
      loginUserValidation(userInfo)

      authService.loginUser(userInfo)
        .then((responce) => {
          console.log(responce)
          if (responce.message) {
            setError(responce)
            setToken(undefined)
            window.localStorage.clear();
          } else {
            setToken(responce)
            setError({})
            window.localStorage.setItem('User Token', responce.token)
            window.localStorage.setItem('User email', responce.userEmail)
            window.localStorage.setItem('User ID', responce.userID)
            navigate('/home-page')
            window.location.reload();
          }
          return responce
        })
        .catch((err) => { console.log(err) })
    } catch (err) {
      setError(err)
    }
  }

  const handleInputChange = (e) => setUser({
    ...userInfo,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return (
    <div className={`login-card${useResponsiveDesign()}`}>
      <h2 className='login-heading-class'>Login user</h2>
      <form className={`form-class-login${useResponsiveDesign()}`} onSubmit={submitHandler}>
        <label>Email</label>
        <div>

          <input className={`input-login-class${useResponsiveDesign()}`} id="email" name="email" onChange={handleInputChange} ></input>
        </div>
        <label>Password</label>
        <div>

          <input className={`input-login-class${useResponsiveDesign()}`} id="password" name="password" onChange={handleInputChange}></input>
        </div>
        <button className='login-button-class'>Login</button>
        <div>  {errorArr ? <ErrorBar data={errorArr} /> : ''}</div>
      </form>

    </div>
  )
}

export default LoginForm;