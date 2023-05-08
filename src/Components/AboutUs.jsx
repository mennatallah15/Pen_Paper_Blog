import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="mainAbout flex md:flex-row flex-col justify-between w-full pb-12">
        <div className="containAbout md:w-[50%] w-full px-24 flex justify-center items-center md:order-none order-2 md:text-left text-center md:mt-0 mt-8">
          <div className="AboutTitle">
            <h1 className="mb-4 min-[1050px]:text-[48px] text-[40px]">
              About Us
            </h1>
            <p className="leading-[1.8] font-[600] text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut
              eaque corrupti vitae laborum et fugiat libero ipsam eum?
              Architecto similique
            </p>
          </div>
        </div>
        <div className="About_Images flex justify-end items-end">
          <div className="Aboutphoto">
            <img
              className="md:h-[53vw] h-[93vw]"
              src="https://selena.pixandhue.com/wp-content/uploads/2022/02/haute-stock-photography-2.png"
              alt=""
            />
          </div>
          <div className="AboutImage md:left-[55%] left-0 md:bottom-[12%]">
            <img
              className="md:h-[45vw] h-[80vw] max-[380px]:h-[80vw] md:w-full w-[80vw] max-[380px]:w-[70vw] max-[380px]:bottom-6 md:bottom-0 bottom-10"
              src="https://avatars.mds.yandex.net/i?id=02f4bc0a51fa63df4cde508d8384c6e0_l-5352984-images-thumbs&ref=rim&n=13&w=1080&h=1350"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
