'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FlipCardProps {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
}

export default function FlipCard({ front, back, className = '' }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`relative w-full perspective-1000 ${className || 'h-64'}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setIsFlipped(!isFlipped)
        }
      }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute w-full h-full backface-hidden rounded-xl bg-transparent p-6 cursor-pointer"
          style={{ 
            transform: 'rotateY(0deg)',
          }}
        >
          {front}
        </div>
        <div
          className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-mauve-profond to-bleu-gris text-white p-6 shadow-lg cursor-pointer"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  )
}

