import FoodCard from "./FoodCard";
import Heading from "./Heading";
import useMenus from "../hooks/useMenus";

const Recommends = () => {
    const {menues} = useMenus()
    return (
        <section className="mt-[140px] container">
            <Heading heading="Should Try" subHeading="CHEF RECOMMENDS"/>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
                
                {
                   menues && menues.slice(0,3).map(menu => <FoodCard key={menu._id} home={true} menu={menu} />)
                }
            </div>
        </section>
    );
};

export default Recommends;