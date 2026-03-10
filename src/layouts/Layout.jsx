import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
    return (
        <>
            <div className="absolute top-0 left-0 w-full z-50">
                <Header />
                <hr className='border-white/50' />
                <Navbar />
                <hr className='border-white/50' />
            </div>
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
