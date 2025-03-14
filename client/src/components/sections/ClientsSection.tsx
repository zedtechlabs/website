import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ClientsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

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
    <section id="clients" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by forward-thinking educational institutions
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex-shrink-0">
              {/* Client logo placeholder */}
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center h-48">
                <div className="text-center">
                  <img 
                    src="/assets/extem-logo.png" 
                    alt="Extem Education" 
                    className="h-16 md:h-20 w-auto mx-auto"
                  />
                  <div className="text-gray-500 mt-3">Learning Innovation Partner</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex gap-4 mb-6 items-center">
                <Quote className="text-primary h-6 w-6" />
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <blockquote className="text-lg text-gray-600 italic mb-6">
                Zed Tech Lab's VizRec platform has revolutionized how our students develop presentation skills. The real-time feedback and analytics have significantly improved student confidence and performance in public speaking.
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">JD</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold">Jane Doe</div>
                  <div className="text-gray-500 text-sm">Director of Educational Technology, Extem Education</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={2}
        >
          <h3 className="text-2xl font-bold mb-6">Interested in joining our client list?</h3>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-primary to-primary/70 text-white hover:opacity-90 transition-opacity"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
