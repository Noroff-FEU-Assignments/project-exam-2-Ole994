import LoginForm from "../../login/LoginForm";
//noroff
//exam2022

//post@olekorvald.no

const Login = () => {
  return (
    <>
      <div className="login-container">
        <h1>Acsess Admin</h1>
        <div className="flexImg">
          <div className="background-hero-login">
            {" "}
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
