import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/dharmendraku", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/dharmendra-kumar", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/dharmendra", label: "Twitter" },
    { icon: Mail, href: "mailto:dharmop123@gmail.com", label: "Email" },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background-primary border-t border-background-tertiary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <a 
                href="#home" 
                className="text-2xl font-bold font-mono text-text-accent"
              >
                &lt;Dharmendra.dev/&gt;
              </a>
            </motion.div>
            <p className="text-text-secondary max-w-sm">
              Passionate Full Stack Developer creating innovative solutions 
              and building amazing web experiences with modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-background-secondary border border-background-tertiary flex items-center justify-center text-text-secondary hover:text-text-accent hover:border-text-accent transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="text-text-secondary hover:text-text-accent transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Contact Info
            </h3>
            <div className="space-y-2 text-text-secondary">
              <p>📧 dharmop123@gmail.com</p>
              <p>📱 +91 9643974952</p>
              <p>📍 Greater Noida, India</p>
              <p>🌐 Available for remote work</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background-tertiary mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-text-secondary">
            <span>&copy; {currentYear} Dharmendra Kumar. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-red-500 fill-current" size={16} />
            </motion.div>
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-text-accent text-background-primary flex items-center justify-center hover:bg-opacity-80 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6 pt-6 border-t border-background-tertiary">
          <p className="text-text-secondary text-sm">
            Thank you for visiting my portfolio! Connect with me for exciting opportunities.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
