import React from "react";
import {
  emailValidator,
  passwordValidator,
} from "../components/regexValidator";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = React.useState({ email: "", password: "" });

  const [errorMessage, seterrorMessage] = React.useState("");
  const [successMessage, setsuccessMessage] = React.useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (localStorage.getItem("auth")) navigate("/");
  }, []);

  const formSubmitter = (e) => {
    e.preventDefault();
    setsuccessMessage("");
    if (!emailValidator(input.email))
      return seterrorMessage("لطفا ایمیل وارد شده را تصحیح کنید");

    if (!passwordValidator(input.password))
      return seterrorMessage(
        "رمز عبور شما باید حداقل 8 کاراکتر و تلفیقی از حروف بزرگ و کوچک  واعداد و سمبل باشد"
      );
    // setsuccessMessage('Successfully Validated');
    if (input.email !== "admin@a.com" || input.password !== "Password@1")
      return seterrorMessage("ایمیل یا پسوورد نا معتبر");

    navigate("/");
    localStorage.setItem("auth", true);
  };

  return (
    <div style={{}}>
      <div className=" flex flex-col px-6 py-8 mx-auto md:h-screen lg:py-0 justify-center items-center ">
        <div className="">
          <div className=" flex justify-center items-center p-6 space-y-4 md:space-y-6">
            <form
              className=" bg-gray-400 w-96 rounded-lg shadow dark:border md:mt-0 space-y-4  md:space-y-6  p-4"
              onSubmit={formSubmitter}
            >
              <span className="p-3  text-2xl">Login</span>
              {errorMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "#a20000" }}>
                  {errorMessage}
                </div>
              )}
              {successMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "green" }}>
                  {successMessage}
                </div>
              )}
              <div
                className="flex gap-2 flex-col items-start"
                data-validate="email is required"
              >
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  ایمیل
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 
									dark:"
                  type="text"
                  name="email"
                  placeholder="ایمیل خود را وارد کنید"
                  onChange={handleChange}
                />
                <span className="" data-symbol="" />
              </div>
              <div
                className="flex gap-2  flex-col items-start"
                data-validate="Password is required"
              >
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  رمز عبور
                </label>
                <input
                  className="bg-gray-50 border border-gray-300
                   text-gray-900 sm:text-sm rounded-lg mb-5
                   focus:border-primary-600 block w-full p-2.5 
									dark:"
                  type="password"
                  name="password"
                  placeholder="رمز عبور خود را وارد کنید"
                  onChange={handleChange}
                />
                <span className="focus-input100" data-symbol="" />
              </div>

              <div>
          
                   <Link
                    to="/manage"
                    className="py-2.5 px-8 mr-2 mb-2 text-sm 
                    font-medium text-gray-900 focus:outline-none
                     bg-gray-500  rounded-full border border-none
                      hover:bg-gray-300 hover:text-gray-700 
                      focus:z-10 focus:ring-4 focus:ring-gray-200
                       dark:focus:ring-gray-700 dark:bg-gray-800
                        dark:text-gray-400
                     dark:border-gray-600 dark:hover:text-white
                      dark:hover:bg-gray-700"
                  >
                    ورود
                  </Link>
               



                  {/* <Link
                    to="/manage"
                    className="border-none my-auto
                     bg-gray-700 px-8 py-1  rounded-lg flex 
                     text-center
                       text-white w-6"
                  >
                    ورود
                  </Link> */}
                
              </div>
              <div className="container-login100-form-btn">
                <Link
                  to="/"
                  className="flex flex-row-reverse
               items-end text-red-900 hover:text-red-500"
                >
                  بازگشت به سایت
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};

export default Login;
