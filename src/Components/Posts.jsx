import "./Posts.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

let UserId;
if (window.localStorage.getItem("user") !== null) {
  let localItem = JSON.parse(window.localStorage.getItem("user"));
  UserId = localItem.user.id;
} else {
  UserId = 0;
}
// console.log("storage", UserId.user.id);

export default function Posts({
  postTitle,
  postPhoto,
  postDes,
  postCat,
  UserID,
  PostId,
  handelDeletePosts,
  post,
}) {
  const navigate = useNavigate();
  // let postDeleted = post;
  const handleDelete = async (post) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/posts/${PostId}`
      );
      // update app state
      await handelDeletePosts(post);
      // window.location.reload(true);
      // navigate("/");
    } catch (error) {
      toast.error("Something went wrong, please try again later...");
      console.log(error);
    }

    // await axios
    //   .delete(`http://localhost:3000/posts/${PostId}`)
    //   .then((response) => {
    //     console.log(response);
    //     console.log("data helloooo", post);
    //     // console.log(data.Title);
    //     // console.log(dataToAdd);
    //     // update app state
    //     handelDeletePosts(post);
    //   })
    //   .catch((error) => console.log(error));
    // update app state
    // } catch (error) {
    //   toast.error("Something went wrong, please try again later...");
    //   console.log(error);
    // }
  };

  return (
    <div className="sm:w-full px-8 md:w-1/2 lg:w-1/3">
      <div className="MainPosts mb-20">
        <img className="PostImg w-full mb-5" src={postPhoto} alt="image" />

        <div>
          <div className="flex justify-between">
            <span className="bg-primary mb-3 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
              {postCat === 1
                ? "Food"
                : postCat === 2
                ? "Education"
                : postCat === 3
                ? "Fashion"
                : postCat === 4
                ? "Health"
                : postCat === 5
                ? "Technology"
                : ""}
            </span>
            {+UserID === UserId ? (
              <div className="flex gap-8 mr-7">
                <Link to={`/editpost/${PostId}`}>
                  <div>
                    <button className="btn btn-primary btn-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                  </div>
                </Link>
                <div>
                  <button
                    onClick={() => handleDelete(post)}
                    className="btn btn-primary btn-xs"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <Link to={`/Blog/${PostId}`}>
            <h3>
              <a
                href="#"
                className="text-dark hover:text-primary mb-2 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {postTitle}
              </a>
            </h3>
          </Link>
          <div className="block w-[20rem]">
            <p className="text-body-color text-base truncate block">
              {postDes}
            </p>
          </div>
          <Link to={`/Blog/${PostId}`}>
            <button className="text-xl hover:text-primary font-semibold mt-2">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
