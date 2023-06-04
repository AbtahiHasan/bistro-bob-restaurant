import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
    const {user} = useAuth()
    const {axiosSecure} = useAxiosSecure()
    const {isLoading, refetch, data : carts = []} = useQuery({
        queryKey: ["carts", user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
                
            return res.data
        }
    })
    return {isLoading, refetch, carts}
};

export default useCart;