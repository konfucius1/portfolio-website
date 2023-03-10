import { Link } from 'react-router-dom';
import image from '../assets/author-image.jpeg';
import Tabs from '../components/Tabs';

const About = () => {
  return (
    <div className="bg-dark h-screen sm:pt-20 sm:px-48 px-8 pt-16">
      <h2 className="pb-4 text-center sm:text-left">About Me</h2>

      <div className="flex flex-col md:flex-row bg-neutral-700 bg-opacity-20 p-4 h-auto w-fit mb-8">
        <p className="pb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ut quasi dolore eos facere ipsum, explicabo ducimus sequi fuga illo
          vel. Vitae magnam molestiae consequuntur culpa hic reprehenderit minus
          optio?
        </p>
        <div className="avatar relative flex justify-center md:justify-start z-1">
          <div className="w-72 rounded-xl">
            <img src={image} />
          </div>
        </div>
      </div>

      <h3>Technical Skills</h3>
      {/* <Tabs /> */}
    </div>
  );
};
export default About;
