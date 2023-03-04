import Typical from 'react-typical';

const Home = () => {
  return (
    <div className="bg-dark min-h-screen px-[180px] pt-[100px]">
      <h2 className="font-satoshi font-medium text-[#BBC8FF]">
        {' '}
        Hello world, my name is{' '}
      </h2>
      <h1 className="font-rubik text-8xl py-4 text-transparent bg-clip-text bg-gradient-to-r via-[#4704AF] from-primary-blue to-[#FF2C32]">
        Thanakon Kimsan
      </h1>
      <p className="font-satoshi text-off-white text-4xl font-bold ">
        I'm a{' '}
        <Typical
          loop={1}
          wrapper="b"
          steps={[
            'Student',
            1000,
            'Developer',
            1000,
            'Designer',
            1000,
            'Engineer',
            1000,
          ]}
        />
      </p>
      <p className="py-4 font-satoshi text-2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        impedit placeat repellendus assumenda unde atque modi voluptate vero
        totam, tenetur illum, sint aut labore. Minima nobis inventore dolorum
        distinctio? Id!
      </p>
    </div>
  );
};

export default Home;
