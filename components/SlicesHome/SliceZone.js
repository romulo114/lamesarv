import React from "react";
import {
  Header,
  Hero1,
  Hero2,
  Hero3,
  Hero4,
  Cta,
  Faq,
  Features,
  Footer,
  Generic,
  Signup,
  SocialIcons,
} from ".";

const SliceZone = ({ sliceZone }) => (
  <div>
    {sliceZone.map((slice, index) => {
      console.log("slice type: ", slice.slice_type);
      switch (slice.slice_type) {
        case "header":
          return <Header slice={slice} key={`slice-${index}`} />;
        case "hero1":
          return <Hero1 slice={slice} key={`slice-${index}`} />;
        case "hero2":
          return <Hero2 slice={slice} key={`slice-${index}`} />;
        case "hero3":
          return <Hero3 slice={slice} key={`slice-${index}`} />;
        case "hero4":
          return <Hero4 slice={slice} key={`slice-${index}`} />;
        // case "cta_slice":
        //   return <Cta slice={slice} key={`slice-${index}`} />;
        // case "faq_slice":
        //   return <Faq slice={slice} key={`slice-${index}`} />;
        // case "features_slice":
        //   return <Features slice={slice} key={`slice-${index}`} />;
        // case "footer_slice":
        //   return <Footer slice={slice} key={`slice-${index}`} />;
        // case "generic_slice":
        //   return <Generic slice={slice} key={`slice-${index}`} />;

        default:
          return null;
      }
    })}
  </div>
);

export default SliceZone;
