import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "../../assets/images/logo-removebg-preview.png"
import { MdAccountCircle } from "react-icons/md";

import "./Header.scss";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const homeDropdown = [
  {
    name: "Munnar",
    description: "It's the place you would love to visit!",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Vaganum",
    description:
      "Vagamon is a paradise for travellers with its mystical weather",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
];

const moreDropdown = [
  {
    name: "Members",

    href: "#",
  },
  {
    name: "Forum",

    href: "#",
  },
  {
    name: "Groups",

    href: "#",
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 w-full z-50 shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 logo-container">
          <a href="#" className="-m-1.5 p-1">
            <div className="logo-div">
              <div>
                <img className="h-9 w-auto pr-2" src={logo} alt="Auriga" />
              </div>
              <div className="text-div">
                <h2 className="logo-text-1" style={{ fontFamily: "logo-font", color: "#324158" }}>
                  Kings Family Dhaba
                </h2>
                <p className="text2 pr-4">Sangareddy</p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 items-center listItems">
          <a href="#" className="text-sm   mt-1 leading-6 text-gray-900 ">
            <p className="px-1 py-0 mt-2 align-middle">Home</p>
          </a>

          {/* <Popover className="relative">
            <Popover.Button
              style={{ fontFamily: "logo-text-font" }}
              className="flex     items-center gap-x-1 text-sm  leading-6 text-gray-900"
            >
              <a href="#" className="text-sm  mt-1  leading-6 text-gray-900 ">
                <p className=" py-0 mt-2 ">Hostels</p>
              </a>
              <ChevronDownIcon
                className="h-4 w-4 mb-1 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-1xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {homeDropdown.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href="#"
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}

          <a href="#" className="text-sm   mt-1 leading-6 text-gray-900 ">
            <p className="px-1 py-0 mt-2 ">About</p>
          </a>
          <a href="#" className="text-sm  mt-1 leading-6 text-gray-900 ">
            <p className="px-1 py-0 mt-2 ">FAQ's </p>
          </a>
          <a href="#" className="text-sm  mt-1  leading-6 text-gray-900 ">
            <p className="px-1 py-0 mt-2 ">Careers</p>
          </a>
          <a href="#" className="text-sm   mt-1 leading-6 text-gray-900 ">
            <p className="px-1 py-0 mt-2 ">Contact</p>
          </a>
          <Popover className="relative">
            <Popover.Button
              style={{ fontFamily: "logo-text-font" }}
              className="flex     items-center gap-x-1 text-sm  leading-6 text-gray-900"
            >
              <a href="#" className="text-sm  mt-1  leading-6 text-gray-900 ">
                <p className="  py-0 mt-2 ">More</p>
              </a>
              <ChevronDownIcon
                className="h-4 w-4 mb-1 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 w-40 top-full z-10 mt-3   max-w-md overflow-hidden rounded-1xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {moreDropdown.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <a
                          href="#"
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center items-center">
          <a href="#">
            <MdAccountCircle size={30} />
          </a>
          <a
            href="#"
            className="text-sm   leading-6 text-gray-900 pl-2 text-center  mt-2"
            style={{ fontFamily: "logo-text-font", textAlign: "center" }}
          >
            <p>Log In</p>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Auriga</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base   leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Hostels
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...homeDropdown].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base   leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base   leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Careers
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        More
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...moreDropdown].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base   leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
