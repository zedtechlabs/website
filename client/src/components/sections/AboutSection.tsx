import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function AboutSection() {
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

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
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
            About <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Zed Tech Lab</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming education through innovative technology solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "lightbulb",
              title: "Innovation",
              description: "We push the boundaries of what's possible in educational technology, creating tools that inspire learning.",
            },
            {
              icon: "users",
              title: "Collaboration",
              description: "We work closely with educational institutions to develop solutions that address real-world challenges.",
            },
            {
              icon: "rocket",
              title: "Impact",
              description: "Our solutions are designed to create meaningful educational outcomes and transform learning experiences.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={index + 1}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                {item.icon === "lightbulb" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
                {item.icon === "users" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
                {item.icon === "rocket" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At Zed Tech Lab, we're on a mission to revolutionize education through innovative technology. We believe that the right tools can transform how students learn and educators teach.
              </p>
              <p className="text-gray-600">
                We develop cutting-edge solutions for edtech companies, schools, and educational institutions that enhance learning experiences and improve educational outcomes.
              </p>
            </motion.div>
            <motion.div 
              className="bg-slate-800/5 p-8 rounded-2xl relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-primary to-primary/70 rounded-lg"></div>
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Research-backed Design",
                    description: "We ground our solutions in educational research and best practices.",
                  },
                  {
                    title: "User-Centered Development",
                    description: "We build with educators and learners in mind at every step.",
                  },
                  {
                    title: "Continuous Improvement",
                    description: "We iterate based on feedback to create better educational experiences.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-4 mt-1 text-primary"><Check size={18} /></div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
