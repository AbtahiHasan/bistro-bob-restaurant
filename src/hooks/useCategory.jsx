const useCategory = (categoryName) => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/category?category=${categoryName}`)
        .then(res => res.json())
        .then(data => {
            setCategory(data)
        })
    },[categoryName])

    return category
};

export default useCategory;