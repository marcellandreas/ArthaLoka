import React, { useState } from "react";
import upload_icon from "../../assets/upload_icon.png";

const AdminAddProduct = () => {
  const [files, setFiles] = useState<(File | undefined)[]>([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("10");
  const [offerPrice, setOfferPrice] = useState("10");
  const [category, setCategory] = useState("Academic");
  const [popular, setPopular] = useState(false);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="px-2 sm:px-6 py-12 m-2 h-[97vh] bg-primary overflow-y-scroll w-full lg:w-4/5 rounded-xl">
      <form
        onSubmit={onSubmitHandler}
        className="flexflex-col gap-y-3 medium-14"
      >
        <div className="w-full">
          <h5 className="h5">Product Name</h5>
          <input
            type="text"
            value={name}
            placeholder="Write here..."
            className="px-3 py-1 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-xl"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full">
          <h5 className="h5">Product Description</h5>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={5}
            placeholder="Write here..."
            className="px-3 py-1 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-xl"
          />
        </div>
        <div>
          <div className="flex gap-4">
            <div>
              <h5 className="h5">Product Category</h5>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="max-w-30 px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full "
              >
                <option value="Academic">Academic</option>
                <option value="Children">Children</option>
                <option value="Health">Health</option>
                <option value="Horror">Horror</option>
                <option value="Business">Business</option>
                <option value="History">History</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>
            <div>
              <h5 className="h5">Product Price</h5>
              <input
                type="number"
                value={price}
                placeholder="10"
                className="px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-24"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <h5 className="h5">Offer Price</h5>
              <input
                type="number"
                value={offerPrice}
                placeholder="10"
                className="px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-24"
                onChange={(e) => setOfferPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* images */}
        <div className="flex gap-2 pt-2">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <label
                htmlFor={`image${index}`}
                className="ring-1 ring-slate-900/10 overflow-hidden rounded"
              >
                <input
                  hidden
                  type="file"
                  id={`image${index}`}
                  onChange={(e) => {
                    const updatedFiles = [...files];
                    updatedFiles[index] = e.target.files?.[0];
                    setFiles(updatedFiles);
                  }}
                />
                <img
                  src={
                    files[index]
                      ? URL.createObjectURL(files[index])
                      : upload_icon
                  }
                  alt="upload images"
                  height={67}
                  width={67}
                  className=" bg-white overflow-hidden aspect-square object-cover"
                />
              </label>
            ))}
        </div>
        <div className="flexStart gap-2 mt-2">
          <input
            type="checkbox"
            checked={popular}
            onChange={() => setPopular((prev) => !prev)}
            id="popular"
          />
          <label htmlFor="popular" className=" cursor-pointer">
            Add to Popular
          </label>
        </div>
        <button
          type="submit"
          className=" btn-dark mt-3 max-w-44 sm:w-full rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
