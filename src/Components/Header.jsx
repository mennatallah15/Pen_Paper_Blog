import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="mainDev flex">
        <div className="photo">
          <img
            src="https://selena.pixandhue.com/wp-content/uploads/2022/02/haute-stock-photography-1.png"
            alt=""
          />
        </div>
        <div className="contain">
          <div className="containTitle max-w-lg w-full">
            <h1 className="LargeParagraph sm:mb-7 lg:text-4xl ml-20 sm:text-3xl pr-20 lg:block md:hidden sm:hidden">
              LOREM LES IPSTA UMES DOLORE
            </h1>
            <p className="SmallParagraph lg:text-3xl ml-20 pr-5 md:text-2xl lg:block md:hidden sm:hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut
              eaque corrupti vitae laborum et fugiat libero ipsam eum?
              Architecto similique
            </p>
          </div>
        </div>

        <div className="Image">
          <img
            // src="https://www.iam-love.co/wp-content/uploads/2019/03/JPEG-image-4-scaled.jpeg"
            src="https://selena.pixandhue.com/wp-content/uploads/elementor/thumbs/elise-wilcox-lXpGxK7QNM0-unsplash-edit-ctr1-pmnvqumonps6u0791512bi9sy19h89dyd8wdiax2b4.png"
            alt=""
          />
        </div>
      </div>
      <div className="Boxes flex justify-center gap-10">
        <a href="#Posts" className="PostBox">
          <div>
            <h1>View Posts</h1>
          </div>
        </a>
        <a href="#category" className="CatgoryBox">
          <div>
            <h1>View Categories</h1>
          </div>
        </a>
      </div>
    </>
  );
}
