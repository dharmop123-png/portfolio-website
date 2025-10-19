import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin, Book } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="education" className="py-20 px-4 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Education & Certifications 🎓
          </motion.h2>

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-background-primary border border-background-tertiary rounded-2xl p-8 shadow-glow"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-text-accent/20 to-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={32} className="text-text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        {education.degree}
                      </h3>
                      <p className="text-xl text-text-accent font-semibold mb-2">
                        {education.major}
                      </p>
                      <p className="text-lg text-text-secondary">
                        {education.institution}
                      </p>
                    </div>
                    <div className="bg-text-accent/10 px-4 py-2 rounded-lg">
                      <span className="text-text-accent font-mono font-semibold">
                        {education.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-6 text-text-secondary">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-text-accent" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-text-accent" />
                      <span>{education.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-text-primary text-center mb-8 flex items-center justify-center gap-3">
              <Award className="text-text-accent" />
              25+ Professional Certifications
            </h3>

            {/* Certification Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.platform}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-background-primary border border-background-tertiary rounded-xl p-6 text-center"
                >
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <div className="text-3xl font-bold text-text-accent mb-2">
                    {cert.count}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {cert.platform}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certification Topics */}
            <motion.div
              variants={itemVariants}
              className="bg-background-primary border border-background-tertiary rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Book className="text-text-accent" size={24} />
                <h4 className="text-xl font-semibold text-text-primary">
                  Certification Topics
                </h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {certificationTopics.map((topic, index) => (
                  <motion.span
                    key={topic}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-background-secondary border border-text-accent/30 rounded-lg text-text-secondary hover:text-text-accent hover:border-text-accent transition-all duration-300 cursor-default"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="mt-8 text-center"
            >
              <p className="text-lg text-text-primary font-semibold mb-2">
                📈 Continuously Learning & Growing
              </p>
              <p className="text-text-secondary">
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
