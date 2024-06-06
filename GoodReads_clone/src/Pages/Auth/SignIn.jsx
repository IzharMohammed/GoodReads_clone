import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 h-[90vh] ">
      <div className="text-5xl text-white font-semibold">
        <h1>Login to your account</h1>
      </div>

      <div className="flex gap-4 items-center ">
        <span className="text-white text-lg">Do not have an account ?</span>
        <button className="btn btn-success rounded-lg"><Link to='/SignUp'>Sign up</Link></button>
      </div>

      <form className=" flex flex-col  items-center  gap-8 w-3/4 ">
        <div className="w-1/3 rounded-lg  ">
          <input
            type="text"
            placeholder="Email ..."
            className="p-4  w-full focus:outline-none"
          />
        </div>

        <div className="w-1/3   ">
          <input
            type="text"
            placeholder="Password ..."
            className="p-4  w-full focus:outline-none "
          />
        </div>

        <div className="w-1/3">
          <button className="btn btn-primary rounded-lg w-full">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
