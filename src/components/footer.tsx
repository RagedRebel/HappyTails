import Link from "next/link";
import { Heart } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { StaggeredReveal } from "./staggered-reveal";

export default function footer(){

    return(
        <ScrollReveal animation="fadeUp">
        <footer className="flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-gray-50 to-rose-50/30">
          <div className="flex items-center gap-2 group">
            <Heart className="h-5 w-5 text-rose-500 group-hover:animate-pulse" />
            <p className="text-xs text-gray-600 group-hover:text-rose-500 transition-colors duration-300">
              © 2024 HappyTails Pet Adoption. All rights reserved.
            </p>
          </div>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <StaggeredReveal animation="fadeUp" staggerDelay={100}>
              {["Privacy Policy", "Terms of Service", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-rose-500 transition-all duration-300 transform hover:scale-105"
                >
                  {item}
                </Link>
              ))}
            </StaggeredReveal>
          </nav>
        </footer>
      </ScrollReveal>

    );
}