import React from 'react';
import { useAuthState} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from '../Loading/Loading';
import auth from '../../firbase.init';
import useAdmin from '../../Hook/useAdmin';
import { signOut } from 'firebase/auth';
const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoading){
        return <Loading/>
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};


export default RequireAdmin;