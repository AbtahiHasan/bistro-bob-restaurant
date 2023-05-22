import banner from "/home/02.jpg"
const Banner = () => {
    return (
        <section>
            <img className="h-screen w-full object-cover" src={banner} alt="" />
        </section>
    );
};

export default Banner;