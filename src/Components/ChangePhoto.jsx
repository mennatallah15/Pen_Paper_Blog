import React, { useRef } from "react";
import axios from "axios";

const ChangePhoto = ({ setProfilePhoto, loggedUser }) => {
  const inputFile = useRef(null);

  const HandleClick = () => {
    inputFile.current.click();
  };

  var params = {
    email: "new1@site.com",
    password: "1234567",
  };
  console.log("userr", loggedUser);
  const ChangeYourPhoto = async (e) => {
    if (e.target.files[0]) {
      const formData = new FormData();
      // formData.append("profilePhoto", e.target.files[0]);
      formData.append("email", "new2@site.com");

      console.log("obj", formData);
      const ChangeUserPhoto = async () => {
        await axios
          .patch(`http://localhost:3001/users/${loggedUser?.id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            // headers: {
            //   "Content-Type": "application/json",
            // },
          })
          .then((res) => {
            console.log("photo res", res);
            console.log("photo data", res.data);
            // props.AddPosts(res.data);
          })
          .catch((error) => console.log("update error", error));
      };
      await ChangeUserPhoto();
      // navigate("/");
      //   setProfilePhoto(e.target.files[0]);
      // console.log(e.target.files[0]);
    }
  };

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
