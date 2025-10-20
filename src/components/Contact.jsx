import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Submission')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:dharmop123@gmail.com?subject=${subject}&body=${body}`
    
    // Open user's email client
    window.location.href = mailtoLink
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'dharmop123@gmail.com',
      href: 'mailto:dharmop123@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9643974952',
      href: 'tel:+919643974952'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Greater Noida, India',
      href: 'https://maps.google.com'
    }
  ]

  const socialLinks = [
    { icon: Github, href: "https://dharmendrakr2004.github.io", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dharmendra-kumar-143bb6334", label: "LinkedIn" },
    { icon: Twitter, href: "https://chat.whatsapp.com/JuNaszcCNQcHU1pKfEN8Lh", label: "WhatsApp Community" },
    { icon: Instagram, href: "https://instagram.com/dharmendra", label: "Instagram" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="py-12 md:py-20 px-4 bg-background-secondary relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-mono text-text-accent text-center mb-12 flex items-center justify-center gap-2">
            <span>Get In Touch</span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-text-accent"
            >
              |
            </motion.span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <p className="text-xl text-text-primary font-semibold mb-4">
              LET'S WORK TOGETHER
            </p>
            <p className="text-text-secondary max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, creative projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 bg-background-primary border border-background-tertiary rounded-lg hover:border-text-accent transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-text-accent/10 rounded-full flex items-center justify-center group-hover:bg-text-accent/20 transition-colors duration-300">
                        <info.icon className="text-text-accent" size={20} />
                      </div>
                      <div>
                        <p className="text-text-secondary text-sm">
                          {info.title}
                        </p>
                        <p className="text-text-primary font-medium">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-background-primary border border-background-tertiary flex items-center justify-center text-text-secondary hover:text-text-accent hover:border-text-accent transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <motion.div
                variants={itemVariants}
                className="bg-background-primary border border-background-tertiary rounded-lg p-6"
              >
                <h4 className="text-lg font-semibold text-text-primary mb-3">
                  Quick Info
                </h4>
                <div className="space-y-2 text-text-secondary">
                  <p>🕒 Response Time: Usually within 24 hours</p>
                  <p>🌍 Timezone: IST (GMT+5:30)</p>
                  <p>💼 Status: Open for opportunities</p>
                  <p>📍 Available for: Remote & On-site work</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-background-primary border border-background-tertiary rounded-lg p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-text-primary font-medium mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background-secondary border border-background-tertiary rounded-lg text-text-primary placeholder-text-secondary focus:border-text-accent focus:outline-none transition-colors duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-text-primary font-medium mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background-secondary border border-background-tertiary rounded-lg text-text-primary placeholder-text-secondary focus:border-text-accent focus:outline-none transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-text-primary font-medium mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background-secondary border border-background-tertiary rounded-lg text-text-primary placeholder-text-secondary focus:border-text-accent focus:outline-none transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-text-primary font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background-secondary border border-background-tertiary rounded-lg text-text-primary placeholder-text-secondary focus:border-text-accent focus:outline-none transition-colors duration-300 resize-vertical"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
