
const FoodCard = ({menu}) => {
    const {name, recipe, image} = menu
    return (
        <article className=" bg-[#F3F3F3] ">
            <img className="w-full" src={image} alt="" />
            <div className="px-8 flex flex-col items-center gap-3">
                <h3 className="text-2xl font-bold mt-4 text-[#151515]">{name}</h3>
                <p>{recipe}</p>
                <button className="mb-[15px] btn-primary text-[#BB8506] border-[#BB8506] bg-[#E8E8E8] hover:bg-[#1F2937]">add to cart</button>
            </div>
        </article>
    );
};

export default FoodCard;