import Banner from "../components/Banner";
import Menu from "../components/PopulerMenu";
import Order from "../components/Order";
import Service from "../components/Service";
import PopulerMenu from "../components/PopulerMenu";
import Contact from "../components/Contact";


const Home = () => {
    return (
        <main>
            <Banner/>
            <Order/>
            <Service/>
            <PopulerMenu/>
            <Contact/>
        </main>
    );
};

export default Home;