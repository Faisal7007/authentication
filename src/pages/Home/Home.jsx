import React from 'react'
import './Home.scss'
import  {signOut} from 'firebase/auth'
import { database } from '../../firebase/FirebaseConfig'
import { useNavigate } from 'react-router-dom'


function Home() {
   const navigate = useNavigate()
    const handleSignOut = ()=>{
        signOut(database).then(()=>{
            navigate('/login')

        })
    }
  return (
    <div className='home'>
        <h1>Welcome to Home</h1>
        <button onClick={handleSignOut} >SignOut</button>
    </div>
  )
}

export default Home
