import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { AUTH_URL } from "../helpers/api/api";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { userLoginSchema } from "../utils/yupSchemas";

const LoginForm = () => {
  // navigation hook
  const navigate = useNavigate();

  const [auth, setAuth] = useContext(AuthContext);

  // YUP
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  });

  // Login function, accepts data from YUP object
  const loginUser = async (formData) => {
    const responseData = await axios.post(AUTH_URL, {
      // use YUP Object data as request body
      identifier: formData.email,
      password: formData.password,
    });

    console.log("Response Data: ", responseData);

    // Save JWT response to localstorage
    setAuth(responseData.data);
    // redirect to admin page
    navigate("/admin");
  };

  // handleSubmit
  const onSubmit = (formData) => {
    console.log("Form Data: ", formData);

    loginUser(formData).catch(console.error);
    console.log(auth);
  };

  // Render page
  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginContent">
          <div className="loginWrapper">
            <label className="loginLabel">
              <input
                className="loginInput"
                {...register("email")}
                placeholder="e-mail"
              />
              {errors.email && (
                <span className="email-msg">{errors.email.message}</span>
              )}
            </label>
            {""}
            {""}
            <label className="loginLabel">
              <input
                className="loginInput"
                {...register("password")}
                type="password"
                placeholder="Passord..."
              />
              {errors.password && (
                <span className="password-msg">{errors.password.message}</span>
              )}{" "}
            </label>
          </div>
          <div className="loginSend">
            <button className="login-button">Send</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
