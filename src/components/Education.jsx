import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin, Book } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)

  const education = {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science Engineering",
    institution: "Lloyd Institute of Engineering and Technology",
    location: "Greater Noida, India",
    duration: "2024 - 2028",
    status: "Currently Pursuing"
  }

  const certifications = [
    { platform: "Web Development", count: "10+", icon: "🌐" },
    { platform: "Programming Languages", count: "8+", icon: "💻" },
    { platform: "Data Structures & Algorithms", count: "12+", icon: "📊" },
    { platform: "Problem Solving", count: "5+", icon: "🧩" }
  ]

  const certificationTopics = [
    "Java Programming",
    "Python Development",
    "Web Development",
    "Data Structures & Algorithms",
    "Front-end Development",
    "Back-end Development",
    "Database Management",
    "Git & Version Control"
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
    <section id="education" className="py-12 md:py-20 px-4 bg-background-secondary relative z-10">
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
            className="text-xl md:text-2xl font-bold font-mono text-text-accent text-center mb-12"
          >
            <div className="flex items-center justify-center gap-0">
              {"Education & Certifications".split("").map((char, index) => (
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
                  delay: "Education & Certifications".length * 0.1 + 0.3
                }}
                className="text-text-accent ml-1"
              >
                |
              </motion.span>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="mb-12 md:mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-background-primary border border-background-tertiary rounded-xl md:rounded-2xl p-6 md:p-8 shadow-glow"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-text-accent/20 to-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-text-accent sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                        {education.degree}
                      </h3>
                      <p className="text-lg sm:text-xl text-text-accent font-semibold mb-2">
                        {education.major}
                      </p>
                      <p className="text-base sm:text-lg text-text-secondary">
                        {education.institution}
                      </p>
                    </div>
                    <div className="bg-text-accent/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg inline-block w-fit">
                      <span className="text-sm sm:text-base text-text-accent font-mono font-semibold">
                        {education.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm sm:text-base text-text-secondary">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-text-accent sm:w-[18px] sm:h-[18px]" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-text-accent sm:w-[18px] sm:h-[18px]" />
                      <span>{education.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary text-center mb-6 md:mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <Award className="text-text-accent w-6 h-6 sm:w-7 sm:h-7" />
              <span>25+ Professional Certifications</span>
            </h3>

            {/* Certification Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.platform}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-background-primary border border-background-tertiary hover:border-text-accent rounded-xl p-4 sm:p-5 md:p-6 text-center transition-all duration-300 hover:shadow-glow cursor-pointer group"
                >
                  <motion.div 
                    className="text-3xl sm:text-4xl mb-2 sm:mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <div className="text-2xl sm:text-3xl font-bold text-text-accent mb-1 sm:mb-2">
                    {cert.count}
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary group-hover:text-text-accent transition-colors duration-300">
                    {cert.platform}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certification Topics */}
            <motion.div
              variants={itemVariants}
              className="bg-background-primary border border-background-tertiary rounded-xl md:rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Book className="text-text-accent w-5 h-5 sm:w-6 sm:h-6" size={24} />
                <h4 className="text-lg sm:text-xl font-semibold text-text-primary">
                  Certification Topics
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {certificationTopics.map((topic, index) => (
                  <motion.span
                    key={topic}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background-secondary border border-text-accent/30 rounded-lg text-xs sm:text-sm text-text-secondary hover:text-text-accent hover:border-text-accent transition-all duration-300 cursor-default"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="mt-6 md:mt-8 text-center px-4"
            >
              <p className="text-base sm:text-lg text-text-primary font-semibold mb-2">
                📈 Continuously Learning & Growing
              </p>
              <p className="text-sm sm:text-base text-text-secondary">
                Actively participating in online courses and earning certifications to stay updated with the latest technologies
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
