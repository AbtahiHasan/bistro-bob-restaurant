import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../Spinner/LoadingSpinner';
import useCart from '../../hooks/useCart';
import { useAuth } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';





const AdminOnly = ({children}) => {
    const {isAdmin} = useAdmin()
    const {loading, user} = useAuth()
    const {isLoading} = useCart()
    const location = useLocation();
    if(loading || isLoading){
        return <LoadingSpinner/>
    }

    if(user.email && isAdmin){
        return children;
    }
    return <Navigate state={{from: location}} to="/" replace/>;
};

export default AdminOnly;