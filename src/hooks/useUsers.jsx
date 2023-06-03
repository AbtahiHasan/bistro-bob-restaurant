import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthProvider";

const useUsers = () => {
    const {user} = useAuth()
    const {isLoading : usersIsLoading, refetch : refetchUser, data : users = []} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            if(user) {
                const res = await fetch(`http://localhost:3000/users?email=${user?.email}`)
                return res.json()
            }
        }
    })
    return {usersIsLoading, refetchUser, users}
};

export default useUsers;