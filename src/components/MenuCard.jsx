const MenuCard = ({menu}) => {
    const {name, recipe, image,price} = menu
    return (
       <article className="flex gap-5">
            <img className="w-[100px] h-[100px] rounded-full rounded-tl-none" src={image} alt="asdf" />
            <div>
                <div className="flex justify-between">
                <h4>{name} ------------------</h4>
                <span className="text-[#BB8506]">${price}</span>
                </div>
                <p>{recipe}</p>
            </div>
       </article>
    );
};

export default MenuCard;