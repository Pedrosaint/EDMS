// src/pages/Login.tsx

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import NavbarComponent from "../navbar-component";

import vector from "@/assets/images/vector.png";

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // Placeholder for login logic
    console.log("Login Data:", data);

    navigate("/admin/dashboard");
  };

  return (
    <>
      <NavbarComponent />

      <div className="h-screen flex mx-auto w-screen items-center justify-center bg-[#f7f4ed] px-4">
        <div className="hidden h-full items-center justify-center lg:flex lg:w-1/2">
          <img src={vector} alt="vector" className="" />
        </div>

        <div className="flex w-full max-w-md items-center justify-center md:w-1/2 lg:max-w-xl">
          <div className="bg-white rounded-md shadow-md w-full lg:w-[520px] px-8 py-10">
            <h2 className="text-2xl font-semibold text-center mb-2">
              EDMS Login
            </h2>
            <p className="text-md text-gray-500 text-center mb-6">
              Hey, Enter your details to sign in to your account
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-3 py-5"
              noValidate
            >
              {/* Username Field */}
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  className="w-full rounded-md border border-gray-100 bg-gray-100 p-3 outline-none"
                  placeholder="Enter your Username"
                />
                {errors.username && (
                  <p className="text-xs text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="password">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    className="w-full rounded-md border border-gray-100 bg-gray-100 p-3 outline-none"
                    placeholder="Enter your password"
                  />
                  <div
                    className="absolute right-3 top-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </div>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="my-3 w-full cursor-pointer text-orange-500 hover:underline">
                <Link to="/forgot-password" className="text-xs lg:text-base">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-orange-500 p-3 text-white disabled:bg-gray-300 cursor-pointer"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
