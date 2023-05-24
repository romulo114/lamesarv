import { Fragment } from 'react'
import Image from 'next/image'

import Hero_video from '../components/heroes/hero_video'
import Register_1 from '../components/registration/register_one'

import Header_1 from '../components/header/header_one'
import Footer_1 from '../components/footer/footer_one'

import { Popover, Transition } from '@headlessui/react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const section = [
    { 
      content: "Test",
    },
  ]

  const navigation = [
    { name: 'Element One', href: '#' },
    { name: 'Element Two', href: '#' },
  ]
  
  const headline = [
    { 
      part_1: "Maecenas non euismod,",
      part_2: "commodo ligula sed"
    },
  ]
  
  const subhead = [
    { 
      content: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function landingPage() {
  return (
    <div className="bg-white">
      <Hero_video />
      <Register_1 />
      <Footer_1 />
    </div>
  )
}
