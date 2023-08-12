import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";

function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="max-w-[1920px] mx-auto">
      <header className="bg-none text-white px-5 ">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between pt-4 md:px-0 sm:p-5"
          aria-label="Global"
        >
          <a href="#" className="-m-1.5">
            <span className="sr-only">Sortioes</span>
            <Image
              className="h-[89px] w-[228px]"
              src={logo}
              width={228}
              height={89}
              alt=""
            />
          </a>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-white"
            >
              English
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#0E2B58] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5">
                <span className="sr-only">Sortioes</span>
                <Image
                  className="h-[89px] w-[228px]"
                  src={logo}
                  width={228}
                  height={89}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white">
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-black hover:bg-white"
                  >
                    English
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default Header;
