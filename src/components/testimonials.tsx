import { ScrollReveal } from "./scroll-reveal";
import { StaggeredReveal } from "./staggered-reveal";
import { Card,CardContent } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
    {
      name: "Sarah Johnson",
      pet: "Max's Mom",
      review:
        "We adopted Max from HappyTails 2 years ago, and he's been the perfect addition to our family. The staff was so helpful in finding the right match for our lifestyle.",
    },
    {
      name: "Mike Chen",
      pet: "Luna's Dad",
      review:
        "Luna came to us through HappyTails and she's brought so much joy to our home. The adoption process was smooth and the support afterwards has been amazing.",
    },
    {
      name: "Emily Rodriguez",
      pet: "Bella & Charlie's Mom",
      review:
        "Adopting Bella and Charlie together was the best decision we ever made. HappyTails made sure we were prepared for two pets and provided ongoing support.",
    },
  ]


export default function Testimonials(){

    return(
         <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-28 bg-gradient-to-br from-gray-50 to-rose-50/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <ScrollReveal animation="fadeUp">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Happy Families, Happy Tails
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Read the heartwarming stories from families who found their perfect companions through HappyTails.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <StaggeredReveal animation="fadeLeft" staggerDelay={200}>
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={testimonial.name}
                    className="bg-white hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400 group-hover:animate-pulse transition-all duration-300"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        "{testimonial.review}"
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            width={40}
                            height={40}
                            alt={testimonial.name}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-rose-500 transition-colors duration-300">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-600">{testimonial.pet}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </StaggeredReveal>
            </div>
          </div>
        </section>
    );
}