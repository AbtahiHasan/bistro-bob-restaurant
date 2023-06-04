import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useSingleMenu = (id) => {
    const {axiosSecure} = useAxiosSecure()

    const {refetch, data : menu = {}} = useQuery({
        queryKey: ["menu", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/menu/${id}`)
            return res.data
        }
    })
    return {refetch, menu}
};

export default useSingleMenu;