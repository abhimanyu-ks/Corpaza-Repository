import About from '@/components/About'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavBar from '@/components/Navbar'
import SocialMedia from '@/components/SocialMedia'
import React from 'react'

export default function index() {
  return (
    <div className='bg-white'>
      <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <SocialMedia/>
      <Footer/>
      
    </div>
  )
}
