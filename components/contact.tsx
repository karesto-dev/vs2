'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Clock, Send, MapPin, MessageSquare, Zap, Shield, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    sujet: '',
    message: '',
    budget: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

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
            Contactez-<span className="text-mauve-profond">nous</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Prêt à transformer votre idée en réalité ? Discutons de votre projet et découvrons ensemble comment nous pouvons vous accompagner vers le succès.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <Zap className="w-4 h-4 text-mauve-profond" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <Shield className="w-4 h-4 text-mauve-profond" />
              <span>Devis gratuit et sans engagement</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-mauve-profond" />
              <span>Consultation personnalisée</span>
            </div>
          </div>
        </motion.div>

        {/* Section principale - Formulaire + Infos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Formulaire - 2 colonnes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-100 rounded-2xl p-10 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300"
              style={{
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-mauve-profond to-bleu-gris rounded-xl">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-orbitron text-gray-900">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-gray-600">Remplissez le formulaire ci-dessous</p>
                </div>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold font-orbitron text-gray-900 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-gray-700 mb-2 font-medium">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-mauve-profond transition-all"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-mauve-profond transition-all"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telephone" className="block text-gray-700 mb-2 font-medium">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-mauve-profond transition-all"
                        placeholder="+212 x xx xx xx xx"
                      />
                    </div>
                    <div>
                      <label htmlFor="entreprise" className="block text-gray-700 mb-2 font-medium">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="entreprise"
                        value={formData.entreprise}
                        onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-mauve-profond transition-all"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="sujet" className="block text-gray-700 mb-2 font-medium">
                        Sujet *
                      </label>
                      <select
                        id="sujet"
                        value={formData.sujet}
                        onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-mauve-profond transition-all"
                        required
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="devis">Demande de devis</option>
                        <option value="saas">Développement SaaS</option>
                        <option value="mobile">Application Mobile</option>
                        <option value="web">Site Web</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="marketing">Marketing Digital</option>
                        <option value="video">Production Vidéo</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-gray-700 mb-2 font-medium">
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-mauve-profond transition-all"
                      >
                        <option value="">Sélectionnez un budget</option>
                        <option value="2500-4000">Entre 2 500 et 4 000 DH</option>
                        <option value="6000-10000">Entre 6 000 et 10 000 DH</option>
                        <option value="10000-15000">Entre 10 000 et 15 000 DH</option>
                        <option value=">15000">Au-delà de 15 000 DH</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-mauve-profond transition-all resize-none"
                      placeholder="Décrivez votre projet en détail..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-mauve-profond to-bleu-gris text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Informations de contact - 1 colonne */}
          <div className="space-y-6">
            {/* Carte principale contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-100 rounded-2xl p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2"
              style={{
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 className="text-2xl font-bold font-orbitron text-gray-900 mb-8">
                Informations de contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-mauve-profond to-bleu-gris rounded-xl flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:contact@vorionstudio.com" className="text-mauve-profond hover:underline">
                      contact@vorionstudio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-mauve-profond to-bleu-gris rounded-xl flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Téléphone</p>
                    <a href="tel:+212660893553" className="text-mauve-profond hover:underline">
                      +212 6 60 89 35 53
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-mauve-profond to-bleu-gris rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Adresse</p>
                    <p className="text-gray-600">Lot Rayhane Bureau N22 Nejma Tanger</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-mauve-profond to-bleu-gris rounded-xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Horaires</p>
                    <p className="text-gray-600">Lun - Ven: 9h - 18h</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Carte WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-100 rounded-2xl p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2"
              style={{
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-orbitron text-gray-900 mb-3">
                  Chattez avec nous
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discutez directement avec notre équipe sur WhatsApp pour une réponse immédiate à vos questions
                </p>
                <motion.a
                  href="https://wa.me/212660893553"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all shadow-lg w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Ouvrir WhatsApp</span>
                </motion.a>
                <p className="text-xs text-gray-500 mt-4">
                  Réponse garantie sous 1h
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section Garanties - 3 colonnes */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-orbitron text-gray-900 mb-4">
              Pourquoi nous <span className="text-mauve-profond">choisir</span> ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des garanties qui font la différence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                titre: 'Réponse Rapide',
                description: 'Nous vous répondons sous 24h maximum, même le week-end pour les urgences.',
                couleur: 'from-yellow-500 to-orange-500',
              },
              {
                icon: Shield,
                titre: 'Confidentialité',
                description: 'Vos données sont protégées et traitées avec la plus grande confidentialité.',
                couleur: 'from-green-500 to-emerald-500',
              },
              {
                icon: CheckCircle2,
                titre: 'Devis Gratuit',
                description: 'Devis détaillé et personnalisé gratuit, sans engagement de votre part.',
                couleur: 'from-blue-500 to-cyan-500',
              },
            ].map((garantie, index) => {
              const IconComponent = garantie.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-100 rounded-2xl p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2 text-center"
                  style={{
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${garantie.couleur} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-orbitron text-gray-900 mb-4">
                    {garantie.titre}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {garantie.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Section CTA Finale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-mauve-profond to-bleu-gris rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold font-orbitron text-white mb-4">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                N'attendez plus, contactez-nous dès maintenant et transformons ensemble vos idées en réalité
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-mauve-profond rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg inline-flex items-center gap-2"
                onClick={() => {
                  document.getElementById('nom')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  setTimeout(() => document.getElementById('nom')?.focus(), 500)
                }}
              >
                Remplir le formulaire
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
