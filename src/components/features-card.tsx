import { Heart,Shield,Home } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { StaggeredReveal } from "./staggered-reveal";
import { Card,CardContent } from "./ui/card";

const features = [
    {
      icon: Heart,
      color: "rose",
      title: "Loving Care",
      description:
        "All our pets receive excellent veterinary care, proper nutrition, and lots of love while waiting for their forever homes.",
    },
    {
      icon: Shield,
      color: "green",
      title: "Health Guaranteed",
      description:
        "Every pet comes with complete health records, vaccinations, and a health guarantee for your peace of mind.",
    },
    {
      icon: Home,
      color: "amber",
      title: "Perfect Match",
      description:
        "Our expert team helps match you with the perfect pet based on your lifestyle, home, and preferences.",
    },
  ]

export default function featuresCard(){
    return(
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-50/30 to-transparent"></div>
                  <div className="container px-4 md:px-6 relative">
                    <ScrollReveal animation="fadeUp">
                      <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                            Why Choose HappyTails?
                          </h2>
                          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We make pet adoption simple, safe, and joyful for both pets and families.
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
        
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                      <StaggeredReveal animation="scale" staggerDelay={200}>
                        {features.map((feature, index) => (
                          <Card
                            key={feature.title}
                            className="border-rose-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
                          >
                            <CardContent className="flex flex-col items-center space-y-4 p-6">
                              <div
                                className={`rounded-full bg-${feature.color}-100 p-3 group-hover:animate-bounce transition-all duration-300`}
                              >
                                <feature.icon
                                  className={`h-6 w-6 text-${feature.color}-500 group-hover:scale-110 transition-transform duration-300`}
                                />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-500 transition-colors duration-300">
                                {feature.title}
                              </h3>
                              <p className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                {feature.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </StaggeredReveal>
                    </div>
                  </div>
                </section>
        
    );
}