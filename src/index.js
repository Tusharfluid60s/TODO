import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/app.scss"

export const server = "https://project1todoappp.onrender.com"


export const Context = createContext();
const isAuthenticated =false

const AppWrapper = ()=>{

    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [loading,setLoading] = useState(false);
    const [userr,setUserr]=useState({})
    return(
        <Context.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            loading,
            setLoading,
            userr,
            setUserr

        }}>
            <App/>
        </Context.Provider>
    )
} 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
<AppWrapper/>  
);

