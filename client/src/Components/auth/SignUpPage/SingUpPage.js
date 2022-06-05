import './signUpPage.css'
import authService from '../authService'
import { userValidation } from '../../../services/userCheking';
import { useState, } from 'react';

import ErrorBar from '../ErrorBar/ErrorBar'

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
            'location': '',
            'userPhoneNumber': ''
        }
    )

    const SingUpFormHandler = (e) => {
        e.preventDefault()

        try {

            userValidation(userInfo)
            let result = authService.createUser(userInfo)
            result.then(response => {
                console.log(response)
                if (response.message) {
                    return setError(response)
                }
                setError({})
                navigate('/login')
            })

        }
        catch (error) {
            console.log('error ' + error)
            setError(error)
        }
    }

    const handleInputChange = (e) => setUser({
        ...userInfo,
        [e.currentTarget.name]: e.currentTarget.value
    })


    return (<div>

        <div className='sign-up-card'>
            <div className='register-wrapper-class'>
                <h2 className='register-heading-class'>Register</h2>

                <form className='form-register-class' onSubmit={SingUpFormHandler}>
                    <label>Username</label>
                    <div>
                        <input className='input-register-class' name='username' type='text' id='username' onChange={handleInputChange}></input>
                    </div>
                    <label>Email</label>
                    <div>
                        <input className='input-register-class' name='userEmail' type='text' id='email' onChange={handleInputChange}></input>
                    </div>
                    <label>Password</label>
                    <div>
                        <input className='input-register-class' name='password' type='password' id='password' onChange={handleInputChange} ></input>
                    </div>
                    <label>Comfirm password</label>
                    <div>

                        <input className='input-register-class' name='rePassword' type='password' id='rePassword' onChange={handleInputChange} ></input>
                    </div>

                    <label>Phone Number</label>
                    <div>

                        <input className='input-register-class' name='userPhoneNumber' type='text' id='userPhoneNumber' onChange={handleInputChange} ></input>
                    </div>
                    <label>Where you live</label>
                    <div>

                        <input className='input-register-class' name='location' type='text' id='location' onChange={handleInputChange} ></input>
                    </div>
                    <label>Sex</label>
                    <div>

                        <select className='input-register-class' name='gender' onChange={handleInputChange}>
                            <option id='default' value='default' defaultChecked >Please choice </option>
                            <option id='female' value='female'>Female </option>
                            <option id='male' value='male'>Male </option>
                        </select>
                    </div>

                    <button className='register-button' type="submit">Register</button>
                    {errorArr ? <ErrorBar data={errorArr} /> : ''}
                </form>
            </div>
        </div >
    </div>
    )
}

export default SingUpPage