import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname === "/login" 
    const noHeaderFooterSignUp = location.pathname === "/sign-up" 
    return (
        <main>
           {noHeaderFooter || noHeaderFooterSignUp || <Navbar/>}
            <Outlet/>
            {noHeaderFooter || noHeaderFooterSignUp || <Footer/>}
        </main>
    );
};

export default RootLayout;