import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Posts from "../Components/Posts";
import Header from "../Components/Header";
// import { BsFillPlusSquareFill } from "react-icons/fa";
import AddPost from "./AddPost";
import CategoriesComponent from "../Components/Categories";
import "./Home.css";
import AboutUs from "../Components/AboutUs";
import Break from "../Components/Break";
import BlogDetails from "./BlogDetails";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home({
  CurrentCategory,
  Categories,
  changeCurrentCategory,
  posts,
  pageSize,
  noOfPages,
  currentPage,
  changeCurrentPage,
  handelDeletePosts,
}) {
  const { user } = useAuthContext();

  /////////filter///////
  let FilteredPosts = useMemo(() => {
    console.log("Memo run!!!");
    return CurrentCategory === 0
      ? posts
      : posts.filter((post) => post.category === CurrentCategory);
  }, [posts, CurrentCategory]);

  noOfPages = Math.ceil(FilteredPosts?.length / pageSize);

  const pages = Array(noOfPages)
    .fill(0)
    .map((post, i) => i + 1);

  const start = currentPage * pageSize - pageSize;
  const end = start + pageSize;

  FilteredPosts = FilteredPosts.slice(start, end);

  return (
    <>
      <div className="relative">
        <Header />
        <AboutUs />
        <Break />
        <div>
          <div id="category" className="Categories">
            <h1 className="container mx-auto text-3xl font-bold sm:text-4xl md:text-[40px]">
              Categories
            </h1>
            <div className="container mx-auto">
              <div className="flex flex-wrap mb-12 mt-20 justify-center items-center px-10">
                {Categories.map((category) => {
                  // {
                  //   console.log(category.id);
                  //   console.log(CurrentCategory);
                  // }

                  return (
                    <CategoriesComponent
                      key={category.id}
                      category={category}
                      changeCurrentCategory={changeCurrentCategory}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            {user && (
              <Link to="/addPost">
                <button className="AddBtn mb-8 mr-5 bottom-0 right-0 fixed w-10">
                  <img src="src/assets/Images/plus (1).png" alt="Addbutton" />
                </button>
              </Link>
            )}
            {!user && (
              <>
                {/* The button to open modal */}
                <label
                  htmlFor="my-modal-6"
                  className="AddBtn mb-8 mr-5 bottom-0 right-0 fixed w-10 cursor-pointer"
                >
                  <img src="src/assets/Images/plus (1).png" alt="Addbutton" />
                </label>
                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">
                      You Must Login first to Add Your Own Post
                    </h3>
                    <div className="modal-action">
                      <Link to="/login">
                        <label htmlFor="my-modal-6" className="btn">
                          Login
                        </label>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {FilteredPosts?.length > 0 ? (
            <section id="Posts" className="pt-20 pb-10 lg:pb-20">
              <div className="container mx-auto">
                <div className="container mx-auto flex flex-wrap justify-center items-center">
                  <div className="w-full px-4">
                    <div className="mx-auto mb-[60px] text-center lg:mb-20">
                      <h2
                        id="BlogMainTitle"
                        className="text-3xl font-bold sm:text-4xl md:text-[40px]"
                      >
                        Our Blogs
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="container mx-auto flex flex-wrap justify-between px-10">
                  {FilteredPosts?.map((post) => {
                    // {
                    //   console.log(post?.id);
                    // }
                    return (
                      <Posts
                        key={post?.id}
                        PostId={post?.id}
                        UserID={+post?.UserId}
                        postTitle={post?.title}
                        postPhoto={post?.photo}
                        postDes={post?.description}
                        postCat={+post?.category}
                        post={post}
                        handelDeletePosts={handelDeletePosts}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
          ) : (
            <h1>not found</h1>
          )}
          <div className="flex justify-center mb-5 relative bottom-28">
            {pages.length > 1 && (
              <div>
                <div className="btn-group">
                  {pages.map((page) => (
                    <button
                      onClick={() => changeCurrentPage(page)}
                      key={page}
                      className={`btn ${
                        currentPage === page ? "btn-active" : ""
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
