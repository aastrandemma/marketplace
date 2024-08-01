import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Advertisements from "./components/AdvertisementList";

const App = () => {
  const logo = "/img/marketplace_logo_60.png";
  const links = ["Login", "Sign Up", "About"];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar logo={logo} links={links} />
      <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1240px] mx-auto">
        <Advertisements />
      </main>
      <Footer />
    </div>
  );
};

export default App;