'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)
export default function SpinningCircles() {
  const firstElem = useRef<HTMLParagraphElement>(null)
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: firstElem.current,
          toggleActions: 'play pause reverse pause',
          start: '50% 50%',
          end: 'bottom 20%',
          endTrigger: '#secondElem',
          scrub: 2,
          pin: true,
        },
      })
      tl.to(firstElem.current, {
        duration: 3,
        x: () => '-=' + '20vw',
        rotation: '+=720',
        ease: 'power1.inOut',
      })
      tl.to(firstElem.current, {
        duration: 6,
        x: () => '+=' + '40vw',
        rotation: '-=1440',
        ease: 'power2.inOut',
      })
      tl.to(firstElem.current, {
        duration: 3,
        x: 0,
        rotation: '+=720',
        ease: 'power3.inOut',
      })

      tl.to('#meowSpan', {
        duration: 2,
        text: 'Welcome',
        ease: 'power1.inOut',
      })
      tl.to('#aufSpan', {
        duration: 2,
        text: 'To',
        ease: 'power1.inOut',
      })
      tl.to('#kryaSpan', {
        duration: 2,
        text: 'GSAP!',
        ease: 'power1.inOut',
      })
    },
    { scope: firstElem }
  )
  return (
    <section
      ref={firstElem}
      id="firstElem"
      className="mt-[50vh] flex 
       gap-10  justify-center items-center text-orange-300"
    >
      <p className="relative flex-[3, 3, 0%] text-center w-[10vw] h-[10vw]  border-orange-400 border-2 rounded-full p-10 will-change-transform ">
        <span
          id="meowSpan"
          className="absolute top-[50%] left-[50%] translate-x-[-50%]
        translate-y-[-50%]"
        >
          First!
        </span>
      </p>
      <p
        className="relative text-center w-[10vw] h-[10vw]  border-orange-400 
        border-2 rounded-full p-10 will-change-transform "
      >
        <span
          id="aufSpan"
          className="absolute top-[50%] left-[50%] translate-x-[-50%]
        translate-y-[-50%]"
        >
          Second!
        </span>
      </p>
      <p
        className="relative text-center w-[10vw] h-[10vw]  border-orange-400 
        border-2 rounded-full p-10 will-change-transform "
      >
        <span
          id="kryaSpan"
          className="absolute top-[50%] left-[50%] translate-x-[-50%]
        translate-y-[-50%]"
        >
          Third!
        </span>
      </p>
    </section>
  )
}
