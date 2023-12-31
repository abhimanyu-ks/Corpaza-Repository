import About from '@/components/About'
import Contact from '@/components/Contact'
import Contactform from '@/components/Contactform'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavBar from '@/components/Navbar'
import SocialMedia from '@/components/SocialMedia'
import React from 'react'

export default function index() {
  return (
    <div className='bg-white'>
      
     <section id='home'>
     <NavBar/>
     </section>
      <Hero/>
      <About/>
      <section id='features'>
      <Features/>
      </section>
      <section id='pricing'>
      {/* <SocialMedia/> */}
      </section>
      <section id='contactform'>
      <Contact />
      </section>
  
      <Footer/>
      
    </div>
  )
}
