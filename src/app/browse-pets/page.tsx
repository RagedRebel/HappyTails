"use client"

import { Button } from "@/components/ui/button"
import { PetCard } from "@/components/pet-card"
import { motion } from "framer-motion"
import { easeInOut,easeOut } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Component() {
  const pets = [
    {
      id: 1,
      name: "Luna",
      type: "Dog",
      breed: "Golden Retriever",
      age: "2 years",
      gender: "Female",
      location: "San Francisco, CA",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Luna is a friendly and energetic golden retriever who loves playing fetch and swimming. She's great with kids and other dogs.",
      status: "Available",
    },
    {
      id: 2,
      name: "Whiskers",
      type: "Cat",
      breed: "Maine Coon",
      age: "3 years",
      gender: "Male",
      location: "Los Angeles, CA",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Whiskers is a gentle giant who enjoys lounging in sunny spots and getting belly rubs. He's perfect for a quiet home.",
      status: "Available",
    },
    {
      id: 3,
      name: "Buddy",
      type: "Dog",
      breed: "Labrador Mix",
      age: "4 years",
      gender: "Male",
      location: "Austin, TX",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Buddy is a loyal companion who loves long walks and car rides. He's well-trained and ready for his forever home.",
      status: "Pending",
    },
    {
      id: 4,
      name: "Mittens",
      type: "Cat",
      breed: "Siamese",
      age: "1 year",
      gender: "Female",
      location: "Seattle, WA",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Mittens is a playful kitten with striking blue eyes. She loves interactive toys and cuddling with her humans.",
      status: "Available",
    },
    {
      id: 5,
      name: "Max",
      type: "Dog",
      breed: "German Shepherd",
      age: "5 years",
      gender: "Male",
      location: "Denver, CO",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Max is a protective and intelligent dog who would make an excellent guard dog. He needs an experienced owner.",
      status: "Available",
    },
    {
      id: 6,
      name: "Princess",
      type: "Cat",
      breed: "Persian",
      age: "2 years",
      gender: "Female",
      location: "Miami, FL",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Princess is a beautiful long-haired cat who enjoys being pampered. She prefers a calm environment with gentle handling.",
      status: "Available",
    },
  ]

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
          {pets.map((pet, index) => (
            <PetCard key={pet.id} pet={pet} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={ctaVariants}>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {"Don't see your perfect match?"}
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            We get new pets regularly. Sign up for notifications when pets matching your preferences become available.
          </motion.p>
          <motion.div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg text-white px-8 py-3 text-lg cursor-pointer hover:scale-105 duration-300"
            >
              Get Notified
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    <Footer/>
    </>
  )
}
