import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context } from '..';
import {server} from "../index"
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Login = () => {

    const {isAuthenticated,setIsAuthenticated,loading,setLoading} = useContext(Context);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


   const submitHandler = async(e)=>{
     e.preventDefault();
     console.log(email,password)
     setLoading(true)

     try {
        const data = await axios.post(`${server}/users/login`,{
            email,password,
        },{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
            
        })

        toast.success(data.data.message)
        setIsAuthenticated(true)
        setLoading(false)
        
     } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)// we the message that we have written in the backend
        setIsAuthenticated(false)
        setLoading(false)
        
     }
   }


    if(isAuthenticated) return <Navigate to={"/"}/>// if the user isauthenticated then navigate it to home page 

  return (
<div className='login'>
    <section>
        <form onSubmit={submitHandler} action="">
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
            <button type='submit' disabled={loading}>Login</button>
            <h4>or</h4>
            <Link to={"/register"}>Sign Up</Link>
        </form>
    </section>
</div>
    )
}

export default Login