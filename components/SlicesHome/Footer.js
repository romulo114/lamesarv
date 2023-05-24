import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

const copyright = [
  {
    content: "Copyright © La Mesa RV Center, Inc.",
  },
];

const logo = [
  {
    cloud_name: "la-mesa-rv",
    href: "https://lamesarv.com/?utm_campaign=albuquerque-balloon-fiesta&utm_medium=qrcode&utm_source=kiosk",
    public_id: "brand-assets/lamesarv/LMRV-COLOR-VECTOR-WHITE_b5ptg6.png",
    src: "https://res.cloudinary.com/la-mesa-rv/image/upload/c_scale,f_auto,w_400/v1626474188/brand-assets/lamesarv/LMRV-COLOR-VECTOR-WHITE_b5ptg6",
    alt: "La Mesa RV logo",
  },
];

const myLoader = ({ src }) => {
  return src;
};

const navigation = {
  main: [
    {
      name: "Privacy Policy",
      href: "https://www.lamesarv.com/home/privacypolicy",
    },
    {
      name: "California Supply Chain Act",
      href: "https://www.lamesarv.com/home/supplychain",
    },
    { name: "(888) 255-1438", href: "tel:8882551438" },
    { name: "sales@lamesarv.com", href: "sales@lamesarv.com" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/lamesarv",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/lamesarv/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/lamesarv",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/lamesarv/_created/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/c/lamesarv",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 99.4 70" {...props}>
          <path d="M39.6,49.7V20.2L65.6,35ZM97.3,10.9a12.29,12.29,0,0,0-8.8-8.8C80.8,0,49.7,0,49.7,0S18.6,0,10.9,2.1a12.42,12.42,0,0,0-8.8,8.8C0,18.7,0,35,0,35S0,51.3,2.1,59.1a12.29,12.29,0,0,0,8.8,8.8C18.6,70,49.7,70,49.7,70s31.1,0,38.8-2.1a12.6,12.6,0,0,0,8.8-8.8C99.4,51.3,99.4,35,99.4,35s0-16.3-2.1-24.1" />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-indigo-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="w-full z-30 mb-10 flex flex-col justify-center items-center">
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
                  width="120"
                  height="40"
                  crop="scale"
                />
              </Image>
            </CloudinaryContext>
          </a>
        </div>
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-indigo-200 hover:text-white"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-indigo-200 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-indigo-200">
          {copyright[0].content}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
