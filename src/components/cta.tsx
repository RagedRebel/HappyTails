import { ScrollReveal } from "./scroll-reveal";
import { Button } from "./ui/button";

export default function CTA(){
    return(
        <ScrollReveal animation="scale">
                  <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10 animate-pulse"></div>
                    <div className="container px-4 md:px-6 relative">
                      <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                            Ready to Find Your New Best Friend?
                          </h2>
                          <p className="max-w-[600px] text-rose-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Browse our available pets today and take the first step towards bringing home your perfect
                            companion.
                          </p>
                        </div>
                        <ScrollReveal animation="fadeUp" delay={300}>
                          <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button
                              size="lg"
                              className="bg-white text-rose-500 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                            >
                              <span className="group-hover:animate-pulse">Browse Available Pets</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="lg"
                              className="border-white text-white hover:bg-white hover:text-rose-500 bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                            >
                              Schedule a Visit
                            </Button>
                          </div>
                        </ScrollReveal>
                      </div>
                    </div>
                  </section>
                </ScrollReveal>
        
        
    );
}