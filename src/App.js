import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Profilee from "./pages/Profilee";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import {server} from "./index"
import { Context } from ".";
import axios from "axios";

function App() {

  const {setUserr,setIsAuthenticated,setLoading}=useContext(Context);
  useEffect(()=>{
    setLoading(true)
    axios.get(`${server}/users/me`,{
      withCredentials:true
    }).then((res)=>{
      setUserr(res.data.user)
      setIsAuthenticated(true)
      setLoading(false)
    }).catch((error)=>{
        setUserr({})
        setIsAuthenticated(false)
        setLoading(false)
    })
  },[])
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profilee/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>


      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
