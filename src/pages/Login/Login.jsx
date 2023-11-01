import React, { useState } from 'react'
import './Login.scss'
import { database } from '../../firebase/FirebaseConfig'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate()
    const [login, setLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [showError, setShowError] = useState(false)
    console.log(email,password,'Email & Password')

 
    const handleLogin = ()=>{
        // e.preventDefault()
        // console.log(e.target.email.value)
        // const email = e.target.email.value
        // const password = e.target.password.value

        console.log(email,password,'Email & Password')
        
       signInWithEmailAndPassword(database,email,password).then((data)=>{console.log(data,'loginData')
        navigate('/home')
    })
    .catch((error)=>{setErrorMsg('Invalid Email Or Password') } , setShowError(true) , setTimeout(() => {
      setShowError(false)
      
    }, 2000))

    }

   
  return (
    <div className='registerAndLogin'>
        <div className='form' >
          {
            showError ?  <div className="error">{errorMsg}</div> : null

          }
     
            <h1>Login</h1>

            <input name='email' type="email" placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} value={email} />
            <input name='password' type="password" placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} value={password} />
            <div className="forgot_div" onClick={()=>{navigate('/forgotpassword')}}>
              Forgot Password
            </div>
            <button onClick={handleLogin} >Login</button>
            
            <h3>Don't have an account?</h3>

            <button onClick={()=>{navigate('/')}} >SignUp</button>

            

        </div>
    </div>
  )
}

export default Login
