import { useState } from "react"
import { useAuth } from "../context/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useAdmin = () => {

    const {user} = useAuth()
    const {axiosSecure} = useAxiosSecure()
    const {isLoading, data : isAdmin} = useQuery({
        queryKey: ["admin", user?.email],
        queryFn: async () => {
            if(user) {
                const res = await axiosSecure.get(`/is-admin?email=${user?.email}`)
                return res.data
            }
        }
    })
    
    return {isAdmin, isLoading}
}
export default useAdmin