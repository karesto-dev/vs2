'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Image as ImageIcon, MessageCircle, PenTool, Settings, Rocket, CheckCircle2, Clock, Users, FileText, Zap, Shield } from 'lucide-react'

const etapes = [
  {
    numero: '01',
    titre: 'Consultation Initiale',
    sousTitre: 'Écoute & Analyse',
    description: 'Nous prenons le temps de comprendre vos besoins, vos objectifs et vos contraintes. Cette première rencontre est cruciale pour établir une base solide.',
    details: [
      'Analyse approfondie de votre projet',
      'Identification des objectifs business',
      'Évaluation des contraintes techniques et budgétaires',
      'Définition du périmètre fonctionnel',
    ],
    duree: '1-2 jours',
    Icon: MessageCircle,
    couleur: 'from-blue-500 to-cyan-500',
    image: 'consultation',
  },
  {
    numero: '02',
    titre: 'Conception & Stratégie',
    sousTitre: 'Architecture & Design',
    description: 'Notre équipe crée une architecture technique solide et des maquettes détaillées. Chaque décision est pensée pour optimiser l\'expérience utilisateur et la performance.',
    details: [
      'Architecture technique détaillée',
      'Maquettes et prototypes interactifs',
      'Définition de l\'identité visuelle',
      'Planification du développement',
    ],
    duree: '3-5 jours',
    Icon: PenTool,
    couleur: 'from-purple-500 to-pink-500',
    image: 'conception',
  },
  {
    numero: '03',
    titre: 'Développement',
    sousTitre: 'Création & Implémentation',
    description: 'Phase de développement agile avec des sprints réguliers. Vous êtes informé de l\'avancement en temps réel et pouvez tester les fonctionnalités au fur et à mesure.',
    details: [
      'Développement itératif par sprints',
      'Tests continus et qualité assurée',
      'Points d\'avancement réguliers',
      'Intégration progressive des fonctionnalités',
    ],
    duree: 'Variable selon projet',
    Icon: Settings,
    couleur: 'from-green-500 to-emerald-500',
    image: 'developpement',
  },
  {
    numero: '04',
    titre: 'Tests & Optimisation',
    sousTitre: 'Qualité & Performance',
    description: 'Tests approfondis sur tous les aspects : fonctionnels, performance, sécurité, compatibilité. Nous optimisons chaque détail pour garantir une expérience parfaite.',
    details: [
      'Tests fonctionnels complets',
      'Optimisation des performances',
      'Audit de sécurité',
      'Tests de compatibilité multi-plateformes',
    ],
    duree: '5-7 jours',
    Icon: Shield,
    couleur: 'from-orange-500 to-red-500',
    image: 'teste',
  },
  {
    numero: '05',
    titre: 'Lancement & Support',
    sousTitre: 'Déploiement & Accompagnement',
    description: 'Mise en production sécurisée et accompagnement post-lancement. Nous restons à vos côtés pour assurer une transition en douceur et un support continu.',
    details: [
      'Déploiement en production sécurisé',
      'Formation de votre équipe',
      'Documentation complète',
      'Support et maintenance continue',
    ],
    duree: '2-3 jours + support',
    Icon: Rocket,
    couleur: 'from-mauve-profond to-bleu-gris',
    image: 'lancement',
  },
]

export default function ProcessusPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-gray-900 mb-6">
            Notre <span className="text-mauve-profond">Processus</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Un processus structuré et transparent pour transformer vos idées en réalité digitale
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <Clock className="w-4 h-4 text-mauve-profond" />
              <span>Suivi en temps réel</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <Users className="w-4 h-4 text-mauve-profond" />
              <span>Communication transparente</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-mauve-profond" />
              <span>Qualité garantie</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline Verticale */}
        <div className="relative">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mauve-profond via-bleu-gris to-mauve-profond transform md:-translate-x-1/2"></div>

          {/* Stations de la timeline */}
          <div className="space-y-24">
            {etapes.map((etape, index) => {
              const IconComponent = etape.Icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${etape.couleur} shadow-2xl flex items-center justify-center border-4 border-white`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Contenu de l'étape */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isEven ? 'md:pr-1/2' : 'md:pl-1/2 md:flex-row-reverse'}`}>
                    {/* Image / Contenu gauche */}
                    <div className={`${isEven ? 'md:pr-16' : 'md:pl-16 md:order-2'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gray-100 rounded-2xl overflow-hidden min-h-[400px] relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-mauve-profond/5 to-bleu-gris/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <Image
                          src={`/images/processus-${etape.image}_.webp`}
                          alt={etape.titre}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>

                    {/* Description droite */}
                    <div className={`${isEven ? 'md:pl-16' : 'md:pr-16 md:order-1'}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="bg-gray-100 rounded-2xl p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2"
                        style={{
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
                        }}
                      >
                        {/* Numéro et badge durée */}
                        <div className="flex items-center justify-between mb-6">
                          <div className={`text-5xl font-bold font-orbitron bg-gradient-to-br ${etape.couleur} bg-clip-text text-transparent`}>
                            {etape.numero}
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full">
                            <Clock className="w-4 h-4 text-mauve-profond" />
                            <span className="text-sm font-medium text-gray-700">{etape.duree}</span>
                          </div>
                        </div>

                        {/* Titre et sous-titre */}
                        <h2 className="text-3xl font-bold font-orbitron text-gray-900 mb-2">
                          {etape.titre}
                        </h2>
                        <p className="text-lg text-mauve-profond font-medium mb-6">
                          {etape.sousTitre}
                        </p>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          {etape.description}
                        </p>

                        {/* Liste de détails */}
                        <div className="space-y-3 mb-6">
                          {etape.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.1 + detailIndex * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{detail}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Badge de garantie */}
                        <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-mauve-profond/10 to-bleu-gris/10 rounded-lg border border-mauve-profond/20">
                          <Shield className="w-5 h-5 text-mauve-profond" />
                          <span className="text-sm text-gray-700 font-medium">
                            Qualité et transparence garanties à chaque étape
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Section CTA Finale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 text-center"
        >
          <div className="bg-gradient-to-br from-mauve-profond to-bleu-gris rounded-3xl p-12 shadow-2xl">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold font-orbitron text-white mb-4">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous accompagner.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-mauve-profond rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg"
              >
                Demander un devis gratuit
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
