import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import VideoPlayer from "../generic/VideoPlayer";
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

const qrcode = [
  {
    cloud_name: "la-mesa-rv",
    href: "https://lamesarv.com",
    public_id: "qr-codes/qrcode-balloon-festival-white_rir8qm.png",
    src: "https://res.cloudinary.com/la-mesa-rv/image/upload/v1632867771/qr-codes/qr-codes/qrcode-balloon-festival-white_rir8qm.png",
    alt: "Free Balloon Ride Registration QR Code",
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl mt-20 font-bold text-center text-white filter drop-shadow-lg">
          Scan QR Code <br className="visible md:hidden" />
          to Register
        </h1>
        <h2 className="mt-5 text-2xl text-center text-white filter drop-shadow-md">
          Register to win a chance <br className="visible md:hidden" />
          at one ride in the <br className="visible md:hidden" />
          <strong>Cool Beans balloon</strong>{" "}
          <br className="visible lg:hidden" />
          on Tuesday, October 5th
        </h2>

        <CloudinaryContext cloud_name={qrcode[0].cloud_name} className="mt-10">
          <Image
            publicId={qrcode[0].public_id}
            className="flex z-50 filter drop-shadow-md"
            secure="true"
          >
            <Transformation width="150" height="150" crop="scale" />
          </Image>
        </CloudinaryContext>
      </div>
      <VideoPlayer />
    </div>
  );
}
