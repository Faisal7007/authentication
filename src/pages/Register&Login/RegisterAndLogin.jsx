import React, { useState } from 'react'
import './RegisterAndLogin.scss'
import { database } from '../../firebase/FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function RegisterAndLogin() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.email.value)
        const email = e.target.email.value
        const password = e.target.password.value
        const fullName = e.target.fullName.value

        createUserWithEmailAndPassword(database, email, password, fullName).then((data) => {
            console.log(data, 'signUpData')
            navigate('/login')
        })

            .catch((error) => {
                alert(error, " signUp Error"

                )

            })
    }

    const handleClick = () => {
        navigate('/login')
    }
    return (
        <div className='registerAndLogin'>
            <form className='form' onSubmit={(e) => { handleSubmit(e) }} >
                <h1>SignUp</h1>
                <input type="text" placeholder='Enter Your Name' name='fullName' />
                <input name='email' type="email" placeholder='Enter Email' />
                <input name='password' type="password" placeholder='Enter Password' />
                <button>SignUp</button>
                <h3>Already have an account</h3>
                <button onClick={handleClick} >Login</button>

            </form>
        </div>
    )
}

export default RegisterAndLogin
