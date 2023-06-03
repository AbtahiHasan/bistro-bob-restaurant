import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const {isLoading : usersIsLoading, refetch : refetchUser, data : users = []} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/users")
            return res.json()
        }
    })
    return {usersIsLoading, refetchUser, users}
};

export default useUsers;