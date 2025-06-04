// import React, { useState } from "react";
// import { Send, Phone, MapPin, Mail } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState(null);

//   const validateForm = () => {
//     let tempErrors = {};
//     let isValid = true;

//     if (!formData.name.trim()) {
//       tempErrors.name = "Name is required";
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       tempErrors.email = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       tempErrors.email = "Email is invalid";
//       isValid = false;
//     }

//     if (!formData.subject.trim()) {
//       tempErrors.subject = "Subject is required";
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       tempErrors.message = "Message is required";
//       isValid = false;
//     }

//     setErrors(tempErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       setStatus("Please fill in all required fields correctly.");
//       return;
//     }

//     // Create a new FormData object to send to Web3Forms API
//     const form = new FormData();
//     form.append("access_key", "90f4b8af-e590-42b0-beaf-10b18f66a703"); // Replace with your Web3Forms access key
//     form.append("name", formData.name);
//     form.append("email", formData.email);
//     form.append("subject", formData.subject || "New Contact Form Submission");
//     form.append("message", formData.message);

//     try {
//       // Send form data to Web3Forms API
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: form,
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//         setErrors({});
//       } else {
//         setStatus(result.message || "There was an error sending your message.");
//       }
//     } catch (error) {
//       setStatus("An error occurred. Please try again.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <main
//       className="pt-20 lg:pt-[0rem] bg-[#04081A]
//  text-white min-h-screen"
//     >
//       <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Contact Info */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                   Get in Touch
//                 </h2>
//                 <p className="text-gray-300 text-lg">
//                   Have a question or want to work together? Drop me a message!
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-purple-500/10 p-3 rounded-lg">
//                     <Mail className="w-6 h-6 text-purple-400" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Email</h3>
//                     <p className="text-gray-400">althafbmeledath3@gmail.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="bg-pink-500/10 p-3 rounded-lg">
//                     <MapPin className="w-6 h-6 text-pink-400" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Location</h3>
//                     <p className="text-gray-400">Kerala, Kochi 682001</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 gap-6">
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Your Name"
//                       className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
//                         errors.name ? "border-red-500" : "border-gray-700"
//                       } focus:border-blue-500 focus:outline-none transition-colors`}
//                       value={formData.name}
//                       onChange={(e) =>
//                         setFormData({ ...formData, name: e.target.value })
//                       }
//                     />
//                     {errors.name && (
//                       <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                     )}
//                   </div>

//                   <div>
//                     <input
//                       type="email"
//                       placeholder="Your Email"
//                       className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
//                         errors.email ? "border-red-500" : "border-gray-700"
//                       } focus:border-blue-500 focus:outline-none transition-colors`}
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                     />
//                     {errors.email && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.email}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Subject"
//                       className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
//                         errors.subject ? "border-red-500" : "border-gray-700"
//                       } focus:border-blue-500 focus:outline-none transition-colors`}
//                       value={formData.subject}
//                       onChange={(e) =>
//                         setFormData({ ...formData, subject: e.target.value })
//                       }
//                     />
//                     {errors.subject && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.subject}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <textarea
//                       placeholder="Your Message"
//                       rows="4"
//                       className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
//                         errors.message ? "border-red-500" : "border-gray-700"
//                       } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
//                       value={formData.message}
//                       onChange={(e) =>
//                         setFormData({ ...formData, message: e.target.value })
//                       }
//                     ></textarea>
//                     {errors.message && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
//                 >
//                   <span>Send Message</span>
//                   <Send className="w-4 h-4" />
//                 </button>
//               </form>

//               {/* Status Message */}
//               {status && (
//                 <div
//                   className={`mt-4 text-center ${
//                     status.includes("success")
//                       ? "text-green-400"
//                       : "text-red-400"
//                   }`}
//                 >
//                   <p>{status}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

// Container animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
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

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen">
      <ReactLenis
        root
        options={{
          lerp: 0.3, // Fast scrolling, matching Projects component
          duration: 0.6, // Quick scroll transitions
          smooth: true,
          smoothTouch: true,
        }}
      >
        <main className="pt-20 lg:pt-[0rem] bg-[#04081A] text-white min-h-screen">
          <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <motion.div
                className="grid lg:grid-cols-2 gap-12 items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Contact Info */}
                <div className="space-y-8">
                  <motion.div variants={itemVariants}>
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Wanna collab?
                    </h2>
                    <p className="text-gray-300 text-lg">
                      Drop me an email, and let's create something awesome together!
                    </p>
                  </motion.div>

                  <div className="space-y-6">
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
                        <p className="text-gray-400">althafbmeledath3@gmail.com</p>
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
                  </div>

                  {/* Email Me Button */}
                  <motion.a
                    href="mailto:althafbmeledath3@gmail.com?subject=Collaboration%20Inquiry%20from%20Portfolio&body=Hello%20Althaf%20B%20Meledath,%20I%20came%20from%20your%20portfolio.%20I'd%20love%20to%20discuss%20a%20potential%20collaboration!"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold"
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

                {/* Empty column for layout balance */}
                <div className="hidden lg:block"></div>
              </motion.div>
            </div>
          </section>
        </main>
      </ReactLenis>
    </section>
  );
}