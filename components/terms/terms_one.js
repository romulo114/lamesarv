import Link from "next/link";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const section = [
  {
    content: "Cool Beans Balloon Ride",
  },
];
const headline = [
  {
    content: "Terms & Conditions",
  },
];
const subhead = [
  {
    content: "Cras diam diam, sodales vel mattis sit amet",
  },
];

const logo = [
  {
    cloud_name: "la-mesa-rv",
    href: "https://lamesarv.com",
    public_id: "brand-assets/lamesarv/LMRV-COLOR-VECTOR-BLACK_pfekfg.png",
    src: "https://res.cloudinary.com/la-mesa-rv/image/upload/c_scale,f_auto,w_200/v1626474188/brand-assets/lamesarv/LMRV-COLOR-VECTOR-BLACK_pfekfg",
    alt: "La Mesa RV logo",
  },
];
const myLoader = ({ src }) => {
  return src;
};

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

export default function Example() {
  return (
    <div className="bg-white">
      <div className="w-full h-40 flex justify-center items-center">
        <Link href="https://lamesarv.com/?utm_campaign=albuquerque-balloon-fiesta&utm_medium=qrcode&utm_source=kiosk" target="_self">
          <a>
            <span className="sr-only">La Mesa RV</span>
            <CloudinaryContext cloud_name={logo[0].cloud_name} >
              <Image 
                publicId={logo[0].public_id} 
                className="flex h-15 w-auto filter drop-shadow-md"
                secure="true"
              >
                
                <Transformation 
                  aspectRatio="1.0"
                  width="200" 
                  height="67"
                  crop="scale" 
                />
              </Image>
          </CloudinaryContext>
          </a>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:py-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-500 tracking-wide uppercase sm:text-md">
            {section[0].content}
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-indigo-500 sm:text-4xl lg:text-4xl">
            {headline[0].content}
          </p>
          <p className="text-left leading-9 max-w-xl mt-5 mx-auto px-5 sm:px-5 text-xl text-gray-500">
            Enter to win a ride in the Cool Beans balloon during the 2021
            Albuquerque International Balloon Fiesta! Must be 18 years of age or
            older to enter. Non-complete entries will be disqualified. Entries
            must be completed and received no later than midnight on Sunday,
            October 3rd, MST. The balloon ride will only be for 1 person for 1
            ride. The winner will be determined and notified on Monday, October
            4th. An alternate winner will be selected in case the first winner
            declines or is not able to accept the ride. The winner will be
            awarded a ride that occurs on Tuesday, October 5th for the morning
            launch. The winner will sign waivers and provide other information
            to the balloon pilot. If the launch is cancelled or postponed then
            the winner will need to coordinate a possible alternate ride date,
            but alternate rides cannot be guaranteed. If the winner does not
            show up for the ride, then no other time/date will be assigned.
          </p>
          <p className="text-left leading-9 max-w-xl mt-5 mx-auto px-5 sm:px-5 text-xl text-gray-500">
            There is no cash value and the odds of winning will be based solely
            on the number of people that enter. The winner is responsible for
            paying admission to and any parking associated with attendance at
            the fiesta; this is not included in the prize.
          </p>
          <p className="text-left max-w-xl mt-5 mb-20 mx-auto text-gray-500">
            <Link href="/balloon-festival/">
              <a>
                <button
                  type="submit"
                  className="w-full h-12 mt-10 text-md bg-red-500 text-center text-white uppercase transition-all duration-500 font-bold py-2 px-4 sm:px-4 rounded filter drop-shadow-md hover:text-white hover:bg-indigo-500 "
                >
                  Return to registration page
                </button>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
