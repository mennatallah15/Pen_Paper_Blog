import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useForm } from "react-hook-form";
import "./Login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const onSubmit = async (data) => {
    // e.preventDefault();

    // console.log(email, password);

    await login(email, password);
    const GetUser = async () => {
      await user;
      console.log(user);
    };
    await GetUser();
    // if (user?.user) {
    //   navigate("/");
    // } else {
    //   toast.error("Your Email or Password is Not Valid");
    //   setEmail("");
    //   setPassword("");
    // }
  };

  return (
    <div className="Container-Form">
      <div className="register flex container mx-auto justify-center">
        <div className="Form mt-6">
          <h1>Login</h1>
          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input w-full max-w-xs mb-2"
              placeholder="Email"
              {...register("Email", { required: true, maxLength: 20 })}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <h2>{errors.Email && <p>Email is required.</p>}</h2>

            <input
              className="input w-full max-w-xs mb-2"
              placeholder="Password"
              {...register("Password", {
                required: true,
              })}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <h2>{errors.Password && <p>Password is required.</p>}</h2>

            <button className="btn w-full max-w-xs" disabled={isLoading}>
              Login
            </button>
            <h2>{error && <div className="error">{error}</div>}</h2>
            <span>
              You Don't have an account yet?
              <Link to="/signup" className="SmallLink">
                Sign up
              </Link>
            </span>
          </form>
        </div>
        <div className="LoginPhoto">
          <img src="https://kartinkin.net/uploads/posts/2022-02/1645897265_73-kartinkin-net-p-kartinki-volshebstvo-78.jpg" />
          {/* <img src="https://pbs.twimg.com/media/DSZLiTPXkAc6L_p.jpg" alt="" /> */}
          {/* <img
            src="https://vovomusic.com/collection_images/2124/0.jpg"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
