import React, { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({element}) => {
    const {isAuthenticated} = useContext(AuthContext);

    if(!isAuthenticated){
        return <Navigate to="/login" replace />
       
    }
  return element;
  
}

export default ProtectedRoutes
