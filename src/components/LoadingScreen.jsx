import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary"
        >
          <div className="text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="text-6xl font-bold font-mono text-text-accent mb-4">
                &lt;D/&gt;
              </div>
              <div className="text-xl text-text-secondary">
                Building something amazing...
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-background-tertiary rounded-full overflow-hidden mx-auto mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-text-accent to-primary-400"
              />
            </div>

            {/* Progress Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-text-secondary font-mono"
            >
              {Math.round(progress)}%
            </motion.div>

            {/* Animated Dots */}
            <div className="flex justify-center space-x-1 mt-6">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="w-2 h-2 bg-text-accent rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen