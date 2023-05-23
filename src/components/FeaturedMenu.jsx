import Heading from "./Heading";

const FeaturedMenu = () => {
    return (
        <section style={{background: "url('/home/banner.jpg'), linear-gradient()", backgroundAttachment: "fixed", backgroundBlendMode: "overlay"}} className=" bg-[#00000080] mt-[140px] bg-fixed bg-cover p-10">
            <div className="container">
                <Heading className={"my-5"} varient="white" heading="Check it out" subHeading="FROM OUR MENU" />
        
                <article className="flex">
                    <img className="w-full" src={"https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg"} alt="" />
                    <div className="px-8  text-white">
                        <h3>March 20, 2023</h3>
                        <h2 className="text-2xl font-bold mt-4">WHERE CAN I GET SOME?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="mb-[15px] btn-primary text-[#BB8506] border-[#BB8506] bg-[#E8E8E8] hover:bg-[#1F2937]">add to cart</button>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default FeaturedMenu;