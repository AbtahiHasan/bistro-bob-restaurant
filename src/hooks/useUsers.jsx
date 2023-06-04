import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const {user} = useAuth()
    const {axiosSecure} = useAxiosSecure()
    const {refetch : refetchUser, data : users = []} = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {
            if(user?.email) {
                const res = await axiosSecure("/users")
                return res.data
            }
        }
    })
    return {refetchUser, users}
};

export default useUsers;