"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { PetCard } from "@/components/pet-card"
import { motion } from "framer-motion"
import { easeInOut,easeOut } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import{ supabase } from "@/lib/supabase"

interface Pet {
  id: number
  name: string
  type: string
  breed: string
  age: number
  gender: string
  location: string
  image: string
  description: string
  status: string
}
export default function Component() {
 const [pets, setPets] = useState<Pet[]>([])

 useEffect(() => {
  const fetchPets = async () => {
    const { data, error } = await supabase.from("Pets").select("*")

    if (error) {
      console.error("Error fetching pets:", error)
    } else if (data) {
      console.log("Fetched pets:", data)
      setPets(data as Pet[])
    } else {
      console.warn("No data returned from Supabase.")
    }
  }

  fetchPets()
}, [])



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  }

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const ctaVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: easeOut,
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <>
    <Header />
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={headerVariants}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Find Your Perfect Companion
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Browse through our loving pets waiting for their forever homes. Each one has a unique personality and is
            ready to bring joy to your family.
          </motion.p>
        </motion.div>

        {/* Pet Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {pets.length > 0 ? (
  pets.map((pet, index) => (
    <PetCard key={pet.id} pet={pet} index={index} />
  ))
) : (
  <p className="text-center text-gray-500 col-span-full">No pets found.</p>
)}
        </motion.div>

      </div>
    </motion.div>
    <Footer/>
    </>
  )
}
