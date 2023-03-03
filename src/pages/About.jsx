import { Link } from 'react-router-dom';
import image from '../assets/author-image.jpeg';

const About = () => {
  return (
    <div className="bg-dark h-screen pt-28 px-72">
      <h2 className="pb-4">About Me</h2>

      <div className="flex flex-row h-[220px] bg-neutral-700 bg-opacity-20 p-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ut quasi dolore eos facere ipsum, explicabo ducimus sequi fuga illo
          vel. Vitae magnam molestiae consequuntur culpa hic reprehenderit minus
          optio?
        </p>
        <img src={image} className="pl-1" alt="" />
      </div>
    </div>
  );
};
export default About;
