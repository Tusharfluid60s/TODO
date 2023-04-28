import React, { useContext } from 'react'
import { Link ,Navigate } from 'react-router-dom'
import { Context } from '..'
import axios from 'axios'
import {server} from "../index"
import { toast } from 'react-hot-toast'

const Header = () => {

   //using useContext hook and destrucring it
const {isAuthenticated,setIsAuthenticated,loading,setLoading}=  useContext(Context)

  const logoutHandler = async()=>{
    setLoading(true)
    try {
      const data = await axios.get(`${server}/users/logout`,{
        withCredentials:true
      })
      toast.success(data.data.message)
      setIsAuthenticated(false)
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast.error(error.respone.data.message)
      setIsAuthenticated(true)
      setLoading(false)
    }
  }



 
  return (
    <nav className='header'>
        <div>
            <h2>Todo App</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            {
              isAuthenticated?
              (<button onClick={logoutHandler} disabled={loading} className='btn'>Logout</button>)//if loadong is true then disable the btn
              :( <Link to={"/login"}>Login</Link>)
            }
           
            
        </article>
    </nav>
  )
}

export default Header