import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const sections = [
  {
    title: "About",
    items: ["Company", "Careers", "News"],
  },
  {
    title: "Support",
    items: ["Contact Support", "Help Resources", "Release Updates"],
  },
  {
    title: "Platform",
    items: ["Terms & Privacy", "Pricing", "FAQ"],
  },
  {
    title: "Contact",
    items: ["Address", "City 123 45", "+123-456-7890"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-customCyanTeal text-zinc-50 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-zinc-50  py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-zinc-50  hover:text-white">
                  {section.title === "Contact" ? item : <a href="#">{item}</a>}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-zinc-50 ">
        <p className="py-4">
          &copy;2024 Marketplace, LLC. All rights reserved.
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return (
              <a
                href={x.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <x.icon className="hover:text-white" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;