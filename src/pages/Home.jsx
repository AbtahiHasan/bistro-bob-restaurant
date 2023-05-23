import Banner from "../components/Banner";
import Menu from "../components/PopulerMenu";
import Order from "../components/Order";
import Service from "../components/Service";
import PopulerMenu from "../components/PopulerMenu";


const Home = () => {
    return (
        <main>
            <Banner/>
            <Order/>
            <Service/>
            <PopulerMenu/>
        </main>
    );
};

export default Home;