'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FlipCard from './FlipCard'
import { Image as ImageIcon, Video, Users, Target, Award, TrendingUp, Zap, Heart, Globe, Code, Layers, Palette, Film, Megaphone, Lightbulb, ArrowUp } from 'lucide-react'

export default function AProposPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-gray-900 mb-6">
            À propos de <span className="text-mauve-profond">Vorion Studio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez qui nous sommes, ce qui nous anime et comment nous transformons vos idées en réalité digitale
          </p>
        </motion.div>

        {/* Section Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="bg-gray-100 rounded-2xl overflow-hidden min-h-[500px] relative">
            <Image
              src="/images/about-hero_.webp"
              alt="Vorion Studio - Équipe"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Section Notre Histoire - 2 colonnes */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-900 mb-6">
                Notre <span className="text-mauve-profond">Histoire</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Fondé avec une vision claire : démocratiser l'accès aux meilleures solutions digitales pour les entreprises de toutes tailles.
                </p>
                <p>
                  Depuis nos débuts, nous avons accompagné des centaines de clients dans leur transformation digitale, en créant des solutions sur mesure qui répondent à leurs besoins spécifiques.
                </p>
                <p>
                  Notre passion pour l'innovation et notre engagement envers l'excellence nous poussent constamment à repousser les limites du possible.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-100 rounded-2xl overflow-hidden min-h-[400px] relative"
            >
              <Image
                src="/images/about-notre histoire_.webp"
                alt="Notre Histoire"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Section Nos Valeurs - 3 colonnes avec images en bg */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-900 mb-6">
              Nos <span className="text-mauve-profond">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: 'Innovation', 
                description: 'Nous restons à la pointe de la technologie pour vous offrir les solutions les plus modernes et performantes.',
                details: 'Chez Vorion Studio, l\'innovation est au cœur de notre ADN. Nous explorons constamment les dernières technologies, frameworks et méthodologies pour vous proposer des solutions à la pointe de l\'industrie. Notre équipe suit de près les évolutions du secteur digital et intègre les meilleures pratiques dans chaque projet.'
              },
              { 
                icon: Target, 
                title: 'Excellence', 
                description: 'Chaque projet est une opportunité de dépasser les attentes et de créer quelque chose d\'exceptionnel.',
                details: 'L\'excellence n\'est pas un objectif, c\'est un standard. Nous nous engageons à livrer des projets de qualité supérieure, en accordant une attention particulière à chaque détail. De la conception à la livraison, nous visons la perfection dans le code, le design et l\'expérience utilisateur.'
              },
              { 
                icon: Heart, 
                title: 'Passion', 
                description: 'Notre amour pour ce que nous faisons se reflète dans chaque ligne de code et chaque design.',
                details: 'La passion est le moteur de notre créativité. Nous aimons ce que nous faisons et cela se ressent dans notre travail. Chaque projet est traité avec enthousiasme et dévouement. Cette passion nous pousse à toujours aller plus loin, à chercher l\'innovation et à créer des solutions qui font la différence.'
              },
            ].map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative min-h-[400px]"
                >
                  <div className="absolute inset-0 rounded-xl overflow-hidden border-4 border-white z-0"
                    style={{
                      boxShadow: '0 0 0 4px rgba(255,255,255,0.8), 0 8px 32px rgba(0,0,0,0.12), 0 0 80px rgba(255,255,255,0.4), inset 0 0 30px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                    }}
                  >
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <Image
                        src="/images/about-nos valeurs_.webp"
                        alt={value.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Overlay glassmorphique */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/15 to-white/8 backdrop-blur-sm"></div>
                    
                    {/* Effet brillant animé */}
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 z-20">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <FlipCard
                      front={
                        <div className="relative flex flex-col h-full justify-center p-10 bg-transparent">
                          <div className="mb-6 flex items-center justify-center">
                            <div className="p-4 bg-white/40 backdrop-blur-md rounded-xl border border-white/50 shadow-lg">
                              <IconComponent className="w-10 h-10 text-mauve-profond" />
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold font-orbitron text-gray-900 mb-4 text-center drop-shadow-lg">
                            {value.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-center flex-grow font-medium drop-shadow-md">
                            {value.description}
                          </p>
                        </div>
                      }
                      back={
                        <div className="relative flex flex-col h-full justify-center p-8">
                          <div className="absolute inset-0 bg-gradient-to-br from-mauve-profond/95 to-bleu-gris/95 rounded-xl"></div>
                          <div className="relative z-10 flex flex-col h-full justify-center">
                            <div className="mb-5 flex items-center justify-center">
                              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                                <IconComponent className="w-8 h-8 text-white" />
                              </div>
                            </div>
                            <h3 className="text-xl font-bold font-orbitron text-white mb-4 text-center">
                              {value.title}
                            </h3>
                            <p className="text-white/95 leading-relaxed text-left font-normal text-sm px-2" style={{ wordSpacing: 'normal', letterSpacing: '0.01em' }}>
                              {value.details}
                            </p>
                          </div>
                        </div>
                      }
                      className="h-[400px]"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Section Vidéo - Large */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 rounded-2xl p-16 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center min-h-[500px]"
          >
            <Video className="w-24 h-24 text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg font-medium">Video Placeholder</p>
            <p className="text-gray-400 text-sm mt-2">1920x1080px - Présentation Vorion Studio</p>
          </motion.div>
        </section>

        {/* Section Nos Cellules d'Experts */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-900 mb-6">
              Nos <span className="text-mauve-profond">Cellules d'Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des équipes spécialisées pour chaque domaine d'expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Code, 
                title: 'Développeurs Full Stack',
                imageName: 'Développeurs Full Stack',
                description: 'Experts en développement front-end et back-end pour créer des solutions complètes et performantes.',
                color: 'text-blue-600'
              },
              { 
                icon: Palette, 
                title: 'Infographiste',
                imageName: 'infographiste',
                description: 'Créateurs visuels qui donnent vie à votre identité de marque avec des designs percutants.',
                color: 'text-purple-600'
              },
              { 
                icon: Film, 
                title: 'Motion Designer',
                imageName: 'motion designer',
                description: 'Spécialistes de l\'animation et du motion design pour des contenus visuels dynamiques.',
                color: 'text-pink-600'
              },
              { 
                icon: Megaphone, 
                title: 'Marketing',
                imageName: 'marketing',
                description: 'Stratégies marketing digital pour maximiser votre visibilité et votre croissance.',
                color: 'text-orange-600'
              },
              { 
                icon: Lightbulb, 
                title: 'Innovation',
                imageName: 'innovation',
                description: 'Cellule dédiée à l\'innovation et à l\'exploration des technologies émergentes.',
                color: 'text-yellow-600'
              },
              { 
                icon: ArrowUp, 
                title: 'Scalabilité',
                imageName: 'scalabilité',
                description: 'Experts en architecture scalable pour accompagner votre croissance et votre expansion.',
                color: 'text-green-600'
              },
            ].map((cellule, index) => {
              const IconComponent = cellule.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-100 rounded-xl p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2"
                  style={{
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="p-4 bg-white/70 rounded-xl mb-4">
                      <IconComponent className={`w-10 h-10 ${cellule.color}`} />
                    </div>
                    <h3 className="text-xl font-bold font-orbitron text-gray-900 mb-3">
                      {cellule.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {cellule.description}
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video relative">
                    <Image
                      src={`/images/about-cellules-${cellule.imageName}_.webp`}
                      alt={cellule.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Section Chiffres - 2 colonnes avec stats */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-2xl p-12 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2"
              style={{
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-mauve-profond/10 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-mauve-profond" />
                </div>
                <h3 className="text-3xl font-bold font-orbitron text-gray-900">Nos Chiffres</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '100+', label: 'Projets' },
                  { number: '50+', label: 'Clients' },
                  { number: '98%', label: 'Satisfaction' },
                  { number: '5+', label: 'Années' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold font-orbitron text-mauve-profond mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-100 rounded-2xl p-12 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2"
              style={{
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-mauve-profond/10 rounded-xl">
                  <Award className="w-8 h-8 text-mauve-profond" />
                </div>
                <h3 className="text-3xl font-bold font-orbitron text-gray-900">Nos Expertises</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Code, text: 'Développement Full-Stack' },
                  { icon: Globe, text: 'Solutions Cloud & SaaS' },
                  { icon: Zap, text: 'Applications Mobiles' },
                  { icon: Target, text: 'E-commerce & Marketplaces' },
                ].map((expertise, index) => {
                  const IconComponent = expertise.icon
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/50 rounded-lg">
                      <IconComponent className="w-6 h-6 text-mauve-profond" />
                      <span className="text-gray-700">{expertise.text}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section Mission & Vision - Layout alterné */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-2xl p-12 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2"
              style={{
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 className="text-3xl font-bold font-orbitron text-gray-900 mb-6">Notre Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Accompagner les entreprises dans leur transformation digitale en créant des solutions innovantes, 
                performantes et adaptées à leurs besoins spécifiques.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Nous croyons que chaque projet est unique et mérite une approche personnalisée qui reflète 
                l'identité et les ambitions de nos clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-100 rounded-2xl p-12 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2"
              style={{
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 className="text-3xl font-bold font-orbitron text-gray-900 mb-6">Notre Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Devenir le partenaire de référence pour toutes les entreprises souhaitant exceller dans le domaine 
                digital, en France et à l'international.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Nous visons l'excellence dans chaque projet et nous engageons à dépasser les attentes 
                de nos clients en leur offrant des solutions qui évoluent avec eux.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
