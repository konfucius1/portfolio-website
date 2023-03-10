import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="flex bg-dark px-4 pt-16 sm:px-20 sm:pt-24 h-fit">
      <LeftBar />
      <Hero />
      <RightBar />
    </div>
  );
};

export default Home;
