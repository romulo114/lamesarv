/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const navigation = [
  { name: "Element One", href: "#" },
  { name: "Element Two", href: "#" },
  { name: "Element Three", href: "#" },
  { name: "Element Four", href: "#" },
];

const headline = [
  {
    part_1: "Maecenas non euismod,",
    part_2: "commodo ligula sed",
  },
];

const subhead = [
  {
    content:
      "TEST2 Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
];

const background = [
  {
    device: "desktop",
    src: "https://res.cloudinary.com/la-mesa-rv/image/fetch/f_auto,q_auto/https://www.lamesarv.com/content/slides/test-slide1.jpg",
    alt: "",
  },
  {
    device: "tablet",
    src: "https://res.cloudinary.com/la-mesa-rv/image/fetch/f_auto,q_auto/https://www.lamesarv.com/content/slides/test-slide1.jpg",
    alt: "",
  },
  {
    device: "mobile",
    src: "https://res.cloudinary.com/la-mesa-rv/image/fetch/f_auto,q_auto/https://www.lamesarv.com/content/slides/test-slide1.jpg",
    alt: "",
  },
];

const cta = [
  {
    content: "CTA One",
    background: "bg-indigo-600",
    background_hover: "bg-indigo-900",
    url: "https://lamesarv.com",
    target: "_blank",
  },
  {
    content: "CTA Two",
    background: "bg-white",
    background_hover: "bg-gray-50",
    url: "#",
    target: "_self",
  },
];

const logo = [
  {
    href: "https://lamesarv.com",
    src: "https://res.cloudinary.com/la-mesa-rv/image/upload/c_scale,f_auto,q_auto,w_200/v1628800343/brand-assets/lamesarv/la-mesa-rv-black_qmute3",
    alt: "La Mesa RV logo",
  },
];

const myLoader = ({ src }) => {
  return src;
};

export default function LandingPage() {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto"></div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href={logo[0].href}>
                    <Image
                      className="h-8 w-auto sm:h-10"
                      src={logo[0].src}
                      alt={logo[0].alt}
                      width={200}
                      height={200}
                      loader={myLoader}
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <Image
                      className="h-8 w-auto sm:h-10"
                      src={logo[0].src}
                      alt={logo[0].alt}
                      width={200}
                      height={67}
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{headline[0].part_1}</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                {headline[0].part_2}
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {subhead[0].content}
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href={cta[0].url}
                  target={cta[0].target}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  {cta[0].content}
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href={cta[1].url}
                  target={cta[1].target}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  {cta[1].content}
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
