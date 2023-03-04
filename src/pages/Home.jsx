import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="flex bg-dark px-[85px] pt-[100px]">
      <LeftBar />
      <Hero />
      <RightBar />
    </div>
  );
};

export default Home;
