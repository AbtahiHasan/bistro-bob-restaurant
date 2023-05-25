import MenuCover from "../components/MenuCover"
import Menus from "../components/Menus"
import useCategory from "../hooks/useCategory"
import banner from "/menu/banner3.jpg"
import dessertImg from "/menu/dessert-bg.jpeg"
import pizzaImg from "/menu/pizza-bg.jpg"
import saladImg from "/menu/salad-bg.jpg"
import soupImg from  "/menu/soup-bg.jpg"

const OurMenu = () => {
    const dessert = useCategory("dessert")
    const pizza = useCategory("pizza")
    const salad = useCategory("salad")
    const soup = useCategory("soup")
    return (
        <main>
            <MenuCover variant={"banner"} title={"OUR MENU"} img={banner}/>
            <Menus category={dessert} title={"dessert"} img={dessertImg}/>
            <Menus category={pizza} title={"pizza"} img={pizzaImg}/>
            <Menus category={salad} title={"salad"} img={saladImg}/>
            <Menus category={soup} title={"soup"} img={soupImg}/>
        </main>
    );
};

export default OurMenu;