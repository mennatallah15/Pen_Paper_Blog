import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="mainAbout flex justify-center align-middle">
        <div className="containAbout">
          <div className="AboutTitle max-w-lg mt-36">
            <h1 className="sm:mb-7 lg:text-3xl sm:text-2xl">About Us</h1>
            <p className="lg:text-xl pr-20 md:text-xs sm:text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut
              eaque corrupti vitae laborum et fugiat libero ipsam eum?
              Architecto similique
            </p>
          </div>
        </div>
        <div className="About_Images">
          <div className="Aboutphoto">
            <img
              className="h-auto max-w-full"
              src="https://selena.pixandhue.com/wp-content/uploads/2022/02/haute-stock-photography-2.png"
              alt=""
            />
          </div>
          <div className="AboutImage">
            <img
              className="h-auto max-w-full"
              src="https://avatars.mds.yandex.net/i?id=02f4bc0a51fa63df4cde508d8384c6e0_l-5352984-images-thumbs&ref=rim&n=13&w=1080&h=1350"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
