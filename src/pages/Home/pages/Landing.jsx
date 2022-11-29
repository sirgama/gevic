import React from 'react'
import About from '../components/About'
import ContactForm from '../components/ContactForm'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Map from '../components/Map'
import Navigation from '../components/Navigation'
import Service from '../components/Service'
import Services from '../components/Supplies'

export default function Landing() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Service />
        <CTA />
        <ContactForm />
        <Footer />
    </div>
  )
}
