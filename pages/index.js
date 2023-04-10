import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import Hero from '@/components/Hero'
import Services from '@/components/services'
import Works from '@/components/works'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <Works/>
      <Testimonials/>
    </>
  )
}
