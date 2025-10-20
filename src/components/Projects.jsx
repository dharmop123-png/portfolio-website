import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Code, Smartphone, Globe, Database, Star, Calendar, Users, Eye, GitBranch, Play } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code, count: 5 },
    { id: 'web', name: 'Web Apps', icon: Globe, count: 4 },
    { id: 'ai', name: 'AI Projects', icon: Database, count: 1 }
  ]

  const projects = [
    {
      id: 1,
      title: "Green Haven – Plant Blog",
      description: "Created a blog website focused on sustainable plant care tips with responsive design using HTML, CSS, and JavaScript.",
      longDescription: "Green Haven is a blog website dedicated to sustainable plant care. Features include informative articles about plant care, gardening tips, and eco-friendly practices. The site uses responsive design principles to ensure accessibility across all devices.",
      image: "/green-haven-screenshot.png",
      hasImage: true,
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/dharmendrakr2004/Blog-Website",
      demo: "https://dharmendrakr2004.github.io/Blog-Website/",
      featured: true,
      status: "Completed",
      year: "2024",
      stars: 12,
      forks: 5,
      views: 320,
      highlights: ["Responsive Design", "Sustainable Focus", "Plant Care Tips", "SEO Friendly"]
    },
    {
      id: 2,
      title: "Raahi – AI Travel Planner",
      description: "Developed a smart travel planner that suggests destinations based on user preferences using AI tools with dynamic content.",
      longDescription: "Raahi is an AI-powered travel planning application that provides personalized destination recommendations. The app analyzes user preferences and suggests optimal travel destinations with integrated recommendation features.",
      image: "/raahi-screenshot.png",
      hasImage: true,
      category: "ai",
      technologies: ["JavaScript", "AI Tools", "HTML", "CSS"],
      github: "https://github.com/dharmendrakr2004/Raahi-Website",
      demo: "https://dharmendrakr2004.github.io/Raahi-Website/",
      featured: true,
      status: "Completed",
      year: "2024",
      stars: 18,
      forks: 7,
      views: 450,
      highlights: ["AI Recommendations", "User Preferences", "Dynamic Content", "Smart Planning"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Built and deployed a personal portfolio to showcase projects and skills using React, Tailwind CSS, and modern web technologies.",
      longDescription: "A fully responsive portfolio website showcasing modern web development practices. Features include smooth animations, project showcase, skills display, and contact form. Built with performance optimization and SEO best practices.",
      image: "/portfolio-screenshot.png",
      hasImage: true,
      category: "web",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
      github: null,
      githubMessage: "Code will be uploaded soon",
      demo: window.location.origin,
      featured: true,
      status: "Live",
      year: "2024",
      stars: 25,
      forks: 10,
      views: 680,
      highlights: ["Responsive Design", "Modern UI", "Smooth Animations", "Fast Loading"]
    },
    {
      id: 4,
      title: "Freelancing Website",
      description: "Currently building a platform for freelancers to connect with clients. Focused on front-end using React and Tailwind.",
      longDescription: "A comprehensive freelancing platform that connects freelancers with clients. The platform features user profiles, project listings, real-time communication, and secure payment integration. Built with modern React best practices and responsive design.",
      image: "/freelancing-screenshot.png",
      hasImage: true,
      category: "web",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: null,
      githubMessage: "Code will be uploaded soon",
      demo: null,
      demoMessage: "Coming Soon",
      featured: false,
      status: "In Progress",
      year: "2024",
      stars: 8,
      forks: 3,
      views: 150,
      highlights: ["Client Connection", "Modern UI", "React Frontend", "Tailwind Styling"]
    },
    {
      id: 5,
      title: "Coders Circle – Community Website",
      description: "Developing a tech community website for coders to collaborate and share resources. Backend integration planned with MongoDB and Node.js.",
      longDescription: "Coders Circle is a community platform designed for developers to collaborate, share resources, and learn together. Features include discussion forums, resource sharing, project collaboration, and learning materials. Backend integration with MongoDB for data persistence.",
      image: "/coders-circle-logo.png",
      hasImage: true,
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: null,
      githubMessage: "Code will be uploaded soon",
      demo: null,
      demoMessage: "Coming Soon",
      featured: false,
      status: "In Progress",
      year: "2024",
      stars: 14,
      forks: 6,
      views: 280,
      highlights: ["Community Platform", "Collaboration Tools", "MongoDB Backend", "Resource Sharing"]
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.2 }
    }
  }

  return (
    <section id="projects" className="py-12 md:py-20 px-4 bg-background-secondary relative z-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 hidden md:block pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl">⚡</div>
        <div className="absolute top-40 right-20 text-3xl">🚀</div>
        <div className="absolute bottom-40 left-20 text-5xl">💻</div>
        <div className="absolute bottom-20 right-10 text-4xl">🎯</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-mono text-text-accent mb-4 md:mb-6 flex items-center justify-center gap-2">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Featured Projects
              </motion.span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-text-accent"
              >
                |
              </motion.span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-primary font-semibold mb-3 md:mb-4">
              CRAFTED WITH PASSION AND PRECISION
            </p>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore a collection of my recent work, spanning web applications, mobile apps, 
              and full-stack solutions. Each project represents a unique challenge solved with 
              modern technologies and best practices.
            </p>
          </motion.div>

          {/* Enhanced Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 px-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl border-2 transition-all duration-300 relative overflow-hidden text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? 'bg-text-accent text-background-primary border-text-accent shadow-lg'
                    : 'bg-background-primary text-text-secondary border-background-tertiary hover:border-text-accent hover:text-text-accent hover:shadow-md'
                }`}
              >
                <category.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="font-medium">{category.name}</span>
                <span className={`text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
                  selectedCategory === category.id 
                    ? 'bg-background-primary/20 text-background-primary' 
                    : 'bg-text-accent/10 text-text-accent'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid with Enhanced Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`project-card relative group cursor-pointer ${
                    project.featured ? 'ring-2 ring-text-accent/30' : ''
                  }`}
                >
                  {/* Enhanced Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="absolute top-4 right-4 bg-gradient-to-r from-text-accent to-primary-500 text-background-primary px-3 py-1 rounded-full text-xs font-semibold z-10 shadow-md flex items-center gap-2"
                    >
                      <Star size={12} fill="currentColor" />
                      Featured
                    </motion.div>
                  )}

                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium z-10 ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'Completed' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {project.status}
                  </div>

                  {/* Project Image/Icon with Gradient Overlay */}
                  <div className="aspect-video bg-gradient-to-br from-background-primary to-background-tertiary flex items-center justify-center border-b border-background-tertiary relative overflow-hidden">
                    {project.hasImage ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="text-6xl"
                      >
                        {project.image}
                      </motion.div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Enhanced Project Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-text-accent transition-colors duration-300 flex items-center gap-2">
                        {project.title}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink size={16} />
                        </motion.div>
                      </h3>
                      <div className="flex items-center gap-1 text-text-accent text-sm">
                        <Calendar size={14} />
                        {project.year}
                      </div>
                    </div>
                    
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-text-primary">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.highlights.slice(0, 2).map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-1 bg-text-accent/10 text-text-accent text-xs rounded-md border border-text-accent/20"
                          >
                            {highlight}
                          </span>
                        ))}
                        {project.highlights.length > 2 && (
                          <span className="px-2 py-1 bg-background-tertiary text-text-secondary text-xs rounded-md">
                            +{project.highlights.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Technologies with Enhanced Styling */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-text-primary">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-background-primary text-text-accent text-xs rounded-full border border-background-tertiary hover:border-text-accent/50 transition-all duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Project Stats */}
                    <motion.div
                      variants={statsVariants}
                      className="flex items-center justify-between pt-4 border-t border-background-tertiary"
                    >
                      <div className="flex items-center gap-4 text-xs text-text-secondary">
                        <div className="flex items-center gap-1">
                          <Star size={12} />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitBranch size={12} />
                          {project.forks}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={12} />
                          {project.views}
                        </div>
                      </div>
                    </motion.div>

                    {/* Enhanced Links */}
                    <div className="flex gap-4 pt-4">
                      {project.github ? (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-background-primary border border-background-tertiary rounded-lg text-text-secondary hover:text-text-accent hover:border-text-accent transition-all duration-300"
                        >
                          <Github size={16} />
                          <span className="text-sm font-medium">Code</span>
                        </motion.a>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center gap-2 px-4 py-2 bg-background-primary/50 border border-background-tertiary/50 rounded-lg text-text-secondary/50 cursor-not-allowed"
                          title={project.githubMessage || "Coming soon"}
                        >
                          <Github size={16} />
                          <span className="text-sm font-medium">{project.githubMessage || "Coming Soon"}</span>
                        </motion.div>
                      )}
                      {project.demo ? (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-text-accent/10 border border-text-accent/30 rounded-lg text-text-accent hover:bg-text-accent hover:text-background-primary transition-all duration-300"
                        >
                          <Play size={16} />
                          <span className="text-sm font-medium">Demo</span>
                        </motion.a>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center gap-2 px-4 py-2 bg-text-accent/10 border border-text-accent/20 rounded-lg text-text-accent/50 cursor-not-allowed"
                          title={project.demoMessage || "Coming soon"}
                        >
                          <Play size={16} />
                          <span className="text-sm font-medium">{project.demoMessage || "Coming Soon"}</span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced More Projects Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-background-primary/50 backdrop-blur-sm border border-background-tertiary rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Interested in More Projects?
              </h3>
              <p className="text-text-secondary mb-6 max-w-md mx-auto">
                Check out my GitHub for more exciting projects and contributions to open source.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://github.com/dharmendraku"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(100, 255, 218, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Github size={20} />
                  View GitHub Profile
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Users size={20} />
                  Let's Collaborate
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
