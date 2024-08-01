import React from "react";

const Navbar = ({logo, links}) => {
  return (
    <header className="w-full py-y px-2 text-customCyanTeal shadow-lg">
      <div className="container max-w-[1240px] mx-auto flex items-center h-20">
        <a href="#" className="flex items-center justify-center">
          <img className="h-14" src={logo} alt="" />
          <span className="ml-4 font-bold text-xl text-customCyanTeal">Marketplace</span>
        </a>
        <nav className="contents font-semibold text-base lg:text-lg">
          <ul className="flex items-left ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-16">
            {links.map((link, index) => {
                const liElement = (
                    <li className="p-5 xl:p-8" key={index}>
                        <a href="#" className="hover:text-customDarkCyanTeal">{link}</a>
                    </li>
                );
                return liElement;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;