import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Games", href: "https://cognisgames.zedtechlab.com/" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className={`fixed w-full bg-white/90 backdrop-blur-md z-50 transition-all duration-300 ${
      scrolled ? "shadow-sm" : ""
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-10 w-auto">
            <img 
              src="/assets/logo trans.png" 
              alt="Zed Tech Lab" 
              className="h-full w-auto"
            />
          </div>
          <div>
            <span className="font-['Space_Grotesk'] font-bold text-xl">Zed Tech Lab</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-100">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-medium text-gray-600 hover:text-primary transition-colors py-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
