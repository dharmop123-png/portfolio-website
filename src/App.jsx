import React from 'react'
import ThemeProvider from './components/ThemeProvider'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Community from './components/Community'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <div className="min-h-screen bg-background-primary transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Community />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
