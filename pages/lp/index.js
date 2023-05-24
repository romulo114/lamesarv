import { Fragment } from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

import Hero_1 from '../../components/heroes/hero_one'
import Hero_2 from '../../components/heroes/hero_two'
import Hero_3 from '../../components/heroes/hero_three'

import Feature_1 from '../../components/features/feature_one'
import Feature_2 from '../../components/features/feature_two'
import Feature_3 from '../../components/features/feature_three'

import CTA_1 from '../../components/cta/cta_one'
import CTA_2 from '../../components/cta/cta_two'
import CTA_3 from '../../components/cta/cta_three'

import FAQ_1 from '../../components/faq/faq_one'
import FAQ_2 from '../../components/faq/faq_two'
import FAQ_3 from '../../components/faq/faq_three'

import Generic_1 from '../../components/generic/generic_one'
import Generic_2 from '../../components/generic/generic_two'
import Generic_3 from '../../components/generic/generic_three'

import Signup_1 from '../../components/signup/signup_one'
import Signup_2 from '../../components/signup/signup_two'
import Signup_3 from '../../components/signup/signup_three'

import Footer_1 from '../../components/footer/footer_one'

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

const solutions = [
  {
    name: 'Inbox',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: AnnotationIcon,
  },
  { name: 'Live Chat', description: "Your customers' data will be safe and secure.", href: '#', icon: ChatAlt2Icon },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
]

const metrics = [
  { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
  { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
  { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
  { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]
const footerNavigation = {
  solutions: [
    { name: 'TEST Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} 

export default function landingPage () {
  return (
    <div className="bg-white">
      <Hero_3 />
      <Feature_3 />
      <CTA_3 />
      <Signup_1 />
      <FAQ_3 />
      <Generic_1 />
      <Generic_2 />
      <Signup_3 />
      <Footer_1 />
    </div>
  )
}
