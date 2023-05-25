const useMenus = () => {
    const [menues, setMenues] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/menus")
        .then(res => res.json())
        .then(data => {
            setMenues(data)
        })
    },[])

    return menues
}

export default useMenus