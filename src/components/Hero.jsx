import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram, ChevronDown, Download, ExternalLink, MapPin, Calendar, Coffee } from 'lucide-react'

const texts = [
  "Full Stack Developer",
  "Web Developer",
  "Front-end Developer", 
  "Problem Solver",
  "Tech Enthusiast"
]

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentFullText = texts[currentIndex]

    if (!isDeleting && charIndex < currentFullText.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typeSpeed)
      return () => clearTimeout(timer)
    } else if (isDeleting && charIndex > 0) {
      const timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, typeSpeed)
      return () => clearTimeout(timer)
    } else if (!isDeleting && charIndex === currentFullText.length) {
      const timer = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(timer)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setCurrentIndex((currentIndex + 1) % texts.length)
    }
  }, [charIndex, isDeleting, currentIndex])

  const socialLinks = [
    { icon: Github, href: "https://github.com/dharmop123-png", label: "GitHub", color: "#333" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dharmendra-kumar-143bb6334", label: "LinkedIn", color: "#0077B5" },
    { icon: Mail, href: "#contact", label: "Email", color: "#EA4335", scrollTo: true },
    { icon: Instagram, href: "https://www.instagram.com/dh4rm_04?igsh=dmVkaDFnNXQ0enNo", label: "Instagram", color: "#E4405F" },
  ]

  const stats = [
    { number: "1,200+", label: "Community Members", icon: "👥" },
    { number: "35+", label: "Certifications", icon: "🏅" },
    { number: "5+", label: "Live Projects", icon: "🚀" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-40 sm:pb-32 md:pb-24 lg:pb-20 px-4 overflow-hidden z-0">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-text-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-text-accent font-mono text-lg flex items-center gap-2">
              <MapPin size={18} />
              Hi There, I'm
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="text-text-primary bg-gradient-to-r from-text-primary to-text-accent bg-clip-text text-transparent">
              Dharmendra
            </span>
            <br />
            <span className="text-text-primary">Kumar</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <div className="text-lg sm:text-xl md:text-3xl text-text-secondary font-mono min-h-[2.5rem] md:min-h-[3rem] flex items-center flex-wrap">
              <span className="text-text-accent mr-2">I'm a </span>
              <span className="text-text-accent font-bold">{currentText}</span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-text-accent ml-1"
              >
                |
              </motion.span>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-text-secondary mb-6 md:mb-8 max-w-lg leading-relaxed">
            Computer Science Engineering student passionate about building innovative web solutions. 
            Founder of Coders Circle community (1,200+ members). Specializing in full-stack development 
            with expertise in React, Tailwind CSS, and modern web technologies.
          </motion.p>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 md:mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-2 sm:p-4 bg-background-secondary/50 backdrop-blur-sm rounded-lg border border-text-accent/10"
              >
                <div className="text-xl sm:text-2xl mb-1">{stat.icon}</div>
                <div className="text-base sm:text-xl font-bold text-text-accent">{stat.number}</div>
                <div className="text-xs sm:text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
            <motion.a
              href="/Dharmendra_Kumar_Resume.pdf"
              download="Dharmendra_Kumar_Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(100, 255, 218, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 text-sm sm:text-base"
            >
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2 text-sm sm:text-base"
            >
              <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
              View My Work
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-3 md:gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.scrollTo ? "_self" : "_blank"}
                rel={social.scrollTo ? undefined : "noopener noreferrer"}
                onClick={social.scrollTo ? (e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } : undefined}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  boxShadow: `0 10px 25px ${social.color}30`
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="w-12 h-12 rounded-full bg-background-secondary border border-background-tertiary flex items-center justify-center text-text-secondary hover:text-text-accent hover:border-text-accent transition-all duration-300 group"
                aria-label={social.label}
                style={{ '--hover-color': social.color }}
              >
                <social.icon size={20} className="group-hover:text-[var(--hover-color)]" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Enhanced Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative flex items-center justify-center mt-8 lg:mt-0"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-80 md:h-80 mx-auto">
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-text-accent/20"
            ></motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-text-accent/10"
            ></motion.div>
            
            {/* Central Avatar with Glow Effect */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              variants={floatingVariants}
              animate="animate"
              className="absolute inset-12 sm:inset-14 rounded-full bg-gradient-to-br from-text-accent/20 to-primary-500/20 backdrop-blur-sm flex items-center justify-center shadow-2xl"
              style={{
                boxShadow: "0 0 50px rgba(100, 255, 218, 0.3)"
              }}
            >
              <div className="text-5xl sm:text-6xl">👨‍💻</div>
            </motion.div>

            {/* Enhanced Floating Tech Icons */}
            {[
              { icon: "⚛️", delay: 0, angle: 0, label: "React" },
              { icon: "🚀", delay: 1, angle: 72, label: "Node.js" },
              { icon: "⚡", delay: 2, angle: 144, label: "JavaScript" },
              { icon: "🎯", delay: 3, angle: 216, label: "TypeScript" },
              { icon: "🔥", delay: 4, angle: 288, label: "Next.js" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -12, 0],
                  rotate: [0, 5, -5, 0]
                }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -10,
                  boxShadow: "0 10px 25px rgba(100, 255, 218, 0.4)"
                }}
                transition={{
                  duration: 2,
                  delay: item.delay * 0.2,
                  y: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute w-14 h-14 sm:w-16 sm:h-16 bg-background-secondary border border-text-accent/30 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-glow cursor-pointer group"
                style={{
                  top: `${50 + 47 * Math.sin((item.angle * Math.PI) / 180)}%`,
                  left: `${50 + 47 * Math.cos((item.angle * Math.PI) / 180)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                title={item.label}
              >
                {item.icon}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background-primary px-2 py-1 rounded text-xs text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </div>
              </motion.div>
            ))}

            {/* Additional Decorative Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-4 right-4 w-3 h-3 bg-text-accent rounded-full"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-6 left-6 w-2 h-2 bg-primary-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-text-secondary hover:text-text-accent transition-colors duration-300"
        >
          <span className="text-xs sm:text-sm mb-2 font-mono">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} className="sm:w-6 sm:h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
