import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

// Container animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Child animation for individual elements
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const SocialLink = ({ href, icon: Icon, color, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    whileHover={{ y: -3, transition: { duration: 0.3 } }}
  >
    <div className={`p-3 rounded-lg ${color}`}>
      <Icon className="w-6 h-6" />
    </div>
    <span className="font-medium text-gray-300">{label}</span>
  </motion.a>
);

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen">
      <ReactLenis
        root
        options={{
          lerp: 0.3,
          duration: 0.6,
          smooth: true,
          smoothTouch: true,
        }}
      >
        <main className="pt-20 lg:pt-[0rem] bg-[#04081A] text-white min-h-screen">
          <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <motion.div
                className="grid lg:grid-cols-2 gap-12 items-start"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Left Column - Contact Info */}
                <div className="space-y-8">
                  <motion.div variants={itemVariants}>
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Let's Connect!
                    </h2>
                    <p className="text-gray-300 text-lg">
                      Feel free to reach out through any of these channels. I'd love to hear from you!
                    </p>
                  </motion.div>

                  <div className="space-y-6 mt-8">
                    <motion.div
                      className="flex items-center space-x-4"
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                    >
                      <div className="bg-purple-500/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:althafbmeledath3@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                          althafbmeledath3@gmail.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4"
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                    >
                      <div className="bg-pink-500/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-gray-400">Kerala, Kochi 682001</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4"
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                    >
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:+918289913935" className="text-gray-400 hover:text-green-400 transition-colors">
                          +91 8289913935
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Email Me Button */}
                  <motion.a
                    href="mailto:althafbmeledath3@gmail.com?subject=Collaboration%20Inquiry%20from%20Portfolio&body=Hello%20Althaf%20B%20Meledath,%20I%20came%20from%20your%20portfolio.%20I'd%20love%20to%20discuss%20a%20potential%20collaboration!"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold mt-4"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    Email Me
                  </motion.a>
                </div>

                {/* Right Column - Social Links */}
                <div className="space-y-8 pt-[5.5rem]">
                  <motion.h3 
                    variants={itemVariants}
                    className="text-2xl font-bold text-gray-200 mb-8"
                  >
                    Connect with me on
                  </motion.h3>
                  <div className="space-y-6">
                    <SocialLink
                      href="https://github.com/althafbmeledath3"
                      icon={FaGithub}
                      color="bg-gray-800/50 text-white"
                      label="GitHub"
                    />
                    <SocialLink
                      href="https://www.linkedin.com/in/althaf-b-meledath-a5171b305/"
                      icon={FaLinkedin}
                      color="bg-blue-500/10 text-blue-400"
                      label="LinkedIn"
                    />
                    <SocialLink
                      href="https://x.com/althaf_b92110"
                      icon={FaXTwitter}
                      color="bg-gray-800/50 text-white"
                      label="X (Twitter)"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </ReactLenis>
    </section>
  );
}