/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function LandingPage() {
    return (
        <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
            Welcome to my site!
        </div>
        <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
            <source src="https://res.cloudinary.com/la-mesa-rv/video/upload/c_scale,du_35,f_auto,q_60,so_0,w_640/v1632118615/video-footage/balloon-fiesta-lmrv-short_welwlj.mp4" type="video/mp4" />Your browser does not support the video tag.
        </video>
        </header>
  )
}
