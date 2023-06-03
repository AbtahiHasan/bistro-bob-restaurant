import { useState } from "react"
import { useAuth } from "../context/AuthProvider"

const useAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const {user} = useAuth()
    if(user) {
        fetch(`http://localhost:3000/is_admin?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data.isAdmin))
    }
    return {isAdmin}
}
export default useAdmin