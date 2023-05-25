import Heading from "../components/Heading"
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
    const offered = useCategory("offered")
    return (
        <main>
            <MenuCover variant={"banner"} title={"OUR MENU"} img={banner}/>
            <Heading className="mt-[140px]" heading={"TODAY'S OFFER"} subHeading={"Don't miss"}/>
            <Menus category={offered} banner={false}  title={"dessert"} img={dessertImg}/>
            <Menus category={dessert} banner={true}  title={"dessert"} img={dessertImg}/>
            <Menus category={pizza} banner={true}  title={"pizza"} img={pizzaImg}/>
            <Menus category={salad} banner={true}  title={"salad"} img={saladImg}/>
            <Menus category={soup} banner={true}  title={"soup"} img={soupImg}/>
        </main>
    );
};

export default OurMenu;