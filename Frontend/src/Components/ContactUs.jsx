import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import {FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa'; // Added social icons, phone, and envelope
import myimage from '../assets/photo2.png'
import { SiX } from 'react-icons/si';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 保留您现有的API调用
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.status === 200) {
        setSubmitStatus({ success: true, message: '✅ Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ success: false, message: response.data.message || '❌ Failed to send message.' });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.response?.data?.message || '⚠️ An error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };



  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div id='contact' className="min-h-screen bg-[#0a192f] text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-6xl w-full mx-auto bg-[#112240] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Left Section - Image and Contact Info */}
        <div className="w-full lg:w-1/3 bg-indigo-900 p-8 md:p-10 flex flex-col justify-between">
          <div>
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden mb-8 shadow-lg border-2 border-cyan-500"
            >
              <img 
                src={myimage} 
                alt="Profile" 
                className="w-full h-full object-cover object-center" 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 text-center lg:text-left"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">WRITE AN E-MAIL</h3>
              <p className="text-gray-300 text-lg">
                <FaEnvelope className="inline-block mr-2 text-white text-md" />cpratyaksh864@gmail.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8 text-center lg:text-left"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">CALL ME</h3>
              <p className="text-gray-300 text-lg">
                <FaPhoneAlt className="inline-block mr-2 text-white text-md" />+91-6398452846
              </p> 
            </motion.div>
          </div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center lg:justify-start space-x-4 mt-8"
          >
            <motion.a 
              href="https://github.com/Pratyakshjinghala" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-white text-lg hover:bg-cyan-500 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className='text-white'/>
            </motion.a>
          
            <motion.a 
              href="https://www.linkedin.com/in/pratyaksh-chaudhary-a57b22326/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-white text-lg hover:bg-cyan-500 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedinIn className='text-white' />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full lg:w-2/3 p-8 md:p-12">
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-3">Let's Discuss Your Project</h2>
            <p className="text-gray-400 text-lg">
              Always available for freelancing if the right project comes along. <br /> Feel free to contact me.
            </p>
          </motion.div>

          {submitStatus && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mb-6 p-4 rounded-xl text-center font-medium shadow-sm ${
                submitStatus.success 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">YOUR NAME</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  className="px-4 py-3 w-full rounded-lg bg-[#0a192f] border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm text-white placeholder-gray-500 transition-all duration-300"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">YOUR EMAIL</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="px-4 py-3 w-full rounded-lg bg-[#0a192f] border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm text-white placeholder-gray-500 transition-all duration-300"
                />
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">SUBJECT</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                className="px-4 py-3 w-full rounded-lg bg-[#0a192f] border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm text-white placeholder-gray-500 transition-all duration-300"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">YOUR MESSAGE</label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message *"
                className="px-4 py-3 w-full rounded-lg bg-[#0a192f] border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm text-white placeholder-gray-500 resize-none transition-all duration-300"
              />
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ backgroundColor: "#00b2cc" }} // Brighter cyan on hover
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center py-3 px-6 rounded-lg shadow-md text-base font-semibold text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;