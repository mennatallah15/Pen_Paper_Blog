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
// import "../Components/posts.css";

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
            <h1 className="container mx-auto">Categories</h1>
            <div className="container mx-auto">
              <div className="flex flex-wrap mb-12 mt-20 justify-center align-middle">
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
            <Link to="/addPost">
              <button className="AddBtn mb-8 mr-5 bottom-0 right-0 fixed w-10">
                <img src="src/assets/Images/plus (1).png" alt="Addbutton" />
              </button>
            </Link>
          </div>
          {FilteredPosts?.length > 0 ? (
            <section id="Posts" className="pt-20 pb-10 lg:pb-20">
              <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4">
                    <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                      <h2
                        id="BlogMainTitle"
                        className="text-3xl font-bold sm:text-4xl md:text-[40px]"
                      >
                        Our Blogs
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  {FilteredPosts?.map((post) => {
                    // {
                    //   console.log(post?.id);
                    // }
                    return (
                      <Posts
                        key={post?.id}
                        PostId={post?.id}
                        UserID={post?.UserId}
                        postTitle={post?.title}
                        postPhoto={post?.photo}
                        postDes={post?.discription}
                        postCat={post?.category}
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
