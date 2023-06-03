import { useAuth } from "../context/AuthProvider"

const useAdmin = () => {
    const {user} = useAuth()
    
}
export default useAdmin