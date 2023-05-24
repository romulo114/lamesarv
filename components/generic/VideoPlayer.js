import { useRef } from "react";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

const VideoPlayer = () => {
  const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="la-mesa-rv">
      <div>
        <Video
          id="balloon-festival"
          publicId="video-footage/balloon-fiesta-lmrv-short_welwlj"
          resourceType="video"
          muted
          autoPlay
          playsInline
          poster="https://res.cloudinary.com/la-mesa-rv/image/upload/c_crop,e_saturation:80,f_auto,g_south,q_auto,x_0,y_150/v1629911407/ABQ%20Balloon%20Fiesta%20(2018)%20/TPXX0005_mequhs.jpg"
          className="z-10 w-auto min-w-full min-h-full max-w-none"
          secure="true"
        >
          <Transformation
            duration="35"
            effect="loop:20"
            quality="50"
            startOffset="0"
            videoCodec="auto"
            width={2880}
            crop="fit"
            fetchFormat="auto"
          />
        </Video>
      </div>
    </CloudinaryContext>
  );
};
export default VideoPlayer;
