import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthProvider";


const useCart = () => {
    const {user} = useAuth()
    const token = localStorage.getItem("access-token")
    const {isLoading, refetch, data : carts = []} = useQuery({
        queryKey: ["carts", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            return res.json()
        }
    })
    return {isLoading, refetch, carts}
};

export default useCart;