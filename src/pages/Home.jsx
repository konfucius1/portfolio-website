import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import MobileSocial from '../components/MobileSocial';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="flex sm:flex bg-dark px-4 pt-16 sm:px-20 sm:pt-24 relative z-1">
      <LeftBar />
      <Hero />
      <RightBar />
      <MobileSocial />
    </div>
  );
};

export default Home;
