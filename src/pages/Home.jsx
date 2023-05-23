import Banner from "../components/Banner";
import Menu from "../components/PopulerMenu";
import Order from "../components/Order";
import Service from "../components/Service";
import PopulerMenu from "../components/PopulerMenu";
import Contact from "../components/Contact";
import Recommends from "../components/Recommends";
import FeaturedMenu from "../components/FeaturedMenu";


const Home = () => {
    return (
        <main>
            <Banner/>
            <Order/>
            <Service/>
            <PopulerMenu/>
            <Contact/>
            <Recommends/>
            <FeaturedMenu/>
        </main>
    );
};

export default Home;