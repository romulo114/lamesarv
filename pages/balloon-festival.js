import { Fragment } from 'react'
import Image from 'next/image'

import Hero_video from '../components/heroes/hero_video'
import Hero_1 from '../components/heroes/hero_one'
import Hero_2 from '../components/heroes/hero_two'
import Hero_3 from '../components/heroes/hero_three'
import Hero_4 from '../components/heroes/hero_four'

import Feature_1 from '../components/features/feature_one'
import Feature_2 from '../components/features/feature_two'
import Feature_3 from '../components/features/feature_three'

import CTA_1 from '../components/cta/cta_one'
import CTA_2 from '../components/cta/cta_two'
import CTA_3 from '../components/cta/cta_three'

import FAQ_1 from '../components/faq/faq_one'
import FAQ_2 from '../components/faq/faq_two'
import FAQ_3 from '../components/faq/faq_three'

import Generic_1 from '../components/generic/generic_one'
import Generic_2 from '../components/generic/generic_two'
import Generic_3 from '../components/generic/generic_three'

import Signup_1 from '../components/signup/signup_one'
import Signup_2 from '../components/signup/signup_two'
import Signup_3 from '../components/signup/signup_three'

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
