import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";

const navigation = {
  legal: [
    { name: "Termos de uso ", href: "#" },
    { name: "Regulamento ", href: "#" },
    { name: "Política de privacidade ", href: "#" },
    { name: "Política LGPD ", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <div className=" text-[18px]">
          <FaFacebook></FaFacebook>
        </div>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <div className=" text-[18px]">
          <FaInstagram></FaInstagram>
        </div>
      ),
    },
    {
      name: "Tiktok",
      href: "#",
      icon: (props) => (
        <div className=" text-[18px]">
          <FaTiktok></FaTiktok>
        </div>
      ),
    },
  ],
};

function Footer(props) {
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-5 lg:pt-32">
        <div className="flex flex-col  lg:flex-row items-center lg:items-start align-middle lg:align-top justify-center lg:justify-between">
          <div className="w-full  max-w-[305px] flex xl:justify-start justify-center">
            <div className="w-full max-w-[305px] h-[271.61px] left-0 top-[126.8px] bg-white border-2 border-white rounded-[50px] flex flex-col justify-center items-center align-middle text-center">
              <h1 className="font-bold text-[30px]">Localização</h1>
              <p className="text-[20px] leading-[29px]">
                800, Brazos St.<br></br> Austin, TX, USA
              </p>
            </div>
          </div>
          <div className="">
            <div className="mt-10 xl:mt-0 text-center xl:text-start">
              <h3 className="text-[20px] font-extrabold leading-[20px] text-white">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4 text-[20px]">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[20px] leading-[20px] text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-[20px] font-extrabold leading-[21px] text-white text-center">
              Redes sociais
            </h3>
            <div className="flex space-x-6 md:order-2 text-enter align-middle items-center justify-center mt-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="my-16 pt-8 sm:mt-20 md:grid md:grid-cols-3 lg:mt-24">
          <p className="mt-8 text-[15px] leading-5 text-gray-400 md:order-1 md:mt-0 md:col-span-2 text-center md:text-start">
            Feito com amor nos USA por brasileiros
          </p>
          <p className="mt-8 text-[15px] leading-5 text-white md:order-1 md:mt-0 text-center lg:text-right">
            S&P Marketing LLC
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
