import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
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

  const socialIcons = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0F172A] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(18,183,106,0.15),transparent_50%)]"></div>
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
            Get in <span className="text-primary-light">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to transform education at your institution? Let's talk about how our solutions can help.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            <div className="bg-[#1E293B] p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-primary"><Mail className="h-5 w-5" /></div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-300">contact@zedtechlab.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-primary"><MapPin className="h-5 w-5" /></div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-300">100 Innovation Drive, Tech Hub, TH 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-primary"><Clock className="h-5 w-5" /></div>
                  <div>
                    <h4 className="font-bold">Office Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 9AM - 5PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1E293B] p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-[#0A0F1F] rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white text-gray-800 rounded-xl p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={2}
          >
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
