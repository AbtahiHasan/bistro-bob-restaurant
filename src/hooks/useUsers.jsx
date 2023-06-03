import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const {user} = useAuth()
    const {axiosSecure} = useAxiosSecure()
    const {isLoading : usersIsLoading, refetch : refetchUser, data : users = []} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            if(user) {
                const res = await axiosSecure(`/users?email=${user?.email}`)
                return res.json()
            }
        }
    })
    return {usersIsLoading, refetchUser, users}
};

export default useUsers;