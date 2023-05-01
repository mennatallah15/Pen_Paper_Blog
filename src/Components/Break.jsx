import "./Break.css";

export default function Break() {
  return (
    <div className="MainBreak">
      {/* <div className="breakContent">
        <p>LETS GET STARTED</p>
        <h1>READY TO BUILD THE LIFE OF YOUR DREAMS?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          nostrum, eligendi molestiae possimus fugiat repudiandae minus, non
          quaerat eius aliquid iure est dicta voluptatibus aliquam pariatur cum
          et repellat molestias?
        </p>
      </div> */}
      <div className="breakContent max-w-2xl lg:mx-0">
        <p className="text-lg leading-8 text-gray-300 pt-10 mb-8 font-[500]">
          LETS GET STARTED
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-6xl mb-8 flex justify-center items-center">
          Filter Blogs By Category!
        </h2>
        <p className="text-lg leading-8 text-gray-300">
          You can see the categories of our blog and choose the one that you
          want to read about.
        </p>
      </div>
    </div>
  );
}
