import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Posts from "../Components/Posts";
import "./AddPost.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuthContext } from "../hooks/useAuthContext";

const schema = yup
  .object({
    Title: yup.string().required(),
    Description: yup.string().required("You must Enter Description"),
    ImageFile: yup.string().required(),
  })
  .required();

function AddPost(props) {
  const { user } = useAuthContext();
  // const options = [
  //   { value: "", text: "--Choose Category--" },
  //   { value: "1", text: "Food 🍏" },
  //   { value: "2", text: "Education 👨‍🏫" },
  //   { value: "3", text: "Fashion 🧚‍♀️" },
  //   { value: "4", text: "Health 👩‍⚕️" },
  //   { value: "5", text: "Technology 🤳" },
  // ];

  // const [selected, setSelected] = useState(options[0].value);

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   setSelected(event.target.value);
  // };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [Image, setImage] = useState();

  const TitleVal = watch("Title");
  const LastVal = watch("Description");
  const CatVal = watch("Category");

  // console.log("userId", local);
  // const AgeVal = watch("age");
  // console.log(PhotoVal);
  const onSubmit = async (data) => {
    let UserId = user.user.id;
    console.log(UserId);
    console.log(data);
    console.log(data.ImageFile[0].name);
    console.log(data.Title);
    console.log(data.Category);
    // const ImageSrc = data.ImageFile[0].name;

    const AddData = async () => {
      await axios
        .post("http://localhost:3000/posts", {
          title: data.Title,
          discription: data.Description,
          photo: URL.createObjectURL(Image),
          category: +data.Category,
          UserId: +UserId,
        })
        .then((response) => {
          console.log(response);
          console.log("data helloooo", response.data);
          console.log(data.Title);
          // console.log(dataToAdd);
          // update app state
          props.AddPosts(response.data);
        })
        .catch((error) => console.log(error));
    };
    await AddData();
    // console.log(dataToAdd);
    navigate("/");
  };

  return (
    <>
      {user && (
        <div className="Container-Form">
          <div className="register flex container mx-auto justify-center">
            <div className="Form mt-3">
              <h1>Add New Post</h1>
              <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="input w-full max-w-xs mb-2"
                  placeholder="Title"
                  {...register("Title")}
                />
                <h2> {errors.Title && <p>Title is required.</p>}</h2>
                <textarea
                  className="input w-full max-w-xs mb-2"
                  placeholder="Description"
                  {...register("Description")}
                />
                <h2>{errors.Description && <p>Description is required.</p>}</h2>

                <select
                  {...register("Category", { required: true })}
                  className="input w-full max-w-xs mb-2"
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

                {errors.Category && (
                  <p style={{ color: "red" }}> {errors.Category?.message}</p>
                )}

                <input
                  type="file"
                  className="Add-input file-input w-full max-w-xs mb-5 file:bg-orange-800 file:text-white
                hover:file:bg-orange-900"
                  {...register("ImageFile", { required: true })}
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    setImage(e.target.files[0]);
                  }}
                  // value={Image || ""}
                />
                <h2> {errors.ImageFile?.message}</h2>

                {/* <input
                {...register("ImageFile", { required: true })}
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImage(e.target.files[0]);
                }}
                className="w-full max-w-xs mb-5 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              /> */}

                <button className="btn w-full max-w-xs">Add Post</button>
              </form>
            </div>
            <div className="ThePost">
              <div className="mockup-window border shadow-xl">
                <div className="flex px-4 py-12 justify-center">
                  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="MainPosts mx-auto mb-14">
                      <div className="ThePostImg mb-5 overflow-hidden rounded">
                        {Image ? (
                          <img
                            className="w-full"
                            src={URL.createObjectURL(Image)}
                            alt="Posts"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        <span className="bg-primary mb-3 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                          {CatVal === "1"
                            ? "Food"
                            : CatVal === "2"
                            ? "Education"
                            : CatVal === "3"
                            ? "Fashion"
                            : CatVal === "4"
                            ? "Health"
                            : CatVal === "5"
                            ? "Technology"
                            : ""}
                        </span>
                        <h3>
                          <a
                            href="#"
                            className="text-dark hover:text-primary mb-2 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                          >
                            {TitleVal}
                          </a>
                        </h3>
                        <p className="text-body-color text-base">{LastVal}</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="MainPosts card card-compact w-80 shadow-xl">
                    <figure>
                      {Image ? (
                        <img
                          className="PostImg "
                          src={URL.createObjectURL(Image)}
                          alt="Posts"
                        />
                      ) : (
                        ""
                      )}
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title Addpost">{TitleVal}</h2>
                      <p>{LastVal}</p>
                      <div className="card-actions justify-start">
                        <button className="btn btn-primary">Read More</button>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!user && (
        <>
          <h1 className="text-center">
            You Must Login first to Add Your Own Post
          </h1>
        </>
      )}
    </>
  );
}

export default AddPost;
