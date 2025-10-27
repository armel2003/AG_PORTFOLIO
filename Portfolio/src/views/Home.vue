<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content scroll-reveal">
        <h1 class="hero-title">
          Bonjour, je suis <span class="gradient-text">{{ name }}</span>
        </h1>
        <h2 class="hero-subtitle">{{ title }}</h2>
        <p class="hero-description">{{ description }}</p>
        <div class="hero-buttons">
          <router-link to="/projects" class="btn btn-primary">
            Voir mes projets
          </router-link>
          <router-link to="/about" class="btn btn-secondary">
            En savoir plus
          </router-link>
        </div>
      </div>
      <div class="hero-image scroll-reveal">
        <div class="image-placeholder">
          <span class="emoji">👨‍💻</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      name: 'Armel Giordanni',
      title: 'Développeur Web Full-Stack',
      description: `Je suis un développeur web passionné par la création de sites et d'applications web modernes.
                J'aime transformer des idées créatives en réalités numériques performantes et esthétiques.`
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
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--gradient-primary);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  animation: backgroundScroll 20s linear infinite;
}

@keyframes backgroundScroll {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(60px, 60px);
  }
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  color: var(--text-color);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.gradient-text {
  background: var(--gradient-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.3);
  }
}

.hero-subtitle {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondary-color);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: var(--text-secondary);
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 16px 40px;
  border-radius: 50px;
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.4s ease;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-primary {
  background: var(--gradient-secondary);
  color: var(--dark-bg);
  box-shadow: var(--shadow-gold);
}

.btn-primary:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 35px rgba(255, 215, 0, 0.5);
}

.btn-secondary {
  background: transparent;
  color: var(--text-color);
  border: 2px solid var(--secondary-color);
}

.btn-secondary:hover {
  background: var(--secondary-color);
  color: var(--dark-bg);
  transform: translateY(-5px) scale(1.05);
  box-shadow: var(--shadow-gold);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-bg-tertiary) 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  border: 4px solid var(--secondary-color);
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.4), inset 0 0 40px rgba(196, 30, 58, 0.2);
  position: relative;
  overflow: hidden;
}

.image-placeholder::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, var(--secondary-color), transparent);
  opacity: 0.1;
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.emoji {
  font-size: 150px;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(255, 215, 0, 0.5));
  position: relative;
  z-index: 1;
}

@media (max-width: 968px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .image-placeholder {
    width: 300px;
    height: 300px;
  }

  .emoji {
    font-size: 120px;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .image-placeholder {
    width: 250px;
    height: 250px;
  }

  .emoji {
    font-size: 100px;
  }
}
</style>
