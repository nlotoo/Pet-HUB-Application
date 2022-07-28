import './loginPage.css';
import { loginUserValidation } from '../../../services/loginUserValidation';
import ErrorBar from '../ErrorBar/ErrorBar';
import { loginUser } from '../authService';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
const LoginForm = () => {

  let navigate = useNavigate();



  let [errorArr, setError] = useState();

  let [userInfo, setUser] = useState({ email: '', password: '' });

  let [, setToken] = useState({});

  function submitHandler(e) {
    e.preventDefault();
    try {
      loginUserValidation(userInfo);
      loginUser(userInfo)
        .then((responce) => {
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
          return responce;
        })
        .catch((err) => { console.log(err) });


    } catch (err) {
      setError(err);
    };


  };



  const handleInputChange = (e) => setUser({
    ...userInfo,
    [e.currentTarget.name]: e.currentTarget.value
  });




  return (
    <div className='wrapper-login-card'>
      <form className='form-login-card' onSubmit={submitHandler}>
        <h2 className='login-heading-class'>Sign in to your account</h2>


        <div>

          <input placeholder='Type your email' className='inputs-login-in-card' id="email" name="email" onChange={handleInputChange} ></input>
        </div>

        <div>

          <input placeholder='Type your password' className='inputs-login-in-card' type="password" id="password" name="password" onChange={handleInputChange}></input>
        </div>
        <div className='forgot-passwrod'><Link to="/">Forgot your password</Link></div>
        <div>  {errorArr ? <ErrorBar data={errorArr} /> : ''}</div>
        <button className='login-button'>Login</button>
      </form>

    </div>
  );
};

export default LoginForm;