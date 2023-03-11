import image from '../assets/author-image.jpeg';
import Tabs from '../components/Tabs';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';

const About = () => {
  return (
    <div className="flex bg-dark px-4 pt-16 sm:px-20 sm:pt-24 relative z-1">
      <LeftBar />
      <div className="px-8 sm:px-16 sm:mx-16 md:px-8 md:mx-8">
        <h2 className="pb-4 text-center sm:text-left">About Me</h2>

        <div className="flex flex-col md:flex-row bg-neutral-700 bg-opacity-20 p-4 h-auto w-fit mb-8">
          <p className="pb-4 md:pr-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ut quasi dolore eos facere ipsum, explicabo ducimus sequi fuga illo
            vel. Vitae magnam molestiae consequuntur culpa hic reprehenderit
            minus optio?
          </p>
          <div className="avatar relative flex justify-center md:justify-start z-1">
            <div className="w-72 rounded-xl">
              <img src={image} />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="text-center md:text-left font-bold text-lg mb-4">
            Technical Skills
          </h3>
          <Tabs />
        </div>
      </div>

      <RightBar />
    </div>
  );
};
export default About;
