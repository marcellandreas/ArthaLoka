import React, { useEffect, useState } from "react";
import { useShopContext } from "../../../contexts/ShopContext";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdEmail, MdPassword } from "react-icons/md";

const AdminLogin = () => {
  const { isAdmin, setIsAdmin, navigate } = useShopContext();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAdmin(true);
  };

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin]);
  return (
    !isAdmin && (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center text-sm text-gray-600 bg-black/50">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
        >
          <h3 className=" bold-20 mx-auto mb-3">
            <span className=" text-secondary capitalize">Admin </span>
            Login
          </h3>
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
          <button
            type="submit"
            className="btn-secondary w-full rounded py-2.5 hover:bg-secondary/50"
          >
            Login
          </button>
        </form>
      </div>
    )
  );
};

export default AdminLogin;
