import React, { useState } from "react";
import { useShopContext } from "../../contexts/ShopContext";
import { FaUser } from "react-icons/fa6";
import { MdEmail, MdPassword } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const { showUserLogin, navigate, setShowUserLogin } = useShopContext();
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className=" fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center text-sm text-gray-600 bg-black/50"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <h3 className=" bold-20 mx-auto mb-3">
          <span className=" text-secondary capitalize">User</span>
          <span>{state === "Login" ? "Login" : "Register"}</span>
        </h3>
        {state === "Register" && (
          <div className="w-full">
            <p className="medium-14">Name</p>
            <div className="relative">
              <FaUser className="absolute left-2.5 top-[55%] -translate-y-1/2 text-base" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type Here..."
                required
                className="w-full mt-1 py-2 pl-8 border border-gray-200 rounded outline-black/80"
              />
            </div>
          </div>
        )}
        <div className="w-full">
          <p className="medium-14">Email</p>
          <div className="relative">
            <MdEmail className="absolute left-2.5 top-[55%] -translate-y-1/2 text-base" />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Type Here..."
              className="w-full mt-1 py-2 pl-8 border border-gray-200 rounded outline-black/80"
              required
            />
          </div>
        </div>
        <div className="w-full">
          <p className="medium-14">Password</p>
          <div className="relative ">
            <MdPassword className="absolute left-2.5 top-[55%] -translate-y-1/2 text-base" />
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPasword(e.target.value)}
              value={password}
              placeholder="Type Here..."
              className="w-full mt-1 py-2 pl-8 border border-gray-200 rounded outline-black/80"
              required
            />
            <div className=" absolute top-[55%] right-2.5 -translate-y-1/2 text-base">
              {showPassword ? (
                <IoMdEyeOff
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(false);
                  }}
                />
              ) : (
                <IoMdEye
                  onClick={(e) => {
                    setShowPassword(true);
                    e.preventDefault();
                  }}
                />
              )}
            </div>
          </div>
        </div>
        {state === "Register" ? (
          <p>
            Already have account?
            <span
              onClick={() => setState("Login")}
              className="text-secondary cursor-pointer"
            >
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Create an account?
            <span
              onClick={() => setState("Register")}
              className="text-secondary cursor-pointer"
            >
              Click Here
            </span>
          </p>
        )}
        <button
          type="submit"
          className="btn-secondary w-full rounded py-2.5 hover:bg-secondary/50"
        >
          {state === "Register" ? "create Acoount" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
