import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../Spinner/LoadingSpinner';
import { useAuth } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';






const AdminOnly = ({children}) => {
    const {data} = useAdmin()
    const {loading, user} = useAuth()
    const {isLoading} = useAdmin()
    const location = useLocation();
    if(loading || isLoading){
        return <LoadingSpinner/>
    }
    
    if(user.email){
        return children;
    }
    return <Navigate state={{from: location}} to="/" replace/>;
};

export default AdminOnly;