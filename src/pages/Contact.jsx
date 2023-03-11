const Contact = () => {
  return (
    <div className="bg-dark h-screen pt-14 px-6 sm:px-12 md:px-24 lg:px-72 flex flex-col justify-start items-center">
      <h2 className="pb-8 text-4xl sm:text-6xl">Want to get in touch?</h2>

      <div className="flex flex-col h-auto justify-center items-center">
        <h3 className="pb-8 text-xl sm:text-2xl font-thin">
          kimsanthanakon@gmail.com
        </h3>
        <button className="bg-off-white hover:text-off-white font-satoshi btn text-dark aspect-auto w-48 sm:w-60 h-12 sm:h-14">
          Say Hello
        </button>
      </div>
    </div>
  );
};

export default Contact;
