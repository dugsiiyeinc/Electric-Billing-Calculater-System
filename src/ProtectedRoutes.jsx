import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({element}) => {
    const onlineUser = JSON.parse(localStorage.getItem("onlineUser")) || null;

    if(!onlineUser){
        toast.error("if you want access savedData first Login !");
        return <Navigate to="/login" replace />
       
    }

   return element;
  
}

export default ProtectedRoutes
