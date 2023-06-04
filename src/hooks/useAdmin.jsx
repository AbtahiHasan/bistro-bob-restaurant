import { useState } from "react"
import { useAuth } from "../context/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useAdmin = () => {

    const {user} = useAuth()
    const {axiosSecure} = useAxiosSecure()
    const {isLoading, data } = useQuery({
        queryKey: ["carts", user?.email],
        queryFn: async () => {
            if(user) {
                const res = await axiosSecure.get(`/carts?email=${user?.email}`)
                return res.data
            }
        }
    })
    
    return {data, isLoading}
}
export default useAdmin