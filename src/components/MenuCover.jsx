const MenuCover = ({img, title, variant}) => {
    return (
        <section style={{backgroundImage: `url('${img}')`}} className={` ${variant === "banner" ? "h-[700px]" : "h-[500px] mt-[140px]"} w-full  bg-cover flex justify-center items-center`}>
            <div className="container">
                <div className="bg-[#15151599] text-white p-5 m-[40px] text-center md:px-[167px] md:py-[68px]">
                    <h3 className={` ${variant === "banner" ? "text-[88px]" : "text-[45px]"}`}>{title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </section>
    );
};

export default MenuCover;