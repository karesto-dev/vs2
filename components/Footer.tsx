'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mt-20 py-12 bg-gradient-to-b from-transparent to-gray-100"
      style={{
        boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.1)',
        transform: 'translateZ(0)',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold font-orbitron text-mauve-profond mb-4">
              Vorion Studio
            </h3>
            <p className="text-gray-600">
              Spécialisé en développement de SaaS, applications mobiles, sites web, e-commerce et création digitale.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold font-orbitron mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Développement SaaS</li>
              <li>Applications Mobiles</li>
              <li>Sites Web</li>
              <li>E-commerce</li>
              <li>Création Digitale</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold font-orbitron mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Email: contact@vorionstudio.com</li>
              <li>Téléphone: +33 X XX XX XX XX</li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Vorion Studio. Tous droits réservés.</p>
        </div>
      </div>
    </motion.footer>
  )
}

