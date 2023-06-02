import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../Spinner/LoadingSpinner';
import useCart from '../../hooks/useCart';
import { useAuth } from '../../context/AuthProvider';





const RequiredLogin = ({children}) => {
    const {loading, user} = useAuth()
    const {isLoading} = useCart()
    const location = useLocation();
    if(loading || isLoading){
        return <LoadingSpinner/>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace/>;
};

export default RequiredLogin;