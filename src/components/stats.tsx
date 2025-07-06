import { ScrollReveal } from "./scroll-reveal";
import { StaggeredReveal } from "./staggered-reveal";


export default function stats(){
    return(
        <ScrollReveal animation="slideUp">
                  <section className="w-full py-12 bg-gradient-to-r from-rose-500 to-pink-500">
                    <div className="container px-4 md:px-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <StaggeredReveal animation="fadeUp" staggerDelay={100}>
                          {[
                            { number: "500+", label: "Happy Adoptions" },
                            { number: "50+", label: "Partner Shelters" },
                            { number: "98%", label: "Success Rate" },
                            { number: "24/7", label: "Support Available" },
                          ].map((stat) => (
                            <div key={stat.label} className="space-y-2">
                              <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
                              <div className="text-rose-100">{stat.label}</div>
                            </div>
                          ))}
                        </StaggeredReveal>
                      </div>
                    </div>
                  </section>
                </ScrollReveal>
    );
}