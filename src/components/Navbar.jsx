import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  // Smooth scroll function with guaranteed menu close
  const scrollToSection = (sectionId) => {
    // First, close the menu immediately
    setIsOpen(false)
    
    // Small delay to allow menu to start closing before scroll
    setTimeout(() => {
      const target = document.querySelector(sectionId)
      if (target) {
        const navbarHeight = 80 // Approximate navbar height
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Community', href: '#community' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-background-primary/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-text-secondary hover:text-text-accent px-3 py-2 text-sm font-medium transition-colors duration-300 relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-text-accent transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Resume Button */}
          <div className="hidden md:block">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              type="button"
              className="text-text-secondary hover:text-text-accent p-2 z-50 relative focus:outline-none focus:ring-2 focus:ring-text-accent rounded touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} className="pointer-events-none" /> : <Menu size={28} className="pointer-events-none" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", display: "block" },
          closed: { opacity: 0, height: 0, transitionEnd: { display: "none" } }
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background-primary/98 backdrop-blur-md shadow-lg border-t border-background-tertiary"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              type="button"
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-text-secondary hover:text-text-accent active:text-text-accent active:bg-background-tertiary hover:bg-background-tertiary w-full text-left block px-4 py-3 text-base font-medium transition-colors duration-200 cursor-pointer rounded touch-manipulation"
            >
              {item.name}
            </motion.button>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            className="btn-primary block text-center mx-3 mt-4"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
