import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,183,106,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-['Space_Grotesk'] font-bold mb-6">
              Innovative <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">EdTech</span> Solutions for Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We create cutting-edge tools that transform educational experiences for institutions, educators, and learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("products")}
                className="bg-gradient-to-r from-primary to-primary/70 text-white hover:opacity-90 transition-opacity"
                size="lg"
              >
                Explore Our Products
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/5"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
          <div className="order-1 lg:order-2 relative h-64 md:h-96">
            {/* Abstract geometric shapes */}
            <motion.div 
              className="absolute w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-2xl top-0 left-1/4"
              initial={{ rotate: 0 }}
              animate={{ 
                rotate: 15,
                y: [0, -20, 0],
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                rotate: { duration: 0.8 }
              }}
            />
            <motion.div 
              className="absolute w-24 h-24 md:w-32 md:h-32 bg-blue-400/10 rounded-full top-1/4 right-1/4" 
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6, 
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute w-40 h-20 md:w-56 md:h-28 bg-slate-800/10 rounded-xl bottom-0 right-0"
              initial={{ rotate: 0 }}
              animate={{ 
                rotate: -10,
                y: [0, -20, 0],
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 },
                rotate: { duration: 0.8 }
              }}
            />
            
            {/* Center element */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-48 h-48 md:w-64 md:h-64 bg-white rounded-3xl flex items-center justify-center shadow-xl"
              initial={{ rotate: 0, x: "-50%", y: "-50%" }}
              animate={{ rotate: 45, x: "-50%", y: "-50%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div
                style={{ transform: "rotate(-45deg)" }}
                className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center"
              >
                <img 
                  src="/assets/logo trans.png" 
                  alt="Zed Tech Lab" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Tech wave decoration */}
        <div className="w-full h-24 absolute bottom-0 left-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
