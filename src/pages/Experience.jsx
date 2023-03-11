import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';

const Experience = () => {
  return (
    <div className="flex bg-dark px-4 pt-16 sm:px-20 sm:pt-24 relative z-1">
      <LeftBar />
      <div className="px-8 sm:px-16 sm:mx-16 md:px-8 md:mx-8">
        <h2 className="flex pb-4">Experience</h2>

        <div className="flex flex-row h-[auto] pb-8">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ut quasi dolore eos facere ipsum, explicabo ducimus sequi fuga illo
            vel. Vitae magnam molestiae consequuntur culpa hic reprehenderit
            minus optio?
          </p>
        </div>
      </div>
      <RightBar />
    </div>
  );
};

export default Experience;
