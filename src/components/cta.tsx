import { time } from "framer-motion/m";
import { ScrollReveal } from "./scroll-reveal";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { motion, useTime } from "framer-motion";

export default function CTA(){
  const router=useRouter();
    return(
        <ScrollReveal animation="scale">
                  <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 overflow-hidden">
                    <div className="container px-4 md:px-6">
                      <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                          <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white"  whileHover={{scale:1.1,transitionDuration:300}}>
                            Ready to Find Your New Best Friend?
                          </motion.h2>
                          <p className="text-rose-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Browse our available pets today and take the first step towards  <br /> bringing home your perfect
                            companion.
                          </p>
                        </div>
                        <ScrollReveal animation="fadeUp" delay={300}>
                          <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button
                              onClick={()=> router.push("/browse-pets") }
                              variant="outline"
                              size="lg"
                              className="border-white text-white hover:bg-white hover:text-rose-500 bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer"
                            >
                              Browse Pets
                            </Button>
                            <Button
                              variant="outline"
                              size="lg"
                              className="border-white text-white hover:bg-white hover:text-rose-500 bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer"
                            >
                              Schedule Visit
                            </Button>
                          </div>
                        </ScrollReveal>
                      </div>
                    </div>
                  </section>
                </ScrollReveal>
        
        
    );
}