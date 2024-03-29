import { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddPost.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import PostFunctionality from "../Components/PostFunctionality";

const schema = yup
  .object({
    Title: yup.string().required(),
    Description: yup.string().required("You must Enter Description"),
    ImageFile: yup.string().required(),
  })
  .required();

function AddPost(props) {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [postData, setPostData] = useState(null);
  const [Image, setImage] = useState(null);

  const TitleVal = watch("Title");
  const LastVal = watch("Description");
  const CatVal = watch("Category");

  const onSubmit = async (data) => {
    let UserId = user?.user?.id;

    console.log("dataaaaaaaaa", data);
    const formData = new FormData();
    formData.append("title", data?.Title);
    formData.append("description", data?.Description);
    formData.append("photo", Image);
    formData.append("category", data?.Category);
    formData.append("UserId", UserId);

    setPostData(formData);
    console.log("photooooooooooo", formData);

    const AddData = async () => {
      await axios
        .post("http://localhost:3000/posts", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log("photo res", res);
          console.log("photo data", res.data);
          props.AddPosts(res.data);
        })
        .catch((error) => console.log("post error", error));
    };
    await AddData();
    navigate("/");
  };

  return (
    <>
      {user && (
        <div className="Container-Form">
          <div className="register flex container mx-auto justify-center">
            <PostFunctionality
              onSubmit={onSubmit}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              setImage={setImage}
            />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!user && (
        <>
          {/* The button to open modal */}
          <label htmlFor="my-modal-6" className="btn">
            open modal
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                You Must Login first to Add Your Own Post
              </h3>
              <p className="py-4">You Must Login first to Add Your Own Post</p>
              <div className="modal-action">
                <Link to="/login">
                  <label htmlFor="my-modal-6" className="btn">
                    Login
                  </label>
                </Link>
              </div>
            </div>
          </div>
          {/* <h1 className="text-center">
            You Must Login first to Add Your Own Post
          </h1> */}
        </>
      )}
    </>
  );
}

export default AddPost;
