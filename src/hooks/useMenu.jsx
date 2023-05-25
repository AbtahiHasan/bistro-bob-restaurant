const useMenu = (id) => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/menu/${id}`)
        .then(res => res.json())
        .then(data => {
            setMenu(data)
        })
    },[id])

    return menu
};

export default useMenu;