import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
    return (
        <main>
            <Navbar/>
            <Outlet/>
        </main>
    );
};

export default RootLayout;