import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const ref = useRef(null)

  const skillsData = [
    { name: "HTML", percentage: 85, color: "from-orange-500 to-red-500" },
    { name: "CSS", percentage: 80, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", percentage: 65, color: "from-yellow-500 to-orange-500" },
    { name: "React", percentage: 60, color: "from-cyan-500 to-blue-500" },
    { name: "Tailwind CSS", percentage: 75, color: "from-teal-500 to-cyan-500" },
    { name: "MongoDB", percentage: 60, color: "from-green-600 to-green-400" },
    { name: "Python", percentage: 55, color: "from-blue-600 to-yellow-400" },
    { name: "Java", percentage: 70, color: "from-red-600 to-orange-500" },
    { name: "C", percentage: 65, color: "from-blue-700 to-blue-500" },
    { name: "SQL", percentage: 60, color: "from-purple-600 to-pink-500" },
    { name: "Git & GitHub", percentage: 75, color: "from-gray-600 to-gray-400" }
  ]

  const techStack = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="py-12 md:py-20 px-4 bg-background-primary relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl font-bold font-mono text-text-accent text-center mb-12"
          >
            <div className="flex items-center justify-center gap-0">
              {"Skills & Abilities".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.3,
                  delay: "Skills & Abilities".length * 0.1 + 0.3
                }}
                className="text-text-accent ml-1"
              >
                |
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mb-8 md:mb-12 px-4"
          >
            <p className="text-base sm:text-lg md:text-xl text-text-primary font-semibold mb-3 md:mb-4">
              PASSIONATE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary">
              Currently learning Full-Stack Development | 35+ Certifications Completed
            </p>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            variants={itemVariants}
            className="mb-12 md:mb-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary text-center mb-6 md:mb-8">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-background-secondary border border-background-tertiary rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:border-text-accent transition-all duration-300 group-hover:shadow-glow">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-text-secondary group-hover:text-text-accent transition-colors duration-300 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Progress Bars */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary text-center mb-6 md:mb-8">
              Proficiency Levels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-text-primary font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm sm:text-base text-text-accent font-mono">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-background-tertiary rounded-full h-2.5 sm:h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.2,
                        ease: "easeOut"
                      }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute right-0 top-0 w-2 h-full bg-white/30 rounded-full"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Points */}
          <motion.div
            variants={itemVariants}
            className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {[
              {
                icon: "⚡",
                title: "Coding & Problem Solving",
                description: "Strong foundation in C and Java with expertise in Data Structures & Algorithms. Full stack development using React, Node.js, Express, and MongoDB."
              },
              {
                icon: "🏗️",
                title: "Real-World Projects",
                description: "Developed multiple production-ready projects including Green Haven, Raahi travel platform, and a complete freelancing marketplace."
              },
              {
                icon: "🔗",
                title: "Community Builder & Networking",
                description: "Founded Coders Circle, a thriving tech community with 1,200+ members. Connecting developers and fostering collaboration."
              }
            ].map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="bg-background-secondary border border-background-tertiary hover:border-text-accent rounded-lg p-5 md:p-6 text-center transition-all duration-300 hover:shadow-glow cursor-pointer group"
              >
                <motion.div 
                  className="text-3xl sm:text-4xl mb-3 md:mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {point.icon}
                </motion.div>
                <h4 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-text-accent mb-2 md:mb-3 transition-colors duration-300">
                  {point.title}
                </h4>
                <p className="text-sm sm:text-base text-text-secondary">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
