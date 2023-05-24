import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import VideoPlayer from "../../components/generic/VideoPlayer";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const logo = [
  {
    cloud_name: "la-mesa-rv",
    href: "https://lamesarv.com",
    public_id: "brand-assets/lamesarv/LMRV-COLOR-VECTOR-WHITE_b5ptg6.png",
    src: "https://res.cloudinary.com/la-mesa-rv/image/upload/c_scale,f_auto,w_400/v1626474188/brand-assets/lamesarv/LMRV-COLOR-VECTOR-WHITE_b5ptg6",
    alt: "La Mesa RV logo",
  },
];
const myLoader = ({ src }) => {
  return src;
};

export default function LandingPage() {
  return (
    <div className="w-full relative flex items-center justify-center h-screen overflow-hidden">
      <div className="w-full h-40 top-0 left-0 absolute z-30 flex flex-col justify-center items-center">
        <a
          href="https://lamesarv.com/?utm_campaign=albuquerque-balloon-fiesta&utm_medium=qrcode&utm_source=kiosk"
          target="_self"
        >
          <span className="sr-only">La Mesa RV</span>
          <CloudinaryContext cloud_name={logo[0].cloud_name}>
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
      </div>

      <div className="w-full h-full top-0 left-0 absolute z-20 flex flex-col justify-center items-center bg-indigo-400 opacity-30"></div>

      <div className="w-full h-full top-0 left-0 absolute z-20 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-center text-white filter drop-shadow-lg">
          Thank you for registering!
        </h1>
        <h2 className="mt-5 text-2xl text-center text-white filter drop-shadow-md">
          Have fun and good luck! The winner will be notified before Tuesday,
          October 5th
        </h2>
      </div>

      <VideoPlayer />
    </div>
  );
}
