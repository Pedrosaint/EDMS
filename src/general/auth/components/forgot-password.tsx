
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import NavbarComponent from "../navbar-component";
import password from "@/assets/images/password.png";



type ForgotPasswordFormValues = {
  email: string;
};

export default function ForgotPassword() {

  const {
    register,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>();


  return (
    <div>
      <NavbarComponent />

      <div className="h-screen flex mx-auto w-screen items-center justify-center bg-[#f7f4ed] px-4">
        {/* Left: Animation */}
        <div className="relative hidden h-full items-center justify-center lg:flex lg:w-1/2">
          <img src={password} alt="Background" className="h-150 w-150" />

          <Link
            to="/login"
            className="absolute bottom-50 left-50 flex items-center gap-2 rounded-lg bg-white p-3 text-orange-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <span>Back</span>
          </Link>
        </div>

        {/* Right: Form */}
        <div className="lex w-full max-w-md items-center justify-center md:w-1/2 lg:max-w-xl">
          <div className="w-full rounded-xl bg-white p-5 lg:p-[50px]">
            <p className="text-[20px] font-bold lg:text-[30px]">
              Forgot Your Password?
            </p>
            <p>We’ve got you covered</p>

            <p className="mt-5 font-bold lg:mt-14 lg:w-[70%]">
              Enter the email address linked to your account
            </p>

            <form className="my-8 flex w-full flex-col gap-8 py-5 lg:my-16">
              <div className="flex w-full flex-col gap-4">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full rounded-lg border bg-gray-100 p-3 outline-none"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-orange-500 p-3 text-white disabled:opacity-50 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

          <Link
            to="/login"
            className="flex w-fit items-center gap-2 rounded-lg bg-white p-3 text-orange-500 lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <span>Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
