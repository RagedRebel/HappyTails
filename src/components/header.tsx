import Link from "next/link";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <Link href="/" className="flex items-center justify-center group">
        <Heart className="h-8 w-8 text-rose-500 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse" />
        <span className="ml-2 text-2xl font-bold text-gray-900 group-hover:text-rose-500 transition-colors duration-300">
          HappyTails
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {["Browse Pets", "About Us", "Success Stories", "Contact"].map((item, index) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-sm font-medium hover:text-rose-500 transition-all duration-300 hover:scale-105 relative group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </header>
  );
}