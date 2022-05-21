
import './loginPage.css'


const LoginForm = () => {



  function submitHandler(e) {
    e.preventDefault()
    console.log(e.target.email.value)
  }

  return (
    <div className='login-card '>
      <form className='form-class-login' onSubmit={submitHandler}>
        <label>Email</label>
        <input id="email" name="email"></input>
        <label>Password</label>
        <input id="password" name="password"></input>
        <button>Login</button>
      </form>

    </div>
  )
}

export default LoginForm;