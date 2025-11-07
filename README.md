# Vorion Studio - Site Web Vitrine

Site web vitrine moderne pour Vorion Studio, spécialisé en développement de SaaS, applications mobiles, sites web, e-commerce et création digitale.

## 🎨 Caractéristiques

- **Design moderne** avec glassmorphisme et effets 3D
- **Palette de couleurs** : Fond gris clair avec pattern de grille, boutons mauve profond avec hover bleu-gris
- **Typographie** : Orbitron (Google Font) pour les titres
- **Animations** : Framer Motion pour des transitions fluides
- **FlipCards** : Cartes interactives avec effet de retournement
- **Layout responsive** : Sections en 2-3 colonnes de différentes tailles (style WordPress)

## 🚀 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📦 Technologies utilisées

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles utilitaires
- **Framer Motion** - Animations
- **Google Fonts** - Orbitron

## 📁 Structure du projet

```
├── app/
│   ├── layout.tsx       # Layout principal avec Google Fonts
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux et pattern de grille
├── components/
│   ├── Header.tsx       # Header sticky avec glassmorphisme
│   ├── Footer.tsx       # Footer avec effet 3D
│   ├── FlipCard.tsx     # Composant carte retournable
│   └── sections/
│       ├── Hero.tsx              # Section hero
│       ├── APropos.tsx           # Section à propos
│       ├── Services.tsx          # Section services avec flipcards
│       ├── Temoignages.tsx       # Section témoignages
│       ├── CommentCaMarche.tsx   # Section processus
│       └── ContactCTA.tsx        # Section CTA contact
└── package.json
```

## 🎯 Sections de la page d'accueil

1. **Hero** - Section d'accueil avec CTA
2. **À propos** - Présentation de Vorion Studio
3. **Services** - Ce que nous maîtrisons (avec flipcards)
4. **Témoignages** - Avis clients
5. **Comment ça marche** - Processus en 4 étapes
6. **Contact CTA** - Appel à l'action final

## 🎨 Palette de couleurs

- **Mauve profond** : `#6B46C1` (boutons principaux)
- **Bleu-gris** : `#64748B` (hover des boutons)
- **Gris clair** : `#F8FAFC` (fond avec pattern de grille)

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

