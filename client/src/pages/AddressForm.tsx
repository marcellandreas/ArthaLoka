import { useState } from "react";
import CartTotal from "../components/cart/CartTotal";
import Title from "../components/common/Title";
import type { AddressForm, InputChangeEvent } from "../interface/form";

const AddressForm = () => {
  // const { navigate, user } = useShopContext();
  const [address, setAddress] = useState<AddressForm>({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e: InputChangeEvent) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddress((data) => ({ ...data, [name]: value }));
  };
  return (
    <div className="max-padd-container py-16 pt-28 ">
      {/* container */}
      <div className="flex flex-col xl:flex-row xl:gap-28">
        {/* left side */}
        <form
          // onSubmit={onSubmitHandler}
          className="flex flex-2 flex-col gap-3 text-[95%]"
        >
          <Title
            title1={"Delivery"}
            title2={"Information"}
            titleStyles={"pb-5"}
          />
          <div className="flex gap-3">
            <input
              type="text"
              onChange={onChangeHandler}
              value={address.firstName}
              name="firstName"
              placeholder="First Name"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              value={address.lastName}
              name="lastName"
              placeholder="Last Name"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
            />
          </div>
          <input
            type="email"
            onChange={onChangeHandler}
            value={address.email}
            name="email"
            placeholder="Email"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none "
          />
          <input
            type="text"
            onChange={onChangeHandler}
            value={address.phone}
            name="phone"
            placeholder="Phone"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none "
          />
          <input
            type="text"
            onChange={onChangeHandler}
            value={address.street}
            name="street"
            placeholder="Street"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none "
          />
          <div className="flex gap-3">
            <input
              type="text"
              onChange={onChangeHandler}
              value={address.city}
              name="city"
              placeholder="City"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              value={address.state}
              name="state"
              placeholder="State"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              onChange={onChangeHandler}
              value={address.zipcode}
              name="zipcode"
              placeholder="Zipcode"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
            />
            <input
              type="text"
              onChange={onChangeHandler}
              value={address.country}
              name="country"
              placeholder="Country"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2"
            />
          </div>
          <button type="submit" className=" btn-dark rounded-md w-1/2 mt-2">
            Add Address
          </button>
        </form>
        {/* right side */}
        <div className="flex flex-1 flex-col">
          <div className="max-w-[379px] w-full bg-primary p-5 py-10 max-md:mt-16 rounded-xl">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
