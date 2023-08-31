import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="mainDev flex">
        <div className="photo">
          <img
            // src="https://selena.pixandhue.com/wp-content/uploads/2022/02/haute-stock-photography-1.png"
            // src="https://annuaire-beaute.eu/wp-content/uploads/2023/01/steine-heilen.jpg"
            // src="https://wallpapercave.com/wp/wp8442899.jpg"
            src="https://ae04.alicdn.com/kf/Hc622b2514dd646268dc875f6f3ec7dfae.jpg"
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
            // src="https://selena.pixandhue.com/wp-content/uploads/elementor/thumbs/elise-wilcox-lXpGxK7QNM0-unsplash-edit-ctr1-pmnvqumonps6u0791512bi9sy19h89dyd8wdiax2b4.png"
            // src="https://i.pinimg.com/736x/2a/6a/0e/2a6a0e0a7d4639ecc195d5f4ed8eed1b.jpg"
            // src="src/assets/Images/blog.jpeg"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEi3QTBTTJtFTwSDciOr9-kPJMyat6busfaiRhNOM8MIM18GBbVUegAEzVdDzASbx9FqswZcHlB-y6Fb6I17J0PI5cTQ5fZgqKo6_fpArnhziWGQi31GhGs73L9J-SXbFtTdAZC9_ldAdLdth2tCn8H12hWy3xuRlY5pXSLL4Xu042Z1ClX5E4oGT4mGGQ=s16000"
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
