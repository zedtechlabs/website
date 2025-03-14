import { motion } from "framer-motion";
import { ArrowRight, Mic, Activity, Brain, BookOpen, Glasses } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductsSection() {
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
    <section id="products" className="py-16 md:py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative tools designed for the future of education
          </p>
        </motion.div>
        
        {/* Featured Product: VizRec */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-blue-100 text-blue-600 font-medium px-4 py-1 rounded-full mb-4">
                Flagship Product
              </div>
              <div className="flex items-center mb-4">
                <img 
                  src="/assets/Vizrec.png" 
                  alt="VizRec" 
                  className="h-10 w-auto mr-3"
                />
                <h3 className="text-2xl md:text-3xl font-bold">VizRec</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                An innovative tool designed to enhance speaking skills of learners through visual feedback and AI-powered recommendations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-600"><Mic size={18} /></div>
                  <div>
                    <h4 className="font-bold">Real-time Speech Analysis</h4>
                    <p className="text-gray-600">Provides immediate feedback on pronunciation, pace, and clarity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-600"><Activity size={18} /></div>
                  <div>
                    <h4 className="font-bold">Performance Tracking</h4>
                    <p className="text-gray-600">Tracks progress over time with detailed analytics and reports.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-600"><Brain size={18} /></div>
                  <div>
                    <h4 className="font-bold">AI-powered Recommendations</h4>
                    <p className="text-gray-600">Personalized suggestions to improve speaking skills based on individual patterns.</p>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90 transition-opacity self-start"
              >
                Get VizRec for Your Institution
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 relative min-h-[400px]">
              {/* Product visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="relative w-3/4 h-3/4 bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="h-full flex flex-col">
                    <div className="border-b border-white/20 pb-3 mb-3">
                      <div className="bg-white/30 w-40 h-4 rounded"></div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-white text-center">
                        <img 
                          src="/assets/Vizrec.png" 
                          alt="VizRec" 
                          className="h-20 w-auto mx-auto mb-4"
                        />
                        <div className="font-['Space_Grotesk'] font-bold text-xl">VizRec</div>
                        <div className="text-white/70 text-sm">Enhance Speaking Skills</div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-4">
                      <div className="bg-white/30 w-20 h-3 rounded"></div>
                      <div className="bg-white/30 w-20 h-3 rounded"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Coming Soon Products */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
        >
          <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're constantly innovating to bring you more educational solutions. Here's a sneak peek at what we're working on.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <BookOpen size={24} className="text-primary" />,
              title: "LearningPath",
              description: "An adaptive learning platform that creates personalized educational journeys based on individual learning styles and progress.",
              timeline: "Coming Q4 2023",
            },
            {
              icon: <Glasses size={24} className="text-primary" />,
              title: "ImmersEd",
              description: "A virtual reality educational platform enabling immersive learning experiences across various subjects from science to history.",
              timeline: "Coming Q1 2024",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={index + 1}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/70 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                  {item.timeline}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
