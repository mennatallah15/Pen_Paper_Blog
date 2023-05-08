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
        <div className="containText">
          <div className="containTitle w-[20%] lg:block md:block hidden">
            <h2 className="min-[1047px]:mb-4 min-[1050px]:text-[48px] text-[40px] leading-[1.3em] min-[1047px]:ml-20 ml-10 text-[#111111]">
              LOREM LES IPSTA UMES DOLORE
            </h2>
            <p className="min-[1047px]:ml-20 ml-10 max-[1047px]:hidden leading-[1.8] font-[600]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut
              eaque corrupti vitae laborum et fugiat libero ipsam eum?
              Architecto similique
            </p>
          </div>
        </div>

        <div className="Image">
          <img
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
