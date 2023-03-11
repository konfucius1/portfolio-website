import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
const SharedLayout = () => {
  return (
    <div>
      <Navbar className="z-10 sticky top-0" />
      <section className="py-28">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default SharedLayout;
