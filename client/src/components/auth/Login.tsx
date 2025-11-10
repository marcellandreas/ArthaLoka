import React, { useState } from "react";
import { useShopContext } from "../../contexts/ShopContext";

const Login = () => {
  const { showUserLogin, navigate } = useShopContext();
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className=" fixed top-0 bottom-0 right-0 z-40 flex items-center text-sm text-gray-600 bg-black/50">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl"
      >
        <h3 className=" bold-20 mx-auto mb-3">
          <span className=" text-secondary capitalize">User</span>
          <span>{state === "Login" ? "Login" : "Register"}</span>
        </h3>
        {state === "Register" && (
          <div className="w-full">
            <p className="medium-14">Name</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Type Here..."
              className="border border-gray-200 rounded w-full p2 mt-1 outline-black/80"
              required
            />
          </div>
        )}
        <div className="w-full">
          <p className="medium-14">Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Type Here..."
            className="border border-gray-200 rounded w-full p2 mt-1 outline-black/80"
            required
          />
        </div>
        <div className="w-full">
          <p className="medium-14">Password</p>
          <input
            type="password"
            onChange={(e) => setPasword(e.target.value)}
            value={password}
            placeholder="Type Here..."
            className="border border-gray-200 rounded w-full p2 mt-1 outline-black/80"
            required
          />
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
        <button type="submit" className="btn-secondary w-full rounded py-2.5">
          {state === "Register" ? "create Acoount" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
