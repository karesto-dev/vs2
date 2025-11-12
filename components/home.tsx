'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import FlipCard from './FlipCard'
import {
  Image as ImageIcon,
  Rocket,
  Lightbulb,
  Handshake,
  Cloud,
  Smartphone,
  Globe,
  ShoppingCart,
  Palette,
  Star,
  Quote,
  MessageCircle,
  PenTool,
  Settings,
  ArrowRight,
  ArrowRightCircle,
  Zap,
  Target,
  Mail,
  Phone,
  Clock,
  Send,
} from 'lucide-react'

// Section Hero
function Hero() {
  return (
    <section id="accueil" className="pt-32 pb-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold font-orbitron text-gray-900 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Créez votre{' '}
              <motion.span
                className="text-mauve-profond relative inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #6B46C1, #64748B, #6B46C1)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                avenir digital
              </motion.span>
              {' '}avec Vorion Studio
            </motion.h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Spécialisés en développement de SaaS, applications mobiles, sites web, e-commerce et création digitale. 
              Transformons vos idées en solutions innovantes.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/a-propos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-mauve-profond text-white rounded-lg font-semibold hover:bg-bleu-gris transition-colors"
                >
                  Découvrir nos services
                </motion.button>
              </Link>
              <Link href="/realisations">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-mauve-profond border-2 border-mauve-profond rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Voir nos réalisations
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-mauve-profond to-bleu-gris rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                <video
                  src="/images/Home_hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Section À Propos
function APropos() {
  return (
    <section id="apropos" className="py-24 px-6 bg-gradient-to-b from-white/50 to-gray-50/30 relative overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mauve-profond/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-bleu-gris/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-mauve-profond/10 text-mauve-profond rounded-full text-sm font-semibold mb-6"
          >
            Qui sommes-nous ?
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-900 mb-6">
            À propos de <span className="text-mauve-profond">Vorion Studio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe passionnée dédiée à transformer vos visions en réalité digitale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative min-h-[400px]"
          >
            <div className="absolute inset-0 rounded-xl overflow-hidden border-4 border-white"
              style={{
                boxShadow: '0 0 0 4px rgba(255,255,255,0.8), 0 8px 32px rgba(0,0,0,0.12), 0 0 80px rgba(255,255,255,0.4), inset 0 0 30px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/home-about-innovation_.webp"
                  alt="Innovation"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay glassmorphique */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/15 to-white/8"></div>
              
              {/* Effet brillant animé */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
              </div>
            </div>
            {/* Contenu */}
            <div className="relative flex flex-col h-full justify-center p-10 z-10">
              <div className="mb-6 flex items-center justify-center">
                <div className="p-4 bg-white/40 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
                  <Rocket className="w-10 h-10 text-mauve-profond" />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-orbitron text-gray-900 mb-4 text-center drop-shadow-lg">
                Innovation
              </h3>
              <p className="text-gray-700 leading-relaxed text-center flex-grow font-medium drop-shadow-md">
                Nous restons à la pointe de la technologie pour vous offrir les solutions les plus modernes et performantes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative min-h-[400px]"
          >
            <div className="absolute inset-0 rounded-xl overflow-hidden border-4 border-white"
              style={{
                boxShadow: '0 0 0 4px rgba(255,255,255,0.8), 0 8px 32px rgba(0,0,0,0.12), 0 0 80px rgba(255,255,255,0.4), inset 0 0 30px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/home-about-expertise_.webp"
                  alt="Expertise"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay glassmorphique */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/15 to-white/8"></div>
              
              {/* Effet brillant animé */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
              </div>
            </div>
            {/* Contenu */}
            <div className="relative flex flex-col h-full justify-center p-10 z-10">
              <div className="mb-6 flex items-center justify-center">
                <div className="p-4 bg-white/40 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
                  <Lightbulb className="w-10 h-10 text-bleu-gris" />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-orbitron text-gray-900 mb-4 text-center drop-shadow-lg">
                Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed text-center flex-grow font-medium drop-shadow-md">
                Des années d'expérience dans le développement de solutions digitales complexes et sur mesure.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative min-h-[400px]"
          >
            <div className="absolute inset-0 rounded-xl overflow-hidden border-4 border-white"
              style={{
                boxShadow: '0 0 0 4px rgba(255,255,255,0.8), 0 8px 32px rgba(0,0,0,0.12), 0 0 80px rgba(255,255,255,0.4), inset 0 0 30px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/home-about-partenaire_.webp"
                  alt="Partenaire"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay glassmorphique */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/15 to-white/8"></div>
              
              {/* Effet brillant animé */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
              </div>
            </div>
            {/* Contenu */}
            <div className="relative flex flex-col h-full justify-center p-10 z-10">
              <div className="mb-6 flex items-center justify-center">
                <div className="p-4 bg-white/40 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
                  <Handshake className="w-10 h-10 text-mauve-profond" />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-orbitron text-gray-900 mb-4 text-center drop-shadow-lg">
                Partenaire
              </h3>
              <p className="text-gray-700 leading-relaxed text-center flex-grow font-medium drop-shadow-md">
                Nous construisons une relation de confiance durable avec nos clients pour garantir leur succès.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-10 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-mauve-profond"
            style={{
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div className="absolute top-4 right-4 w-20 h-20 bg-mauve-profond/5 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold font-orbitron text-gray-900 mb-6 relative z-10">Notre Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg relative z-10">
              Accompagner les entreprises dans leur transformation digitale en créant des solutions innovantes, 
              performantes et adaptées à leurs besoins spécifiques. Nous croyons que chaque projet est unique 
              et mérite une approche personnalisée.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-10 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-bleu-gris"
            style={{
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div className="absolute top-4 right-4 w-20 h-20 bg-bleu-gris/5 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold font-orbitron text-gray-900 mb-6 relative z-10">Notre Vision</h3>
            <p className="text-gray-700 leading-relaxed text-lg relative z-10">
              Devenir le partenaire de référence pour toutes les entreprises souhaitant exceller dans le domaine 
              digital. Nous visons l'excellence dans chaque projet et nous engageons à dépasser les attentes 
              de nos clients.
            </p>
          </motion.div>
        </div>

        {/* CTA vers la page À propos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/a-propos">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-mauve-profond to-bleu-gris text-white rounded-lg font-semibold hover:shadow-lg transition-all shadow-md"
            >
              <span>En savoir plus sur nous</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Section Services
const services = [
  {
    title: 'Développement SaaS',
    Icon: Cloud,
    description: 'Solutions cloud scalables et performantes',
    details: 'Nous développons des applications SaaS robustes, sécurisées et évolutives pour répondre aux besoins de votre entreprise.',
  },
  {
    title: 'Applications Mobiles',
    Icon: Smartphone,
    description: 'Apps iOS et Android natives et cross-platform',
    details: 'Création d\'applications mobiles performantes avec les dernières technologies pour iOS et Android.',
  },
  {
    title: 'Sites Web',
    Icon: Globe,
    description: 'Sites web modernes et responsives',
    details: 'Développement de sites web sur mesure, optimisés pour le SEO et offrant une expérience utilisateur exceptionnelle.',
  },
  {
    title: 'E-commerce',
    Icon: ShoppingCart,
    description: 'Plateformes e-commerce complètes',
    details: 'Solutions e-commerce personnalisées avec gestion de stock, paiements sécurisés et analytics avancés.',
  },
  {
    title: 'Création Digitale',
    Icon: Palette,
    description: 'Design et identité visuelle',
    details: 'Services de création digitale incluant design UI/UX, branding et identité visuelle pour votre marque.',
  },
]

function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-900 mb-6">
            Ce que nous <span className="text-mauve-profond">maîtrisons</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour tous vos besoins digitaux
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.Icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FlipCard
                  front={
                    <div className="flex flex-col items-center justify-center h-full text-center p-6">
                      <div className="mb-6">
                        <IconComponent className="w-16 h-16 text-gray-700 mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold font-orbitron text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  }
                  back={
                    <div className="flex flex-col justify-center h-full text-center p-6">
                      <h3 className="text-xl font-bold font-orbitron mb-4">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed">{service.details}</p>
                    </div>
                  }
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Section Témoignages
const temoignages = [
  {
    nom: 'Sophie Martin',
    entreprise: 'TechCorp',
    role: 'CEO',
    texte: 'Vorion Studio a transformé notre vision en une application SaaS exceptionnelle. Leur expertise et leur professionnalisme sont remarquables.',
    note: 5,
  },
  {
    nom: 'Pierre Dubois',
    entreprise: 'E-Shop Pro',
    role: 'Fondateur',
    texte: 'Notre plateforme e-commerce développée par Vorion Studio a dépassé toutes nos attentes. Les résultats sont impressionnants !',
    note: 5,
  },
  {
    nom: 'Marie Leclerc',
    entreprise: 'MobileFirst',
    role: 'Directrice Marketing',
    texte: 'L\'application mobile créée par Vorion Studio a considérablement amélioré l\'engagement de nos utilisateurs. Un travail de qualité !',
    note: 5,
  },
]

function Temoignages() {
  return (
    <section id="temoignages" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-900 mb-6">
            Ce que disent nos <span className="text-mauve-profond">clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre priorité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {temoignages.map((temoignage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mauve-profond/10 to-bleu-gris/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gray-100 backdrop-blur-xl rounded-2xl p-10 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2"
                   style={{
                     boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
                     transform: 'perspective(1000px) rotateX(0deg)',
                     transformStyle: 'preserve-3d'
                   }}>
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-mauve-profond" />
                </div>
                <div className="flex items-center mb-6 relative z-10">
                  {[...Array(temoignage.note)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed italic text-lg relative z-10">
                  "{temoignage.texte}"
                </p>
                <div className="border-t border-gray-200/50 pt-6 relative z-10">
                  <p className="font-semibold text-gray-900 text-lg">{temoignage.nom}</p>
                  <p className="text-sm text-gray-600">{temoignage.role} - {temoignage.entreprise}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-mauve-profond to-bleu-gris rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                 style={{
                   boxShadow: '0 20px 60px rgba(107, 70, 193, 0.3), 0 10px 30px rgba(0, 0, 0, 0.2)',
                 }}>
              <h3 className="text-4xl font-bold font-orbitron mb-4">100+</h3>
              <p className="text-white/90 text-lg">Projets réalisés avec succès</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-bleu-gris to-mauve-profond rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-10 text-white shadow-2xl"
                 style={{
                   boxShadow: '0 20px 60px rgba(100, 116, 139, 0.3)',
                 }}>
              <h3 className="text-4xl font-bold font-orbitron mb-4">98%</h3>
              <p className="text-white/90 text-lg">Clients satisfaits</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Section Comment ça marche
const etapes = [
  {
    numero: '01',
    titre: 'Consultation',
    description: 'Nous analysons vos besoins et définissons ensemble la meilleure stratégie pour votre projet digital.',
    Icon: MessageCircle,
    image: 'consultation',
  },
  {
    numero: '02',
    titre: 'Conception',
    description: 'Notre équipe crée des maquettes et prototypes détaillés pour visualiser votre solution.',
    Icon: PenTool,
    image: 'conception',
  },
  {
    numero: '03',
    titre: 'Développement',
    description: 'Nous développons votre solution avec les meilleures pratiques et technologies modernes.',
    Icon: Settings,
    image: 'developpement',
  },
  {
    numero: '04',
    titre: 'Lancement',
    description: 'Nous testons, optimisons et lançons votre projet avec un accompagnement complet.',
    Icon: Rocket,
    image: 'lancement',
  },
]

function CommentCaMarche() {
  return (
    <section id="processus" className="py-24 px-6 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mauve-profond/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-bleu-gris/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-mauve-profond/10 text-mauve-profond rounded-full text-sm font-semibold mb-6"
          >
            Notre Processus
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-900 mb-6">
            Comment ça <span className="text-mauve-profond">marche</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple et efficace pour transformer vos idées en réalité
          </p>
        </motion.div>

        {/* Cartes en ligne avec flèches */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-16">
          {etapes.map((etape, index) => {
            const IconComponent = etape.Icon
            return (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative w-[300px] flex-shrink-0 group"
                >
                  {/* Effet de glow au hover */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-mauve-profond/20 to-bleu-gris/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Background image pour toute la carte */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <Image
                      src={`/images/home-processus-${etape.image}_.webp`}
                      alt={etape.titre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Overlay léger pour la lisibilité */}
                  <div className="absolute inset-0 bg-gray-100/40 rounded-xl"></div>
                  
                  {/* Numéro stylisé avec effet glow - dépasse de la carte */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                    className="absolute -top-3 -right-3 z-30"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-mauve-profond/30 blur-md rounded-lg"></div>
                      <div className="relative text-3xl font-bold font-orbitron text-mauve-profond bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg border-2 border-mauve-profond/30 shadow-xl">
                        {etape.numero}
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="relative h-[320px] perspective-1000">
                    <FlipCard
                      front={
                        <div className="relative flex flex-col h-full justify-center p-8 z-10">
                          {/* Icône stylisée */}
                          <div className="flex items-center justify-center mb-6">
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              className="relative"
                            >
                              <div className="absolute inset-0 bg-mauve-profond/20 blur-xl rounded-full"></div>
                              <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-white/95 backdrop-blur-md border-4 border-white shadow-2xl">
                                <IconComponent className="w-10 h-10 text-mauve-profond" />
                              </div>
                            </motion.div>
                          </div>
                          
                          {/* Titre */}
                          <h3 className="text-2xl font-bold font-orbitron text-gray-900 text-center mb-2 drop-shadow-lg">
                            {etape.titre}
                          </h3>
                        </div>
                      }
                      back={
                        <div className="relative flex flex-col h-full justify-center p-8 z-10">
                          <div className="absolute inset-0 bg-gradient-to-br from-mauve-profond/95 via-bleu-gris/95 to-mauve-profond/95 rounded-xl"></div>
                          <div className="relative">
                            <div className="text-3xl font-bold font-orbitron text-white/90 mb-4 text-center">
                              {etape.numero}
                            </div>
                            <h3 className="text-xl font-bold font-orbitron text-white mb-4 text-center">
                              {etape.titre}
                            </h3>
                            <p className="text-white/95 text-base text-left leading-relaxed px-2">
                              {etape.description}
                            </p>
                          </div>
                        </div>
                      }
                      className="h-[320px]"
                    />
                  </div>
                  
                  {/* Bordure épaisse blanche avec effet 3D */}
                  <div 
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      border: '4px solid white',
                      boxShadow: '0 0 0 4px rgba(255,255,255,0.8), 0 12px 40px rgba(0,0,0,0.15), 0 0 100px rgba(107, 70, 193, 0.2), inset 0 0 40px rgba(255,255,255,0.3), inset 0 2px 0 rgba(255,255,255,0.6)',
                    }}
                  ></div>
                  
                  {/* Effet brillant animé */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                  </div>
                </motion.div>

                {/* Flèche animée entre les cartes */}
                {index < etapes.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -30, scale: 0.5 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3, type: "spring" }}
                    className="hidden lg:flex items-center justify-center mx-4 relative"
                  >
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      className="relative"
                    >
                      {/* Flèche avec glow */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-mauve-profond/30 blur-lg"></div>
                        <div className="relative bg-white p-3 rounded-full shadow-xl border-2 border-mauve-profond/20">
                          <ArrowRight className="w-6 h-6 text-mauve-profond" />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        {/* Lien vers la page processus pour plus de détails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <Link href="/processus">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-mauve-profond to-bleu-gris text-white rounded-xl font-semibold shadow-2xl overflow-hidden group"
              style={{
                boxShadow: '0 10px 40px rgba(107, 70, 193, 0.4), 0 0 60px rgba(107, 70, 193, 0.2)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-bleu-gris to-mauve-profond opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Découvrir notre processus en détail</span>
              <ArrowRightCircle className="w-6 h-6 relative z-10" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Section Contact CTA
function ContactCTA() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'envoi du formulaire
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-mauve-profond to-bleu-gris relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-6">
            Prêt à transformer votre idée en réalité ?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20 shadow-2xl"
          >
            <h3 className="text-2xl font-bold font-orbitron text-white mb-8">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-white/90 mb-2 font-medium">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="nom"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/90 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white/90 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                  placeholder="Décrivez votre projet..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-white text-mauve-profond rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20 shadow-2xl"
            >
              <h3 className="text-2xl font-bold font-orbitron text-white mb-8">
                Informations de contact
              </h3>
              <div className="space-y-6 text-white/90">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-white/80">contact@vorionstudio.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Téléphone</p>
                    <p className="text-white/80">+212 6 60 89 35 53</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Horaires</p>
                    <p className="text-white/80">Lun - Ven: 9h - 18h</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-colors">
                <div className="flex justify-center mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold text-sm">Réponse sous 24h</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-colors">
                <div className="flex justify-center mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold text-sm">Devis personnalisé</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-colors">
                <div className="flex justify-center mb-3">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold text-sm">Accompagnement complet</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Composant principal Home
export default function Home() {
  return (
    <>
      <Hero />
      <APropos />
      <Services />
      <Temoignages />
      <CommentCaMarche />
      <ContactCTA />
    </>
  )
}

