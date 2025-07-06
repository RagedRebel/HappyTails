import { ScrollReveal } from "./scroll-reveal";
import { StaggeredReveal } from "./staggered-reveal";

export default function Process(){
    return(
         <ScrollReveal animation="fadeUp">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <ScrollReveal animation="fadeUp">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-4">
                    Simple Adoption Process
                  </h2>
                  <p className="text-gray-600 md:text-xl max-w-2xl mx-auto">
                    Our streamlined process makes it easy to find and adopt your perfect companion
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-4 gap-8">
                <StaggeredReveal animation="slideUp" staggerDelay={150}>
                  {[
                    { step: "1", title: "Browse Pets", description: "Explore our available pets online" },
                    { step: "2", title: "Meet & Greet", description: "Schedule a visit to meet your potential pet" },
                    { step: "3", title: "Application", description: "Complete our simple adoption application" },
                    { step: "4", title: "Take Home", description: "Welcome your new family member home!" },
                  ].map((process) => (
                    <div key={process.step} className="text-center group">
                      <div className="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {process.step}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-rose-500 transition-colors duration-300">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{process.description}</p>
                    </div>
                  ))}
                </StaggeredReveal>
              </div>
            </div>
          </section>
        </ScrollReveal>
    );
}