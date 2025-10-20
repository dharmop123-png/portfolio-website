import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Users, Target, TrendingUp, Linkedin, MessageCircle, Bell, Code, Briefcase, BookOpen, Rocket, UserPlus, Award } from 'lucide-react'

const Community = () => {
  const ref = useRef(null)

  const stats = [
    { icon: Users, number: "1,200+", label: "Active Members", color: "from-blue-500 to-cyan-500" },
    { icon: Rocket, number: "600+", label: "Daily Active Users", color: "from-green-500 to-emerald-500" },
    { icon: Target, number: "8+", label: "Active Groups", color: "from-purple-500 to-pink-500" },
    { icon: Award, number: "50+", label: "Free Resources", color: "from-orange-500 to-red-500" }
  ]

  const groups = [
    {
      name: "Hackathon Alerts",
      icon: Bell,
      emoji: "🚨",
      description: "Stay updated with the latest hackathon opportunities and tech events",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "LinkedIn Network",
      icon: Linkedin,
      emoji: "🌐",
      description: "Connect professionally and expand your network with fellow developers",
      color: "from-blue-600 to-blue-400"
    },
    {
      name: "General & DSA Discussion",
      icon: Code,
      emoji: "🧠",
      description: "Discuss coding problems, algorithms, and data structures together",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Project Discussion",
      icon: Rocket,
      emoji: "👨‍💻",
      description: "Collaborate on projects and build amazing things together",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Opportunities",
      icon: Briefcase,
      emoji: "🎓",
      description: "Find internships, jobs, and learning programs curated for you",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Coding Notes & Roadmaps",
      icon: BookOpen,
      emoji: "🔥",
      description: "Access study materials, notes, and curated learning roadmaps",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const founders = [
    {
      name: "Dharmendra Kumar",
      role: "Founder",
      image: "/dharmendra-photo.jpg",
      hasImage: true
    },
    {
      name: "Ujjwal Shukla",
      role: "Co-Founder",
      image: "/ujjwal-photo.jpg",
      hasImage: true
    }
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

  return (
    <section id="community" className="py-12 md:py-20 px-4 bg-background-primary relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 md:mb-6"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background-tertiary hover:border-green-500 transition-all duration-300 p-4 mx-auto overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src="/coders-circle-logo.png" 
                  alt="Coders Circle Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-green-500', 'to-orange-500');
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <Code size={48} className="text-white hidden md:w-16 md:h-16" strokeWidth={2.5} />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-text-accent mb-3 md:mb-4">
              Coders Circle 🚀
            </h2>
            <p className="text-lg sm:text-xl text-text-accent font-semibold mb-3 md:mb-4 px-4">
              A Growing Tech Community Built by Students for Students
            </p>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
              Connect, collaborate, and grow with passionate learners and developers. 
              We help students through free resources, hackathons, and learning opportunities.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-16"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-background-secondary border border-background-tertiary hover:border-green-500 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 text-center transition-all duration-300"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                  <stat.icon size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-text-accent mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* About Section */}
          <motion.div
            variants={itemVariants}
            className="bg-background-secondary border border-background-tertiary hover:border-green-500 rounded-xl md:rounded-2xl p-6 md:p-8 mb-12 md:mb-16 transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 md:mb-6 flex items-center gap-3">
              <Target className="text-text-accent w-5 h-5 sm:w-6 sm:h-6" />
              About Us
            </h3>
            <div className="space-y-3 md:space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed">
              <p>
                Coders Circle is a growing tech community built by students for students. 
                Our goal is to connect passionate learners and developers from different colleges, 
                helping each other grow through collaboration, projects, hackathons, and learning resources.
              </p>
              <p>
                Founded recently, we've already grown to <span className="text-text-accent font-semibold">1,130+ members</span> in 
                just <span className="text-text-accent font-semibold">20-30 days</span>! As a community led by 3rd semester students, 
                we're still learning and growing together with our members.
              </p>
              <p className="text-text-accent font-semibold">
                Our main goal is to help students by providing free resources and courses through our community.
              </p>
            </div>
          </motion.div>

          {/* Groups Section */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary text-center mb-6 md:mb-8">
              Our Active Groups
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {groups.map((group) => (
                <motion.div
                  key={group.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-background-secondary border border-background-tertiary hover:border-green-500 rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${group.color} rounded-xl flex items-center justify-center text-xl md:text-2xl flex-shrink-0`}>
                      {group.emoji}
                    </div>
                    <h4 className="text-base md:text-lg font-semibold text-text-primary">
                      {group.name}
                    </h4>
                  </div>
                  <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                    {group.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Founders Section */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary text-center mb-6 md:mb-8">
              Meet the Founders
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
              {founders.map((founder) => (
                <motion.div
                  key={founder.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-background-secondary border border-background-tertiary hover:border-green-500 rounded-xl md:rounded-2xl p-6 md:p-8 text-center transition-all duration-300"
                >
                  {founder.hasImage ? (
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden border-4 border-green-500/30 hover:border-green-500 transition-all duration-300">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="text-4xl sm:text-6xl mb-3 md:mb-4">{founder.image}</div>
                  )}
                  <h4 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
                    {founder.name}
                  </h4>
                  <p className="text-sm sm:text-base text-text-accent font-semibold">
                    {founder.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-text-accent/10 to-primary-500/10 border border-text-accent/30 hover:border-green-500 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center transition-all duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 md:mb-4">
              Join Our Community Today! 🎉
            </h3>
            <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Connect with 1,130+ passionate developers, access free resources, 
              and grow your skills together with us!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center px-4">
              <motion.a
                href="https://chat.whatsapp.com/JuNaszcCNQcHU1pKfEN8Lh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                Join WhatsApp Community
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/coder-s-guild"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
                Follow on LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div variants={itemVariants} className="mt-12 md:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary text-center mb-6 md:mb-8">
              What You'll Get
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: "📚", title: "Free Resources", description: "Access to courses, notes, and study materials" },
                { icon: "🤝", title: "Networking", description: "Connect with developers from different colleges" },
                { icon: "💡", title: "Project Collaboration", description: "Work on real projects with team members" },
                { icon: "🏆", title: "Hackathon Updates", description: "Never miss important tech events and competitions" },
                { icon: "💼", title: "Career Opportunities", description: "Get updates on internships and job openings" },
                { icon: "🎓", title: "Learning Roadmaps", description: "Curated paths to master different technologies" }
              ].map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-background-secondary border border-background-tertiary hover:border-green-500 rounded-xl p-4 md:p-6 flex items-start gap-3 md:gap-4 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-1 md:mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-text-secondary text-xs sm:text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community
