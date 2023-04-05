import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="ContainFooter p-10">
      <div className="container mx-auto">
        <footer className="text-center justify-center align-middle p-10 text-black">
          <div className="FooterImages grid gap-4 mb-12">
            <img
              src="https://selena.pixandhue.com/wp-content/uploads/2022/03/277475746_2122526037905726_8507960304788158944_n-1-320x320.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/originals/1d/08/b6/1d08b6d2adcd60bc69e0754fa385d527.jpg"
              alt=""
            />
            <img
              src="https://i.pinimg.com/originals/ef/b3/05/efb305deaa40d197b50d01c118617b4d.jpg"
              alt=""
            />
            <img
              src="https://selena.pixandhue.com/wp-content/uploads/2022/03/277545354_671241170748076_6952993129774729977_n-1-320x320.jpg"
              alt=""
            />
            {/* <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a> */}
          </div>
          <div>
            <div className="grid grid-flow-col">
              <div id="FooterLinksLeft">
                <h1>
                  <a href="#">Home </a>
                </h1>

                <h1>
                  <a href="">About Us </a>
                </h1>
              </div>

              <div className="FooterLogo">
                <a href="#">
                  <img src="src/assets/Images/Logo2.png" alt="" />
                </a>
              </div>

              <div>
                <div id="FooterLinksRight">
                  <h1>
                    <a href="#Posts">Posts </a>
                  </h1>

                  <h1>
                    <a href="#category">Categories </a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p>Copyright © 2023 - All right reserved by Pen & Paper Blog</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
