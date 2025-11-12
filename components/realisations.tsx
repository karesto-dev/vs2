'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Image as ImageIcon, Smartphone, Globe, Film, TrendingUp, Users, Zap, Code, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const projetsPhares = [
  {
    id: 'vorion-suite',
    titre: 'Vorion Suite',
    categorie: 'SaaS Médical',
    description: 'Une suite complète de solutions SaaS et BaaS dédiée au secteur médical et paramédical. Gestion intégrée pour optimiser les processus de soins.',
    descriptionLongue: 'Plateforme complète permettant aux professionnels de santé de gérer leurs patients, rendez-vous, dossiers médicaux et facturation de manière centralisée et sécurisée.',
    technologies: ['SaaS', 'BaaS', 'Cloud', 'Sécurité'],
    stats: {
      clients: '100+',
      label: 'Clients actifs',
    },
    icon: Code,
    couleur: 'from-blue-500 to-cyan-500',
    images: 3,
    imageFiles: [
      '1_suite.webp',
      '2_suite.webp',
      '3_suite.webp',
    ],
  },
  {
    id: 'marketing-digital',
    titre: 'Marketing Digital',
    categorie: 'Ads & Scaling',
    description: 'Stratégies marketing digital performantes avec gestion de campagnes publicitaires et scaling pour maximiser votre croissance.',
    descriptionLongue: 'Accompagnement complet en marketing digital : création et optimisation de campagnes publicitaires, scaling efficace, analyse de performance et ROI.',
    technologies: ['Ads', 'Scaling', 'Analytics', 'ROI'],
    stats: {
      clients: '100+',
      label: 'Portefeuille clients',
    },
    icon: TrendingUp,
    couleur: 'from-purple-500 to-pink-500',
    images: 3,
    imageFiles: [
      '1_marketingdigital.webp',
      '2_marketingdigital.webp',
      '3_marketingdigital.webp',
    ],
  },
  {
    id: 'applications-mobiles',
    titre: 'Applications Mobiles',
    categorie: 'Développement Mobile',
    description: 'Développement d\'applications mobiles natives et cross-platform pour iOS et Android, offrant des performances optimales et une expérience utilisateur fluide.',
    descriptionLongue: 'Nous créons des applications mobiles sur mesure adaptées à vos besoins spécifiques. Que ce soit pour la gestion, le e-commerce, les services ou l\'innovation, nos applications sont développées avec les dernières technologies pour garantir performance, sécurité et scalabilité.',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Cross-platform'],
    stats: {
      clients: 'Multiples',
      label: 'Applications développées',
    },
    icon: Smartphone,
    couleur: 'from-green-500 to-emerald-500',
    images: 3,
    imageFiles: [
      'Design sans titre_mobileapp.webp',
      '2_mobileapp.webp',
      '3_mobileapp.webp',
    ],
  },
  {
    id: 'sites-web',
    titre: 'Sites Web Premium',
    categorie: 'Développement Web',
    description: 'Sites web développés avec les dernières technologies pour offrir des performances optimales et une expérience utilisateur exceptionnelle.',
    descriptionLongue: 'Création de sites web sur mesure utilisant les frameworks et technologies les plus récentes pour garantir rapidité, sécurité et scalabilité.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Modern Stack'],
    stats: {
      clients: 'Multiples',
      label: 'Projets réalisés',
    },
    icon: Globe,
    couleur: 'from-orange-500 to-red-500',
    images: 3,
    imageFiles: [
      'atlas_.webp',
      'nexus_.webp',
      'tawba_.webp',
    ],
  },
  {
    id: 'video-production',
    titre: 'Production Vidéo',
    categorie: 'Vidéo & Motion',
    description: 'Création d\'intros, outros, teasers et vidéos publicitaires pour événements et campagnes marketing impactantes.',
    descriptionLongue: 'Production complète de contenus vidéo : intros/outros personnalisées, teasers événementiels, spots publicitaires et motion design sur mesure.',
    technologies: ['Motion Design', 'After Effects', 'Premiere', 'Animation'],
    stats: {
      clients: 'Templates',
      label: 'Disponibles',
    },
    icon: Film,
    couleur: 'from-pink-500 to-rose-500',
    images: 3,
    isVideo: true,
    videos: [
      'Videohive - Feel The Game - Sport Intro - 60610635.webm',
      'Videohive - Product Shop Promo - 60506378.webm',
      'Videohive - Slideshow Intro - 60234555.webm',
    ],
  },
]

// Composant Slider
function ProjectSlider({ projet, totalImages }: { projet: typeof projetsPhares[0] & { isVideo?: boolean, videos?: string[], imageFiles?: string[] }, totalImages: number }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isVideoProject = projet.isVideo && projet.videos
  const hasImages = projet.imageFiles && projet.imageFiles.length > 0

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  return (
    <div className="relative group">
      {/* Slider principal */}
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden min-h-[400px] border-2 border-dashed border-gray-300">
        <AnimatePresence mode="wait">
          {isVideoProject && projet.videos ? (
            <motion.video
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              src={`/images/${projet.videos[currentIndex]}`}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : hasImages && projet.imageFiles ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={`/images/${projet.imageFiles[currentIndex]}`}
                alt={`${projet.titre} - Image ${currentIndex + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ) : (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-12"
            >
              <ImageIcon className="w-20 h-20 text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg font-medium">Image {currentIndex + 1}</p>
              <p className="text-gray-400 text-sm mt-2">1200x800px - {projet.titre}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Boutons navigation */}
        {totalImages > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </>
        )}

        {/* Indicateurs de pagination */}
        {totalImages > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {Array.from({ length: totalImages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-mauve-profond'
                    : 'w-2 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Miniatures en bas (si plusieurs images/vidéos) */}
      {totalImages > 1 && (
        <div className="grid grid-cols-4 gap-3 mt-4">
          {Array.from({ length: Math.min(totalImages, 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 aspect-video flex items-center justify-center transition-all duration-300 relative ${
                index === currentIndex
                  ? 'border-mauve-profond ring-2 ring-mauve-profond/20'
                  : 'hover:border-gray-400'
              }`}
            >
              {isVideoProject && projet.videos ? (
                <video
                  src={`/images/${projet.videos[index]}`}
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : hasImages && projet.imageFiles ? (
                <Image
                  src={`/images/${projet.imageFiles[index]}`}
                  alt={`${projet.titre} - Miniature ${index + 1}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <ImageIcon className="w-6 h-6 text-gray-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function RealisationsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-gray-900 mb-6">
            Nos <span className="text-mauve-profond">Réalisations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Découvrez nos projets phares qui témoignent de notre expertise et de notre capacité à transformer vos idées en succès
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <Zap className="w-4 h-4 text-mauve-profond" />
              <span>Projets innovants</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <Users className="w-4 h-4 text-mauve-profond" />
              <span>100+ clients satisfaits</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <Code className="w-4 h-4 text-mauve-profond" />
              <span>Technologies de pointe</span>
            </div>
          </div>
        </motion.div>

        {/* Projets Phares - Layout varié */}
        <div className="space-y-32 mb-32">
          {projetsPhares.map((projet, index) => {
            const IconComponent = projet.icon
            const isEven = index % 2 === 0

            return (
              <motion.section
                key={projet.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Slider d'images */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    >
                      <ProjectSlider projet={projet} totalImages={projet.images} />
                    </motion.div>
                  </div>

                  {/* Contenu descriptif */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      className="bg-gray-100 rounded-2xl p-10 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2"
                      style={{
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      {/* Badge catégorie et icône */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 bg-gradient-to-br ${projet.couleur} rounded-xl`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="px-4 py-2 bg-white/70 rounded-full">
                          <span className="text-sm font-medium text-gray-700">{projet.categorie}</span>
                        </div>
                      </div>

                      {/* Titre */}
                      <h2 className="text-4xl font-bold font-orbitron text-gray-900 mb-4">
                        {projet.titre}
                      </h2>

                      {/* Description courte */}
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {projet.description}
                      </p>

                      {/* Description longue */}
                      <p className="text-gray-600 leading-relaxed mb-8">
                        {projet.descriptionLongue}
                      </p>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {projet.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/70 rounded-full text-sm text-gray-700 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="p-6 bg-gradient-to-r from-mauve-profond/10 to-bleu-gris/10 rounded-xl border border-mauve-profond/20">
                        <div>
                          <div className="text-3xl font-bold font-orbitron text-mauve-profond">
                            {projet.stats.clients}
                          </div>
                          <div className="text-sm text-gray-600">{projet.stats.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>
            )
          })}
        </div>

        {/* Section Galerie de sites web */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-900 mb-6">
              Portfolio <span className="text-mauve-profond">Sites Web</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quelques exemples de sites web développés avec les dernières technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                nom: 'Tawba',
                description: 'Site web moderne et performant',
                lien: 'https://tawba.ma',
                technologies: ['Next.js', 'React', 'TypeScript'],
              },
              {
                id: 2,
                nom: 'Jouyaupara',
                description: 'Plateforme web innovante',
                lien: 'https://jouyaupara.com',
                technologies: ['Next.js', 'React', 'TypeScript'],
              },
              {
                id: 3,
                nom: 'Nexus Tech Canada',
                description: 'Site web professionnel',
                lien: 'https://nexustechcanada.com',
                technologies: ['Next.js', 'React', 'TypeScript'],
              },
              {
                id: 4,
                nom: 'EyeCorp',
                description: 'Solution web sur mesure',
                lien: 'https://eyecorp.ma',
                technologies: ['Next.js', 'React', 'TypeScript'],
              },
              {
                id: 5,
                nom: 'Atlas Gaming',
                description: 'Boutique e-commerce gaming',
                lien: 'https://atlasgaming.ma',
                technologies: ['Next.js', 'React', 'TypeScript'],
              },
              {
                id: 6,
                nom: 'BeautyNow',
                description: 'Plateforme beauté et bien-être',
                lien: 'https://beautynow.ma',
                technologies: ['Next.js', 'React', 'TypeScript'],
              },
            ].map((site) => (
              <motion.a
                key={site.id}
                href={site.lien || '#'}
                target={site.lien ? '_blank' : undefined}
                rel={site.lien ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: site.id * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-gray-100 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform group block ${
                  !site.lien ? 'cursor-default' : 'cursor-pointer'
                }`}
                style={{
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
                }}
                onClick={(e) => {
                  if (!site.lien) {
                    e.preventDefault()
                  }
                }}
              >
                <div className="bg-gray-100 p-12 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-mauve-profond/5 to-bleu-gris/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Globe className="w-16 h-16 text-gray-400 mb-4 relative z-10 group-hover:text-mauve-profond transition-colors duration-300" />
                  <p className="text-gray-500 text-sm font-medium relative z-10">{site.nom}</p>
                  {site.lien ? (
                    <p className="text-mauve-profond text-xs mt-2 relative z-10 font-semibold">Cliquez pour visiter</p>
                  ) : (
                    <p className="text-gray-400 text-xs mt-2 relative z-10">Lien à venir</p>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-orbitron text-gray-900 mb-2 group-hover:text-mauve-profond transition-colors duration-300">
                    {site.nom}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {site.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/70 rounded-full text-xs text-gray-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {site.lien && (
                    <div className="flex items-center gap-2 text-sm text-mauve-profond font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Voir le site</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-mauve-profond to-bleu-gris rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold font-orbitron text-white mb-4">
              Un projet en tête ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et découvrons ensemble comment nous pouvons le concrétiser
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-mauve-profond rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg"
              >
                Discuter de votre projet
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
