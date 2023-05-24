/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const headline = [
  {
    part_1: "Maecenas non euismod,",
    part_2: "commodo ligula sed",
  },
];

const subhead = [
  {
    content:
      "TEST3 Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
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

const resources = [
  {
    name: "Element One",
    description: "11111111",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Element Two",
    description: "22222222",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Element Three",
    description: "33333333",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Element Four",
    description: "4444444444",
    href: "#",
    icon: ShieldCheckIcon,
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
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href={logo[0].href}>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src={logo[0].src}
                  alt={logo[0].alt}
                  width={200}
                  height={67}
                  loader={myLoader}
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{headline[0].part_1}</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                {headline[0].part_2}
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {subhead[0].content}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
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
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  {cta[1].content}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={background[0].src}
            alt={background[0].alt}
            width={200}
            height={200}
          />
        </div>
      </main>
    </div>
  );
}
