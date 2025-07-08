"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Calendar, Mars,Venus} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { easeOut,easeInOut } from "framer-motion"
import { useState } from "react"

interface Pet {
  id: number
  name: string
  type: string
  breed: string
  age: string
  gender: string
  location: string
  image: string
  description: string
  status: string
}

interface PetCardProps {
  pet: Pet
  index: number
}

export function PetCard({ pet, index }: PetCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: easeOut,
      },
    },
  }

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  }

  const heartVariants = {
    liked: {
      scale: [1, 1.3, 1],
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.4,
        ease: easeInOut,
      },
    },
    unliked: {
      scale: 1,
      rotate: 0,
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: easeInOut,
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible" whileHover="hover">
      <motion.div variants={hoverVariants}>
        <Card className="overflow-hidden bg-white shadow-lg border-1 gap-2">
          <CardHeader className="p-0">
            <div className="relative  overflow-hidden">
              <motion.div variants={imageVariants}>
                <Image
                  src={pet.image || "/placeholder.svg"}
                  alt={pet.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute top-4 right-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Badge
                  variant={pet.status === "Available" ? "default" : "secondary"}
                  className={
                    pet.status === "Available"
                      ? "bg-green-500 hover:bg-green-600 shadow-lg"
                      : "bg-orange-500 hover:bg-orange-600 shadow-lg"
                  }
                >
                  {pet.status}
                </Badge>
              </motion.div>

              <motion.div
                className="absolute top-4 left-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <motion.div variants={heartVariants} animate={isLiked ? "liked" : "unliked"}>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm cursor-pointer"
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{pet.name}</CardTitle>

              <div className="space-y-2">
                <motion.div
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <span className="font-medium">{pet.breed}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center group cursor-pointer">
                    {pet.gender === "Female" ? (
                      <Venus className="mr-1 h-4 w-4 group-hover:text-pink-500 transition-colors duration-200" />
                    ) : (
                      <Mars className="mr-1 h-4 w-4 group-hover:text-blue-500 transition-colors duration-200" />
                    )}
                    <span
                      className={`transition-colors duration-200 ${
                        pet.gender === "Female"
                          ? "group-hover:text-pink-500"
                          : "group-hover:text-blue-500"
                      }`}
                    >
                      {pet.gender}
                    </span>
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{pet.age}</span>
                </motion.div>

                <motion.div
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{pet.location}</span>
                </motion.div>
              </div>
            </motion.div>
          </CardContent>

          <CardFooter className="pt-0">
            <motion.div
              className="flex gap-2 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.9 }}
            >
              <motion.div className="flex-1" variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  className="w-full bg-gradient-to-r from-red-600 to-red-700  shadow-lg cursor-pointer"
                  disabled={pet.status === "Pending"}
                >
                  {pet.status === "Available" ? "Adopt Me" : "Adoption Pending"}
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button variant="outline" size="default" className="shadow-md hover:shadow-lg bg-transparent cursor-pointer">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  )
}
