'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile quand on change de page
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(path)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-white/70 shadow-lg' : 'backdrop-blur-md bg-white/50'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              animate={{
                textShadow: [
                  '0 0 10px rgba(107, 70, 193, 0.5)',
                  '0 0 20px rgba(107, 70, 193, 0.8)',
                  '0 0 10px rgba(107, 70, 193, 0.5)',
                ],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-lg sm:text-xl md:text-2xl font-bold font-orbitron text-mauve-profond cursor-pointer relative"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(107, 70, 193, 0.6))',
              }}
            >
              Vorion Studio
            </motion.div>
          </Link>
          
          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href="/" 
                className={`transition-colors font-medium ${
                  isActive('/') ? 'text-mauve-profond' : 'text-gray-700 hover:text-mauve-profond'
                }`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                href="/a-propos" 
                className={`transition-colors font-medium ${
                  isActive('/a-propos') ? 'text-mauve-profond' : 'text-gray-700 hover:text-mauve-profond'
                }`}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link 
                href="/processus" 
                className={`transition-colors font-medium ${
                  isActive('/processus') ? 'text-mauve-profond' : 'text-gray-700 hover:text-mauve-profond'
                }`}
              >
                Processus
              </Link>
            </li>
            <li>
              <Link 
                href="/realisations" 
                className={`transition-colors font-medium ${
                  isActive('/realisations') ? 'text-mauve-profond' : 'text-gray-700 hover:text-mauve-profond'
                }`}
              >
                Réalisations
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`transition-colors font-medium ${
                  isActive('/contact') ? 'text-mauve-profond' : 'text-gray-700 hover:text-mauve-profond'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Bouton Desktop */}
          <Link href="/contact" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-mauve-profond text-white rounded-lg font-medium hover:bg-bleu-gris transition-colors"
            >
              Demander un devis
            </motion.button>
          </Link>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-mauve-profond transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="py-4 space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className={`block px-4 py-2 rounded-lg transition-colors font-medium ${
                      isActive('/') 
                        ? 'bg-mauve-profond text-white' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-mauve-profond'
                    }`}
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/a-propos" 
                    className={`block px-4 py-2 rounded-lg transition-colors font-medium ${
                      isActive('/a-propos') 
                        ? 'bg-mauve-profond text-white' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-mauve-profond'
                    }`}
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/processus" 
                    className={`block px-4 py-2 rounded-lg transition-colors font-medium ${
                      isActive('/processus') 
                        ? 'bg-mauve-profond text-white' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-mauve-profond'
                    }`}
                  >
                    Processus
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/realisations" 
                    className={`block px-4 py-2 rounded-lg transition-colors font-medium ${
                      isActive('/realisations') 
                        ? 'bg-mauve-profond text-white' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-mauve-profond'
                    }`}
                  >
                    Réalisations
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className={`block px-4 py-2 rounded-lg transition-colors font-medium ${
                      isActive('/contact') 
                        ? 'bg-mauve-profond text-white' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-mauve-profond'
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li className="pt-2">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2.5 bg-mauve-profond text-white rounded-lg font-medium hover:bg-bleu-gris transition-colors text-sm"
                    >
                      Demander un devis
                    </motion.button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

