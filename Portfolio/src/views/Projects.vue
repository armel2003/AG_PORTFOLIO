<template>
  <section class="projects">
    <div class="projects__glow"></div>
    
    <div class="projects__container">
      <div class="projects__header">
        <div class="projects__label">Portfolio</div>
        <h2 class="projects__title">Mes projets</h2>
      </div>

      <div class="projects__grid">
        <ProjectCard
          v-for="p in projects"
          :key="p.title"
          :title="p.title"
          :description="p.description"
          :image="p.image"
          :tags="p.tags"
          @view-details="openModal(p)"
        />
      </div>
    </div>

    <ProjectModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectModal from '../components/ProjectModal.vue'

const isModalOpen = ref(false)
const selectedProject = ref({})

const openModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const projects = [
  {
    title: "Previously_ON",
    description: "Application web permettant la gestion et suivi des séries/films via l'API BetaSeries",
    image: "/image/Previously.png",
    tags: ["Vue.js", "Flask", "API", "UX"],
    context: "Projet academique réalisé dans le cadre du module de spécialisation visant à explorer de nouvelles technologiies et frameworks. l'objectif était de sortir des technologies habituelles (PHP et React) pour découvrir et maîtriser une nouvelle stack technique tout en développent une application compète et fonctionnelle.",
    objective: [
      "Maîtriser une nouvelle stack technologique non utilisé auparavant.",
      "Intégrer et exploiter une API (BetaSeries) avec authentification OAuth.",
      "Créer une expérience utilisateur fluide et intuitive pour la gestion de contenue."
    ],


    challenges: [
      "Authentification OAuth (Implémentation du flux d'authentification OAuth 2.0 avec BetaSeries incluant la gestion sécurisée des tokens, le refresh automatique, et la protection des données utilisateur)",
      "Gestion détat complexe (Syntronisation de l'état de l'application entre les données loclales et l'API)",
      "Appel API ( Agrégation de données provenant de multiples endpoints de l'API BetaSeries pour fournir une vue cohérente et complète des séries et films (détails, épisodes, saisons, etc.) )"
    ],
    features: [
      "Authentification utilisateur via BetaSeries OAuth",
      "Recherche de séries via une API externe avec filtrage en temps réel",
      "Exploration (Pages dédiées pour réries et films avec affichage en grille(image, titre, note))",
      "Interface utilisateur intuitive et responsive",
      "Fiches détaillées pour chaque série/film avec informations complètes",
    ],
    technologies: ["Vue.js", "Flask", "OAuth 2.0", "CSS3", "JavaScript"],
    role: "Développeur Full-Stack",
    team: "Projet solo",
    github: "https://github.com/armel2003/Previously_ON"
  },
  {
    title: "Clone_Spotify",
    description: "Clone de l'interface Spotify avec fonctionnalités de lecture musicale.",
    image: "/image/spotify.jpg",
    tags: ["React", "API", "UI/UX"],
    context: "Recréation de l'interface utilisateur de Spotify pour apprendre React et l'intégration d'API musicales.",
    objective: "Développer une application web musicale complète avec lecture audio et gestion de playlists.",
    challenges: [
      "Reproduction fidèle de l'interface Spotify",
      "Intégration de l'API Spotify pour les données musicales",
      "Gestion de l'état global avec Redux"
    ],
    features: [
      "Lecture de musique en streaming",
      "Création et gestion de playlists",
      "Recherche d'artistes et d'albums",
      "Lecteur audio personnalisé"
    ],
    technologies: ["React", "Redux", "Spotify API", "CSS3", "JavaScript"],
    role: "Développeur Front-End",
    team: "Projet solo",
    github: "https://github.com/armel2003/Clone_Spotify"
  },
  {
    title: "Morpion",
    description: "Jeu de Morpion (Tic-Tac-Toe) interactif avec IA.",
    image: "/image/Morpion.png",
    tags: ["Vue.js", "Game", "Algorithm"],
    context: "Développement d'un jeu de morpion classique avec une intelligence artificielle comme adversaire.",
    objective: "Créer un jeu interactif avec différents niveaux de difficulté et une IA compétitive.",
    challenges: [
      "Implémentation de l'algorithme Minimax pour l'IA",
      "Optimisation des performances de calcul de l'IA",
      "Création d'une interface ludique et responsive"
    ],
    features: [
      "Mode joueur vs IA avec 3 niveaux de difficulté",
      "Mode 2 joueurs en local",
      "Historique des parties",
      "Animations fluides des coups"
    ],
    technologies: ["Vue.js", "JavaScript", "Algorithm Minimax", "CSS3"],
    role: "Développeur Full-Stack",
    team: "Projet solo",
    github: "https://github.com/armel2003/Morpion"
  },
  {
    title: "My_IRC",
    description: "Application de chat en temps réel inspirée d'IRC.",
    image: "/image/IRC.png",
    tags: ["Node.js", "WebSocket", "Real-time"],
    context: "Création d'une application de messagerie instantanée avec canaux et messages privés.",
    objective: "Développer un système de chat temps réel avec gestion de multiples canaux et utilisateurs.",
    challenges: [
      "Implémentation de WebSockets pour la communication temps réel",
      "Gestion des connexions multiples et de la scalabilité",
      "Sécurisation des messages et authentification"
    ],
    features: [
      "Chat en temps réel avec WebSocket",
      "Création et gestion de canaux",
      "Messages privés entre utilisateurs",
      "Système d'authentification"
    ],
    technologies: ["Node.js", "Socket.io", "Express", "MongoDB", "Vue.js"],
    role: "Développeur Full-Stack",
    team: "Équipe de 2 développeurs",
    github: "https://github.com/armel2003/My_IRC"
  },
  {
    title: "MY_H5AI",
    description: "Gestionnaire de fichiers web moderne et élégant.",
    image: "/image/H5AI.png",
    tags: ["PHP", "File Manager", "UI"],
    context: "Développement d'un explorateur de fichiers web avec prévisualisation et gestion avancée.",
    objective: "Créer une interface moderne pour naviguer et gérer des fichiers sur un serveur web.",
    challenges: [
      "Gestion sécurisée des accès aux fichiers",
      "Prévisualisation de multiples types de fichiers",
      "Optimisation du chargement pour les gros répertoires"
    ],
    features: [
      "Navigation intuitive dans l'arborescence",
      "Prévisualisation d'images, vidéos et documents",
      "Upload et téléchargement de fichiers",
      "Interface responsive et moderne"
    ],
    technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"],
    role: "Développeur Full-Stack",
    team: "Projet solo",
    github: "https://github.com/armel2003/MY_H5AI"
  },
  {
    title: "Pentakeys",
    description: "Plateforme e-commerce de vente de claviers mécaniques personnalisés.",
    image: "/image/Pentakeys.png",
    tags: ["E-commerce", "Vue.js", "Stripe"],
    context: "Création d'une boutique en ligne spécialisée dans les claviers mécaniques haut de gamme.",
    objective: "Développer une plateforme e-commerce complète avec paiement sécurisé et gestion des stocks.",
    challenges: [
      "Intégration du système de paiement Stripe",
      "Gestion complexe des variantes de produits",
      "Optimisation des performances avec un grand catalogue"
    ],
    features: [
      "Catalogue de produits avec filtres avancés",
      "Panier et processus de commande complet",
      "Paiement sécurisé avec Stripe",
      "Tableau de bord administrateur",
      "Système de gestion des stocks"
    ],
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Stripe API", "JWT"],
    role: "Développeur Full-Stack",
    team: "Équipe de 3 développeurs",
    github: "https://github.com/armel2003/Pentakeys"
  }
]
</script>

<style scoped>
.projects {
  padding: 8rem 0;
  position: relative;
}

.projects__glow {
  position: absolute;
  top: 50%;
  left: 0;
  width: 400px;
  height: 400px;
  background-color: hsla(0, 0%, 15%, 0.08);
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.projects__container {
  position: relative;
  z-index: 10;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.projects__header {
  text-align: center;
  margin-bottom: 4rem;
}

.projects__label {
  font-size: 0.875rem;
  color: var(--muted-foreground);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 400;
}

.projects__title {
  font-size: clamp(1.875rem, 4vw, 2.25rem);
  font-weight: 700;
  color: var(--foreground);
  letter-spacing: -0.025em;
}

.projects__grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .projects__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 5rem 0;
  }
  
  .projects__header {
    margin-bottom: 3rem;
  }
}
</style>
