import MenuCard from "./MenuCard";
import MenuCover from "./MenuCover";

const Menus = ({category, img, title, banner}) => {
   
    return (
        <section className={`${banner ? "mt-[140px]" :"mt-8"}`}>
        {banner ? <MenuCover img={img} title={title}/> : ""}
        <div className="grid md:grid-cols-2 gap-5 mt-8 container">
            {
                category && category.map(menu => <MenuCard key={menu._id} menu={menu}/>)
            }
            
        </div>
        <button className="btn-primary my-6 block mx-auto">ORDER YOUR FAVOURITE FOOD</button>
    </section>
    );
};

export default Menus;