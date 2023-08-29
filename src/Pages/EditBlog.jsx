import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function EditBlog({ handleEditPosts }) {
  const navigate = useNavigate();

  const { postid } = useParams();

  {
    console.log(postid);
  }

  const [form, setForm] = useState({
    title: "",
    description: "",
    photo: "",
    category: "",
    UserId: "",
  });

  const [Image, setImage] = useState("");

  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(`http://localhost:3000/posts/${postid}`);
      console.log(data);
      setForm({
        title: data.title,
        description: data.description,
        photo: data.photo,
        category: +data.category,
        UserId: data.UserId,
      });
      console.log(form);
    }

    fetchPostById();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleEdit();
      navigate("/");
    } catch (error) {
      console.log(error);
      toast("Something went wrong, please try again later...");
    }
  };

  const handleEdit = async (data) => {
    await axios
      .patch(`http://localhost:3000/posts/${postid}`, {
        title: form.title,
        description: form.description,
        photo: window.URL.createObjectURL(Image),
        category: +form.category,
        UserId: form.UserId,
      })
      .then((response) => {
        console.log(response);
        console.log("data", response.data);

        handleEditPosts(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="Container-Form">
        <div className="register flex container mx-auto justify-center">
          <div className="Form mt-3">
            <h1>Add New Post</h1>
            <form className="mt-8" onSubmit={handleSubmit}>
              <input
                className="input w-full max-w-xs mb-2"
                label="Title"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
              <input
                className="input w-full max-w-xs mb-2"
                label="description"
                name="description"
                value={form.description}
                onChange={handleChange}
              />
              <div className="form-control w-full max-w-xs">
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="select select-accent w-full max-w-xs mb-2"
                >
                  <option id="DefaultSelect">--Choose Category--</option>
                  <option value="1">Food 🍏</option>
                  <option value="2">Education 👨‍🏫</option>
                  <option value="3">Fashion 🧚‍♀️</option>
                  <option value="4">Health 👩‍⚕️</option>
                  <option value="5">Technology 🤳</option>
                  {/* {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))} */}
                </select>
                <input
                  type="file"
                  className="Add-input file-input w-full max-w-xs mb-5 file:bg-orange-800 file:text-white
                hover:file:bg-orange-900"
                  name="photo"
                  // value={form.photo}

                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    setImage(e.target.files[0]);
                  }}
                  // value={window.URL.createObjectURL(Image)}

                  // onChange={handleChange}
                  // onChange={(e) => {
                  //   console.log(e.target.files[0]);
                  //   setImage(e.target.files[0]);
                  // }}
                  // value={Image || ""}
                />
                {/* </select> */}
              </div>

              <button className="btn btn-accent my-3" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
