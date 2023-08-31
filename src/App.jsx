import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddPost from "./Pages/AddPost";
import EditBlog from "./Pages/EditBlog";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import SignUp from "./Pages/SignUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogDetails from "./Pages/BlogDetails";

const pageSize = 6;

function App() {
  const [Posts, SetPosts] = useState([]);

  const [Categories, setCategories] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  let noOfPages = 1;

  useEffect(() => {
    async function getPosts() {
      try {
        const { data } = await axios.get("http://localhost:3000/posts");
        // console.log(data);
        SetPosts(data);
      } catch (error) {
        console.log("Error in get Posts", error);
      }
    }

    async function getCategories() {
      try {
        const { data } = await axios.get("http://localhost:3000/categories");
        setCategories(data);
      } catch (error) {
        console.log("Error in get Categories", error);
      }
    }

    getPosts();
    getCategories();
  }, []);

  const [CurrentCategory, setCurrentCategory] = useState(0);

  const changeCurrentCategory = (id) => {
    setCurrentCategory(id);
    setCurrentPage(1);
  };

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  // async function AddPosts(dataToAdd) {
  //   try {
  //     const { dataToAdd } = await axios.post(API_URL);
  //     // console.log(data);
  //     SetPosts(dataToAdd, ...Posts);
  //   } catch (error) {}
  // }

  const handleAddPosts = (post) => {
    SetPosts([...Posts, post]);
  };

  const handelDeletePosts = (DeletedPost) => {
    SetPosts(Posts.filter((post) => post.id !== DeletedPost.id));
  };

  const handleEditPosts = (postEdited) => {
    SetPosts(
      Posts.map((post) =>
        post.id === postEdited.id ? { ...postEdited } : post
      )
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                CurrentCategory={CurrentCategory}
                pageSize={pageSize}
                Categories={Categories}
                currentPage={currentPage}
                noOfPages={noOfPages}
                posts={Posts}
                changeCurrentCategory={changeCurrentCategory}
                changeCurrentPage={changeCurrentPage}
                handelDeletePosts={handelDeletePosts}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/addPost"
            element={
              <AddPost
                posts={Posts}
                AddPosts={handleAddPosts}
                handleEditPosts={handleEditPosts}
              />
            }
          />
          {/* <Route
            path="/addPost"
            element={<TestPost posts={Posts} AddPosts={handleAddPosts} />}
          /> */}

          <Route
            path="/editpost/:postid"
            element={
              <EditBlog posts={Posts} handleEditPosts={handleEditPosts} />
            }
          />

          <Route path="/Blog/:postid" element={<BlogDetails posts={Posts} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
