import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthProvider";


const useCart = () => {
    const {user} = useAuth()
    const {refetch, data : carts = []} = useQuery({
        queryKey: ["carts", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/carts?email=${user?.email}`)
            return res.json()
        }
    })
    return {refetch, carts}
};

export default useCart;