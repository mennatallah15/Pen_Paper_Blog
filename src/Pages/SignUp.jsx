import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import { Navigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    FullName: yup.string().required(),
    Age: yup.number().positive().integer().required("You must enter your age"),
    Email: yup.string().email().required("You must enter your email"),
    Password: yup
      .number("You must enter numbers")
      .positive("You must enter numbers")
      .integer("You must enter numbers")
      .required("You must enter your password"),
    ConfirmPassword: yup
      .number()
      .positive()
      .integer()
      .required("You must confirm your password"),
  })
  .required();

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const { SignUp, error, isLoading } = useSignup();

  // const handleSubmit = async (e) => {
  const onSubmit = async (data) => {
    // e.preventDefault();
    if (data.Password !== data.ConfirmPassword) {
      toast.error("Password didn't match");
    } else {
      await SignUp(email, password);
      navigate("/");
    }
    // console.log(email, password);
  };

  return (
    <div className="Container-Form">
      <div className="register flex container mx-auto justify-center items-center">
        <div className="MainForm mt-8">
          <div>
            <h1>Sign Up</h1>
          </div>
          <div className="Form">
            <form
              className="mt-8 container mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                className="input w-full max-w-xs mb-2"
                placeholder="FullName"
                {...register("FullName")}
              />
              <h2>{errors.FullName && <p>You must enter full name</p>}</h2>

              <input
                type="number"
                className="input w-full max-w-xs mb-2"
                placeholder="Age"
                {...register("Age")}
              />
              {/* <h2>{errors.Age && <p>Age is required.</p>}</h2> */}
              <h2>{errors.Age?.message && <p>Age is required.</p>}</h2>

              <input
                type="email"
                className="input w-full max-w-xs mb-2"
                placeholder="Email"
                value={email}
                {...register("Email")}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h2>{errors.Email && <p>Email is required.</p>}</h2>

              <input
                type="password"
                className="input w-full max-w-xs mb-2"
                placeholder="Password"
                value={password}
                {...register("Password")}
                onChange={(e) => setPassword(e.target.value)}
              />
              <h2>{errors.Password && <p>Password is required.</p>}</h2>

              <input
                type="password"
                className="input w-full max-w-xs mb-2"
                placeholder="Confirm Password"
                value={ConfirmPassword}
                {...register("ConfirmPassword")}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <h2>
                {errors.ConfirmPassword && <p>Confirm Password is required.</p>}
              </h2>

              <button className="btn w-full max-w-xs" disabled={isLoading}>
                Sign Up
              </button>
              <h2> {error && <div className="error">{error}</div>}</h2>
              <span>
                Already have an account?{" "}
                <Link to="/login" className="SmallLink">
                  Login
                </Link>
              </span>
            </form>
          </div>
        </div>
        <div className="registerPhoto xl:flex lg:flex justify-center items-center sm:none">
          <img src="src/assets/Images/Photo2.jpg" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
