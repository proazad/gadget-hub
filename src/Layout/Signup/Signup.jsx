import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const Signup = () => {
  const [showpass, SetShowpass] = useState(false);
  const handleRegistrationUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const fname = form.get("fname").trim();
    const lname = form.get("lname").trim();
    const birthdate = form.get("birthdate").trim();
    const email = form.get("email").trim();
    const password = form.get("password").trim();
    const cpassword = form.get("cpassword").trim();
    const photo = form.get("photo").trim();

    const newUser = {
      fname,
      lname,
      birthdate,
      email,
      password,
      cpassword,
      photo,
    };

    const passwordValidation = (password, cpassword) => {
      const passwordRegex = /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).+$/;
      if (password !== cpassword) {
        swal("Opps!", "Password doesn't match", "error");
        return;
      } else if (password.length < 6) {
        swal("Opps!", "Password Must be Six digit or Longer", "error");
        return;
      } else if (!/[A-Z]/.test(password)) {
        swal("Opps!", "Don't have a capital letter", "error");
        return;
      } else if (!passwordRegex.test(password)) {
        swal("Opps!", "Don't have a special character", "error");
        return;
      } else {
        console.log(newUser);
      }
    };
    passwordValidation(password, cpassword);
  };
  return (
    <div className="bg-emerald-400">
      <div className="container mx-auto py-20">
        <div className="w-full lg:w-6/12 border rounded-lg mx-auto filter bg-slate-200/20 p-20">
          <h2 className="text-4xl font-bold uppercase">Please Sign up</h2>
          <form onSubmit={handleRegistrationUser}>
            <div className="form-control mt-3 relative">
              <label htmlFor="fname" className="font-medium font-xl">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                className="input input-bordered input-info"
                placeholder="Enter Your First Name"
                required
              />
              <span className="text-red-700 text-2xl absolute right-0">*</span>
            </div>
            <div className="form-control mt-3 relative">
              <label htmlFor="lname" className="font-medium font-xl">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                className="input input-bordered input-info"
                placeholder="Enter Your Last Name"
                required
              />
              <span className="text-red-700 text-2xl absolute right-0">*</span>
            </div>
            <div className="form-control mt-3 relative">
              <label htmlFor="birthdate" className="font-medium font-xl">
                Date of Birth
              </label>
              <input
                type="date"
                name="birthdate"
                id="birthdate"
                className="input uppercase input-bordered input-info"
              />
              <span className="text-red-700 text-2xl absolute right-0">*</span>
            </div>
            <div className="form-control mt-3 relative">
              <label htmlFor="email" className="font-medium font-xl">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input input-bordered input-info"
                placeholder="Enter Your Valid Email"
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
            <div className="form-control mt-3 relative">
              <label htmlFor="cpassword" className="font-medium font-xl">
                Confirm Password
              </label>
              <input
                type={showpass ? "text" : "password"}
                name="cpassword"
                id="cpassword"
                className="input input-bordered input-info"
                placeholder="Be Sure Both Password are Same"
                required
              />
              <span className="text-red-700 text-2xl absolute right-0">*</span>
              <span
                onClick={() => SetShowpass(!showpass)}
                className=" text-2xl absolute right-2 top-9"
              >
                {showpass ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            <div className="form-control mt-3 relative">
              <label htmlFor="photo" className="font-medium font-xl">
                Profile Photo
              </label>
              <input
                type="url"
                name="photo"
                id="photo"
                className="input input-bordered input-info"
                placeholder="Be Sure Both Password are Same"
                required
              />
              <span className="text-red-700 text-2xl absolute right-0">*</span>
            </div>
            <div className="form-control mt-3">
              <button type="submit" className="btn btn-accent">
                Submit
              </button>
            </div>
            <div className="form-control mt-3">
              <p>
                Already have account, Please{" "}
                <Link to="/signup" className="underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
