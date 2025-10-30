<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Portfolio</h3>
          <p>Développeur passionné créant des expériences web modernes.</p>
        </div>

        <div class="footer-section">
          <h4>Navigation</h4>
          <ul class="footer-links">
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/about">À propos</router-link></li>
            <li><router-link to="/projects">Projets</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact</h4>
          <ul class="footer-links">
            <li><a href="mailto:armel.giordanni@email.com">Email</a></li>
            <li><a href="https://github.com/armel2003" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/armel-njikam-giordanni" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Portfolio. Tous droits réservés.</p>
        <p class="made-with">Fait avec <span class="heart">❤️</span> avec Vue.js</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background: var(--dark-bg-secondary);
  border-top: 2px solid var(--primary-color);
  color: var(--text-color);
  padding: 3rem 2rem 1rem;
  margin-top: auto;
  box-shadow: 0 -4px 20px rgba(196, 30, 58, 0.2);
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  background: var(--gradient-gold-red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.footer-section h4 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-section p {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.95rem;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
  display: inline-block;
  position: relative;
  padding-left: 20px;
}

.footer-links a::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--secondary-color);
  transform: translateX(5px);
}

.footer-links a:hover::before {
  color: var(--secondary-color);
}

.footer-bottom {
  border-top: 1px solid var(--primary-color);
  padding-top: 1.5rem;
  text-align: center;
}

.footer-bottom p {
  color: var(--text-secondary);
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.made-with {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text-secondary);
}

.heart {
  color: var(--primary-color);
  animation: heartbeat 1.5s ease-in-out infinite;
  filter: drop-shadow(0 0 8px var(--primary-color));
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 2rem 1rem 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-section {
    text-align: center;
  }

  .footer-links a {
    padding-left: 0;
  }

  .footer-links a::before {
    display: none;
  }
}
</style>
