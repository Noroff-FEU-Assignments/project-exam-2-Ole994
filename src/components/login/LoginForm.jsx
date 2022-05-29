import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { AUTH_URL } from "../../helpers/api/api";
// AUTH_URL, AUTH_URL_LOCAL
import { userLoginSchema } from "../../utils/yupSchemas";
import { useNavigate } from "react-router-dom";

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

    setAuth(responseData.data);

    navigate("/admin");
  };

  const onSubmit = (formData) => {
    loginUser(formData).catch(console.error);
  };

  return (
    <>
      <div className="background-login">
        <h1>Login</h1>
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="loginContainer">
            <h2>Login to your account</h2>

            <div className="input-parent">
              <label htmlFor="username">Username or Email</label>
              <input {...register("email")} placeholder="Your email..." />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className="input-parent">
              <label htmlFor="password">Password</label>
              <input
                {...register("password")}
                type="password"
                placeholder="Your password..."
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div className="loginButtonFlex">
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
