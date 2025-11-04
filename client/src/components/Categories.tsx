import { categories } from "../assets/data";
import { useShopContext } from "../contexts/ShopContext";
import Title from "./common/Title";

const Categories = () => {
  const { navigate } = useShopContext();
  const colors: string[] = [`bg-[#aedae6]`, `bg-[#fff9c9]`, `bg-[#fddbdb]`];

  return (
    <section className="max-padd-container pt-16">
      <Title
        title1="Category"
        title2="List"
        titleStyles="pb-6"
        title1Styles="pt-6"
        para=""
      />
      {/* container */}
      <div className="flex gap-9 flex-wrap">
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => navigate(`/shop/${cat.name.toLowerCase()}`)}
            className="flexCenter flex-col cursor-pointer gruop"
          >
            <div
              className={`flexCenter flex-col h-36 w-36 sm:h-40 sm:w-40 rounded-xl ${
                colors[i % 3]
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                height={46}
                width={46}
                className=" object-cover"
              />
              <h5 className="h5 capitalize mt-6">{cat.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
