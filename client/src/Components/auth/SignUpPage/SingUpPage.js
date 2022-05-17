import './signUpPage.css'
import authService from '../authService'
import { userValidation } from '../../../services/userCheking';
import { useState } from 'react';
const SingUpPage = () => {

    let [errorArr, setError] = useState([])

    let user;
    function SingUpFormHandler(e) {
        e.preventDefault()

        let username = e.target.username.value
        let password = e.target.password.value
        let rePassword = e.target.rePassword.value
        let gender = e.target.gender.value

        user = {
            'username': username,
            'password': password,
            'rePassword': rePassword,
            'gender': gender
        }
        try {
            userValidation(user)

        } catch (error) {
            setError(error)
           
        }

    }





    return (<div>

        <div className='sign-up-card'>
            <form className='form-class' onSubmit={SingUpFormHandler}>
                <label>Username</label>
                <input name='username' type='text' id='username'></input>
                <label>Email</label>
                <input name='email' type='text' id='email' ></input>
                <label>Password</label>
                <input name='password' type='password' id='password' ></input>
                <label>Comfirm password</label>
                <input name='rePassword' type='password' id='rePassword' ></input>
                <label>Sex</label>
                <select name='gender'>
                    <option id='female' value='female'>Female </option>
                    <option id='male' value='male'>Male </option>
                </select>
                <button className='register-button' type="submit">Register</button>
            </form>
        </div >
    </div>

    )
}

export default SingUpPage