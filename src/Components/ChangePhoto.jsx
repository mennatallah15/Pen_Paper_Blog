import React, { useEffect, useMemo, useRef } from "react";
import axios from "axios";

const ChangePhoto = ({
  setProfileImg,
  profileImg,
  loggedUser,
  handlePhoto,
}) => {
  const inputFile = useRef(null);

  const HandleClick = () => {
    inputFile.current.click();
  };

  console.log("userr", loggedUser);
  const ChangeYourPhoto = async (e) => {
    if (e.target.files[0]) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);

      console.log("obj", formData);
      const UploadImg = async () => {
        await axios
          .post(
            "https://api.imgbb.com/1/upload?key=6e30f61e7611445cc2e108b5a75c8416",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            console.log("photo res", res);
            console.log("photo data", res?.data?.data);

            setProfileImg(res?.data?.data?.display_url);
          })

          .catch((error) => console.log("post error", error));
      };

      await UploadImg();

      // navigate("/");
      //   setProfilePhoto(e.target.files[0]);
      // console.log(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (profileImg) {
      console.log("urllllllll", profileImg);
      handlePhoto(profileImg);

      axios
        .patch(
          `http://localhost:3001/users/${loggedUser?.id}`,
          { profilePhoto: profileImg },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log("api res", res);
          console.log("api data", res?.data);
          // props.AddPosts(res.data);
        })
        .catch((error) => console.log("update error", error));
    }
  }, [profileImg]);

  return (
    <>
      <input
        type="file"
        className="hidden"
        ref={inputFile}
        onChange={ChangeYourPhoto}
      ></input>
      <button className="" onClick={HandleClick}>
        Change Profile Photo
      </button>
    </>
  );
};

export default ChangePhoto;
