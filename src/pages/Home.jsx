import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import Hero from '../components/Hero';
import Divider from '../components/Divider';

const Home = () => {
  return (
    <>
      <div className="flex sm:flex bg-dark px-4 pt-16 sm:px-20 sm:pt-24 relative z-1">
        <LeftBar />
        <Hero />
        <RightBar />
      </div>
      <Divider />
    </>
  );
};

export default Home;
