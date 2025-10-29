<template>
  <section id="projects" class="section projects">
    <div class="container">
      <h2 class="section-title scroll-reveal">Mes Projects</h2>
      <p class="projects-intro scroll-reveal">
        Découvrez une sélection de mes projets récents qui démontrent mes compétences en développement web.
      </p>

      <div class="projects-grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="projects-item scroll-reveal"
        >
          <div class="projects-image">
            <div class="image-placeholder" :style="{ backgroundImage: project.image ? `url(${project.image})` : 'none' }">
              <span v-if="!project.image" class="project-icon">{{ project.icon }}</span>
            </div>
            <div class="projects-overlay">
              <a :href="project.link" target="_blank" class="btn-view">
                Voir le projet
              </a>
            </div>
          </div>
          <div class="projects-content">
            <h3 class="projects-title">{{ project.title }}</h3>
            <p class="projects-description">{{ project.description }}</p>
            <div class="projects-tags">
              <span
                v-for="tag in project.tags"
                :key="tag" 
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Morpion',
          description: 'Morpion — une application web jouable (Tic‑Tac‑Toe) développée en React. Permet parties à deux joueurs ou contre une IA configurable (choix du marqueur X/O et difficulté).',
          image: '/projects/Morpion.png',
          tags: ['React.js', 'JavaScript', 'CSS'],
          link: '#'
        },
        {
          id: 2,
          title: 'Pentakeys',
          description: 'Consiste à Développer une boutique en ligne spécialisée dans la vente de cartes de monnaies virtuelles et de jeux vidéo dématérialisés, avec une expérience utilisateur fluide, sécurisée et optimisée pour les achats numériques.',
          image: '/projects/Pentakeys.png',
          tags: ['React', 'Symfony 4.x'],
          link: '#'
        },
        {
          id: 3,
          title: 'Préviously_On',
          description: `est une application web (ou mobile) connectée à l’API BetaSeries, une plateforme dédiée aux séries et aux films. L’idée est de créer une interface moderne permettant à un utilisateur de retrouver ce qu’il regarde, de suivre sa progression et d’interagir avec ses amis. En gros, c’est un mini-Netflix social couplé à un tracker d’épisodes.`,
          image: '/projects/Previously.png',
          tags: ['Vue.js'],
          link: '#'
        },
        {
          id: 4,
          title: 'My_IRC',
          description: 'Le projet consiste à développer un serveur IRC (Internet Relay Chat) moderne. L objectif est de permettre à plusieurs utilisateurs de discuter en temps réel via des channels, tout en respectant des contraintes techniques et fonctionnelles précises.',
          image: '/projects/irc.png',
          tags: ['React', 'Express', 'Node.js', 'Socket.io'],
          link: '#'
        },
        {
          id: 5,
          title: 'Clone_Spotify',
          description: 'Le project consiste a créer un lecteur multimédia en ligne en React, qui consomme une API locale (fournie via Docker). Le site permettra de naviguer dans une base de données musicale : albums, artistes, genres… et d’écouter des morceaux via un lecteur.',
          image: '/projects/spotify.jpg',
          tags: ['React.js', 'JavaScript', 'API REST', 'Docker', 'JSON'],
          link: '#'
        },
        {
          id: 6,
          title: 'MY_H5AI',
          description: 'Créer un indexeur de fichiers pour serveurs web HTTP, qui reproduit le comportement de h5ai (un explorateur de fichiers web moderne). L’outil doit permettre de naviguer dans une arborescence de fichiers via une interface web dynamique, avec des fonctionnalités avancées comme le tri, la recherche, les tags, et la visualisation.',
          image: '/projects/h5ai.png',
          tags: ['Node.js', 'Express', 'Python'],
          link: '#'
        }
      ]
    }
  },
  mounted() {
    this.initScrollReveal();
  },
  methods: {
    initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
      });
    }
  }
}
</script>

<style scoped>
.projects {
  position: relative;
  background-image: url('/background-twitter.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 80px 20px;
  min-height: calc(100vh - 200px);
}

.projects::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.92) 100%);
  z-index: 1;
}

.projects .container {
  position: relative;
  z-index: 2;
}

.projects-intro {
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.8;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.projects-item {
  border: 2px solid var(--dark-bg-tertiary);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 520px;
}

.projects-item:hover {
  transform: translateY(-10px);
  border-color: var(--primary-color);
  box-shadow: 0 15px 40px rgba(196, 30, 58, 0.4), 0 0 30px rgba(255, 215, 0, 0.2);
}

.projects-image {
  position: relative;
  height: 280px;
  flex-shrink: 0;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}



.projects-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.projects-item:hover .projects-overlay {
  opacity: 1;
}

.btn-view {
  padding: 14px 35px;
  background: var(--gradient-secondary);
  color: var(--dark-bg);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
}

.btn-view:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(255, 215, 0, 0.6);
}

.projects-content {
  padding: 25px;
  background: var(--dark-bg-secondary);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.projects-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 15px;
  background: var(--gradient-gold-red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  min-height: 40px;
  display: flex;
  align-items: center;
}

.projects-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 90px;
}

.projects-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 70px;
  align-content: flex-start;
}

.tag {
  padding: 6px 14px;
  background: var(--gradient-primary);
  color: var(--text-color);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  white-space: nowrap;
}

.tag:hover {
  background: var(--gradient-gold-red);
  border-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-gold);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .projects-intro {
    font-size: 1rem;
    margin-bottom: 40px;
  }

  .projects {
    padding: 60px 20px;
  }
}
</style>
