import React, { useState } from 'react'
import './ForgotPassword.scss'
import { database } from '../../firebase/FirebaseConfig'

import {sendPasswordResetEmail} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Forgot() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSend = ()=>{
   
    sendPasswordResetEmail(database,email).then(()=>{
           alert('Check Your Email')
    })
    .then(()=>{
      navigate('/login')
    })
    .catch((error)=>{
         alert(error)
    })

  }
  return (
    <div className='forgot_password'>
      <div className="main_box">
        <div className="title">Forgot Password</div>

        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Register Email' />

        <button className='send_btn' onClick={handleSend}>Send</button>
      </div>

      
    </div>
  )
}

export default Forgot
