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
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">{section[0].content}</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          {headline[0].content}
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            {subhead[0].content}
          </p>
        </div>
      </div>
    </div>
  )
}
