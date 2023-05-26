import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname === "/login"
    return (
        <main>
           {noHeaderFooter || <Navbar/>}
            <Outlet/>
            {noHeaderFooter || <Footer/>}
        </main>
    );
};

export default RootLayout;