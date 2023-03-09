const Contact = () => {
  return (
    <div className="bg-dark h-screen pt-28 px-72 flex flex-col justify-start items-center">
      <h2 className="pb-8 text-6xl">Want to get in touch?</h2>

      <div className="flex flex-col h-[auto] justify-center items-center">
        <h3 className="pb-8 text-2xl font-thin">kimsanthanakon@gmail.com</h3>
        <button className="bg-off-white hover:text-off-white font-satoshi btn text-dark aspect-auto w-[120px] h-[50px] text-l ">
          Say Hello
        </button>
      </div>
    </div>
  );
};

export default Contact;
