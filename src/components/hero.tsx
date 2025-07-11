import { Button } from "./ui/button";
import { useState,useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Shield,Heart } from "lucide-react";

export default function Hero(){

  const router=useRouter();
    const [isVisible, setIsVisible] = useState(false)
      useEffect(() => {
        setIsVisible(true)
         }, [])
    return(

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div
                className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 animate-fade-in">
                    Find Your Perfect{" "}
                    <span className="text-rose-500 inline-block hover:scale-105 transition-transform duration-300">
                      Furry Friend
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl animate-fade-in animation-delay-300">
                    Give a loving home to pets in need. Browse hundreds of adorable dogs, cats, and other animals
                    waiting for their forever families.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in animation-delay-500">
                  <Button
                    onClick={()=> router.push("/browse-pets") }
                    size="lg"
                    className="bg-rose-500 hover:bg-rose-600 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                  >
                    <span className="group-hover:animate-pulse">Browse Available Pets</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-rose-500 text-rose-500 hover:bg-rose-50 bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer"
                  >
                    Learn About Adoption
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 animate-fade-in animation-delay-700">
                  <div className="flex items-center gap-1 transition hover:scale-110 duration-500">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>
                      500+ Happy Adoptions
                    </span>
                  </div>
                  <div className="flex items-center gap-1 transition hover:scale-110 duration-500 ">
                    <Shield className="h-4 w-4 text-green-500 " />
                    <span >Health Guaranteed</span>
                  </div>
                </div>
              </div>
              <div
                className={`grid grid-cols-2 gap-4 lg:order-last transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <div className="space-y-4">
                  <div className="transform hover:scale-105 transition-all duration-500 hover:rotate-1">
                    <Image
                      src="/cat.jpg"
                      width={250}
                      height={300}
                      alt="Adorable golden retriever puppy"
                      className="rounded-2xl object-cover w-full h-[300px] shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <div className="transform hover:scale-105 transition-all duration-500 hover:-rotate-1 animation-delay-200">
                    <Image
                      src="/dog1.jpg"
                      width={250}
                      height={200}
                      alt="Cute tabby kitten"
                      className="rounded-2xl object-cover w-full h-[200px] shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="transform hover:scale-105 transition-all duration-500 hover:rotate-1 animation-delay-400">
                    <Image
                      src="/dog2.jpeg"
                      width={250}
                      height={300}
                      alt="Playful beagle dog"
                      className="rounded-2xl object-cover w-full h-[300px] shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <div className="transform hover:scale-105 transition-all duration-500 hover:-rotate-1 animation-delay-600">
                    <Image
                      src="/rabbit.jpg"
                      width={250}
                      height={300}
                      alt="Beautiful persian cat"
                      className="rounded-2xl object-cover w-full h-[300px] shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}