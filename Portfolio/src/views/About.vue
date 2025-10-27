<template>
  <section id="about" class="section about">
    <div class="container">
      <h2 class="section-title scroll-reveal">À propos de moi</h2>
      <div class="about-content">
        <div class="about-text scroll-reveal">
          <p>
            Développeur web <span class="highlight">full-stack passionné.</span> Mon objectif est d'aquérire des expériences
                    numériques uniques et performantes et une expertise en front-end comme en back-end, je m’adapte à
                    chaque projet pour offrir des solutions sur mesure.
          </p>
          <p>
            Actuellement en deuxième année de parcours à la <span class="highlight">web@cademie by epitech</span>, je me tiens constamment à jour sur les
                    dernières tendances
                    technologiques pour fournir un travail de qualité, sécurisé et optimisé pour le web moderne.
          </p>
          <p>
            Mon approche combine <span class="highlight">créativité</span>, 
            <span class="highlight">performance technique</span> et 
            <span class="highlight">attention aux détails</span> pour livrer des projets qui dépassent les attentes.
          </p>
        </div>
        <div class="skills-grid scroll-reveal">
          <div 
            v-for="skill in skills" 
            :key="skill.name" 
            class="skill-item"
          >
            <span class="skill-icon">{{ skill.icon }}</span>
            <div class="skill-name">{{ skill.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      skills: [
        { icon: '🌐', name: 'HTML5' },
        { icon: '🎨', name: 'CSS3' },
        { icon: '⚡', name: 'JavaScript' },
        { icon: '⚛️', name: 'React' },
        { icon: '🚀', name: 'Node.js' },
        { icon: '🐘', name: 'PHP' },
        { icon: '🗄️', name: 'MySQL' },
        { icon: '🔧', name: 'Git' }
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
.about {
  background: var(--dark-bg);
  padding: 5rem 2rem;
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient-gold-red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text {
  background: var(--dark-bg-secondary);
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid var(--dark-bg-tertiary);
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease;
}

.about-text:hover {
  border-color: var(--primary-color);
  box-shadow: 0 10px 40px rgba(196, 30, 58, 0.3);
}

.about-text p {
  font-size: 1.15rem;
  line-height: 1.9;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  text-align: justify;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.highlight {
  color: var(--secondary-color);
  font-weight: 700;
  position: relative;
  background: var(--gradient-gold-red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.skill-item {
  background: var(--dark-bg-secondary);
  padding: 1rem;
  border-radius: 15px;
  border: 2px solid var(--dark-bg-tertiary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.4s ease;
  cursor: pointer;
  box-shadow: var(--shadow-md);
}

.skill-item:hover {
  transform: translateY(-10px) scale(1.05);
  border-color: var(--primary-color);
  background: var(--gradient-primary);
  box-shadow: 0 15px 40px rgba(196, 30, 58, 0.4), 0 0 30px rgba(255, 215, 0, 0.2);
}

.skill-icon {
  font-size: 3.5rem;
  transition: all 0.4s ease;
  filter: drop-shadow(0 4px 8px rgba(255, 215, 0, 0.3));
}

.skill-item:hover .skill-icon {
  transform: rotateY(360deg) scale(1.2);
  filter: drop-shadow(0 8px 16px rgba(255, 215, 0, 0.6));
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.skill-item:hover .skill-name {
  color: var(--secondary-color);
  transform: scale(1.1);
}

/* Responsive */
@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .about {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-text {
    padding: 1.5rem;
  }

  .about-text p {
    font-size: 1rem;
    text-align: left;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .skill-item {
    padding: 1.5rem;
  }

  .skill-icon {
    font-size: 2.5rem;
  }

  .skill-name {
    font-size: 0.95rem;
  }
}
</style>

