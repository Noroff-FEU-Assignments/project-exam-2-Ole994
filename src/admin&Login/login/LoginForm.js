import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { AUTH_URL } from "../../helpers/api/api";
import { userLoginSchema } from "../../utils/yupSchemas";
import { useNavigate } from "react-router-dom";

// import { Form, Button } from "react-bootstrap";

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
      <div className="background-login">
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

            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
