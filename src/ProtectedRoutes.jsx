import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({element}) => {
    const onlineUser = JSON.parse(localStorage.getItem("onlineUser")) || null;

    if(!onlineUser){
        return <Navigate to="/login" replace />
       
    }
  return element;
  
}

export default ProtectedRoutes
