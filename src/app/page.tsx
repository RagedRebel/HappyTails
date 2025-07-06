"use client"


import Hero from "@/components/hero"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FeaturesCard from "@/components/features-card"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import Process from "@/components/process"
import CTA from "@/components/cta"

export default function HappyTailsLanding() {

  return (
    <>
      <Header />
      <Hero />
      <FeaturesCard />
      <Stats />
      <Testimonials />
      <Process />
      <CTA />        
      <Footer />
    </>
    
  );
}
