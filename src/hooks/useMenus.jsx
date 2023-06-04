import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import useAxiosSecure from "./useAxiosSecure"

const useMenus = () => {
    const {axiosSecure} = useAxiosSecure()

    const {refetch, data : menues = []} = useQuery({
        queryKey: ["menus"],
        queryFn: async () => {
            const res = await axiosSecure.get("/menus")
            return res.data
        }
    })

    return { refetch,menues}
}

export default useMenus