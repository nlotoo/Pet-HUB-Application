import './signUpPage.css'
import authService from '../authService'
import { userValidation } from '../../../services/userCheking';
import { useEffect, useState, } from 'react';

import ErrorBar from './ErrorBar/ErrorBar'

import { useNavigate } from 'react-router-dom'

const SingUpPage = () => {

    let navigate = useNavigate()
    let [errorArr, setError] = useState()

    let [userInfo, setUser] = useState(
        {
            'username': '',
            'userEmail': '',
            'password': '',
            'rePassword': '',
            'gender': '',
        }
    )

    const SingUpFormHandler = (e) => {
        e.preventDefault()

        try {

            userValidation(userInfo)
            let result = authService.createUser(userInfo)
            result.then(res => {
              return  setError(res)
            })
 
            // navigate('/login')

        }
        catch (error) {
            console.log(error)
            setError(error)
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
                <input name='userEmail' type='text' id='email' onChange={handleInputChange}></input>
                <label>Password</label>
                <input name='password' type='password' id='password' onChange={handleInputChange} ></input>
                <label>Comfirm password</label>
                <input name='rePassword' type='password' id='rePassword' onChange={handleInputChange} ></input>
                <label>Sex</label>
                <select name='gender' onChange={handleInputChange}>
                    <option id='default' value='default' defaultChecked >Please choice </option>
                    <option id='female' value='female'>Female </option>
                    <option id='male' value='male'>Male </option>
                </select>

                {errorArr ? <ErrorBar data={errorArr} /> : ''}
                <button className='register-button' type="submit">Register</button>
            </form>
        </div >
    </div>
    )
}

export default SingUpPage