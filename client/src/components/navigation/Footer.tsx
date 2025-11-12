import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { linkSectionsFooter } from "../constants/navItems";

const Footer = () => {
  const linkSections = linkSectionsFooter;

  return (
    <footer className="max-padd-container bg-linear-to-l via-white to-primary">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30">
        <div>
          {/* logo */}
          <div className="flex flex-1">
            <Link to="/" className="bold-22 xl:bold-28 flex items-end gap-2">
              <img
                src={logoImg}
                alt="logo website"
                className=" hidden sm:block h-9 "
              />
              <div className=" sm:relative top-1.5">
                Artha<span className=" text-secondary">Loka</span>
              </div>
            </Link>
          </div>
          <p className=" max-w-[410px] mt-6">
            Discover stylish clothing and shoes online, crafted for comfort and
            quality. Shop fashion-forward designs that elevate your look and fit
            every lifestyle.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className=" font-semibold text-base md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className=" text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className=" hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className=" py-4 text-center">
        Copyrigth 2025 @ ArthaLoka All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
