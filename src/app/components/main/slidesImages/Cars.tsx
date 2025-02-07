'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

import Image from 'next/image'
import img4 from '@/../public/images/thirdBox/4.jpg'
import img5 from '@/../public/images/thirdBox/5.jpg'
import img10 from '@/../public/images/thirdBox/10.jpg'
import img11 from '@/../public/images/thirdBox/11.jpg'
import img12 from '@/../public/images/thirdBox/12.jpg'

export default function Cars(){

  return (
    <article
    id="cars"
    className="thirdPanel relative flex justify-center items-center
   text-4xl px-10 py-12  min-w-[100vw] h-[100vh] overflow-hidden bg-green-400/50"
  >
    <Image
      id="img4"
      loading="lazy"
      className="w-auto absolute hover:z-50  max-w-[15vw]  max-h-[70vh] object-cover rounded-2xl"
      src={img4}
      alt="img4"
    />
    <Image
      id="img5"
      loading="lazy"
      className="w-auto absolute hover:z-50 max-w-[15vw] max-h-[70vh] object-cover rounded-2xl"
      src={img5}
      alt="img5"
    />

    <Image
      id="img10"
      loading="lazy"
      className="w-auto z-20 absolute hover:z-50 max-w-[15vw] max-h-[70vh] object-cover rounded-2xl"
      src={img10}
      alt="img10"
    />
    <Image
      id="img11"
      loading="lazy"
      className="w-auto z-10 absolute hover:z-50 max-w-[15vw] max-h-[70vh] object-cover rounded-2xl"
      src={img11}
      alt="img11"
    />
    <Image
      id="img12"
      loading="lazy"
      className="w-auto absolute hover:z-50 max-w-[15vw] max-h-[70vh] object-cover rounded-2xl"
      src={img12}
      alt="img12"
    />
  </article>
  )
}