import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Signin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userSignIn,signInWithGoogle } = useContext(AuthContext);
  const [showpass, SetShowpass] = useState(false);
  const handleRegistrationUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email").trim();
    const password = form.get("password").trim();
    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        swal("cool!", "Successfully Sign in ", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        swal(
          "Opps!",
          "Something went wrong, email/password not Valid!",
          "error"
        );
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        if(res){
          swal("Cool!","Successfuly Sign in","success");
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        if(error){
          swal("Opps!","Something went wrong, Try Again Later!","error");
        }
      });
  };
  return (
    <div className="bg-emerald-400">
      <div className="container mx-auto py-20">
        <div className="w-full lg:w-6/12 border rounded-lg mx-auto filter bg-slate-200/20 p-20">
          <h2 className="text-4xl font-bold uppercase">Please Sign in</h2>
          <form onSubmit={handleRegistrationUser}>
            <div className="form-control mt-3 relative">
              <label htmlFor="email" className="font-medium font-xl">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input input-bordered input-info"
                placeholder="Enter Your Email"
                required
              />
              <span className="text-red-700 text-2xl absolute right-0">*</span>
            </div>
            <div className="form-control mt-3 relative">
              <label htmlFor="password" className="font-medium font-xl">
                Password
              </label>
              <input
                type={showpass ? "text" : "password"}
                name="password"
                id="password"
                className="input input-bordered input-info"
                placeholder="Enter Your Unique & Strong Password"
                required
              />
              <span className="text-red-700 text-2xl absolute right-0 ">*</span>
              <span
                onClick={() => SetShowpass(!showpass)}
                className=" text-2xl absolute right-2 top-9"
              >
                {showpass ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>

            <div className="form-control mt-3">
              <button type="submit" className="btn btn-accent">
                Sign in
              </button>
            </div>
            <div className="form-control mt-3">
              <p>
                Don&apost have account, Please{" "}
                <Link to="/signup" className="underline">
                  Sign up
                </Link>
              </p>
            </div>
            <div className="form-control mt-5">
              <p
                onClick={handleGoogleSignIn}
                className="btn flex items-center justify-center gap-5 text-2xl"
              >
                Continue With Google <FcGoogle />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
