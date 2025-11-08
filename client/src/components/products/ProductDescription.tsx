const ProductDescription = () => {
  return (
    <section className=" mt-14 ring-1 ring-slate-900/10  rounded-lg">
      <div className="flex gap-3">
        <button className="medium-14 p-3 w-32 border-b-2 border-secondary">
          Description
        </button>
        <button className="medium-14 p-3 w-32">Color Guide</button>
        <button className="medium-14 p-3 w-32">Size Guide</button>
      </div>
      <hr className="h-px w-full border-gray-500/30" />
      <div className="flex flex-col gap-3 p-3">
        <div>
          <h5 className="h5">Detail</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, laborum.
          </p>
        </div>
        <div>
          <h5 className="h5">Benefit</h5>
          <ul className="list-dist pl-5 text-sm flex flex-col gap-1">
            <li className="text-gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li className="text-gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li className="text-gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
