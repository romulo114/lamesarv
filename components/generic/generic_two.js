import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const section = [
    { 
      content: "Maecenas non euismod",
    },
  ]
  const headline = [
    { 
      content: "Morbi ornare leo nisi",
    },
  ]
  const subhead = [
    { 
      content: "Cras diam diam, sodales vel mattis sit amet",
    },
  ]

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
  ]

export default function Example() {
    return (
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src={background[0].src}
            alt={background[0].alt}
            layout="fill"
          />
          <div className="absolute inset-0 bg-indigo-400 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{headline[0].content}</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            {subhead[0].content}
          </p>
        </div>
      </div>
    )
  }
  