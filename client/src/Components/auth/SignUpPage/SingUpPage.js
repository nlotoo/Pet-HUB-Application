import './signUpPage.css'
import authService from '../authService'
import { userValidation } from '../../../services/userCheking';
import { useState } from 'react';
const SingUpPage = () => {

    let [errorArr, setError] = useState()
    let [userInfo, setUser] = useState({
        'username': '',
        'email': '',
        'password': '',
        'rePassword': '',
    })

    function SingUpFormHandler(e) {
        e.preventDefault()
        try {
            userValidation(userInfo)

        } catch (error) {
            setError(error)
            console.log(errorArr)
        }

    }


    const handleInputChange = (e) => setUser({
        ...userInfo,
        [e.currentTarget.name]: e.currentTarget.value
    })




    return (<div>

        <div className='sign-up-card'>
            <form className='form-class' onSubmit={SingUpFormHandler}>
                <label>Username</label>
                <input name='username' type='text' id='username' onChange={handleInputChange}></input>
                <label>Email</label>
                <input name='email' type='text' id='email' onChange={handleInputChange}></input>
                <label>Password</label>
                <input name='password' type='password' id='password' onChange={handleInputChange} ></input>
                <label>Comfirm password</label>
                <input name='rePassword' type='password' id='rePassword' onChange={handleInputChange} ></input>
                <label>Sex</label>
                <select name='gender' onChange={handleInputChange}>
                    <option id='female' value='default' defaultChecked >Please choice </option>
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