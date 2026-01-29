<template>
  <section class="about">
    <div class="container">

      <!-- PHOTO -->
      <div class="photo-wrapper framed">
        <img src="/image/profile.webp" alt="Photo de Armel" class="photo" />
      </div>

      <!-- TEXTE -->
      <div class="content">
        <h2>À propos de moi</h2>

        <p class="intro">
          Je m’appelle <strong>Armel</strong>, développeur web passionné par la création
          d’expériences modernes, élégantes et performantes.  
          J’aime concevoir des interfaces propres, minimalistes et centrées sur l’utilisateur.
        </p>

        <p>
          Mon approche est simple : comprendre le besoin, structurer la solution,
          et livrer un produit clair, efficace et agréable à utiliser.
          Je travaille principalement avec <strong>Vue.js</strong>, <strong>React</strong>,
          et des API backend légères comme <strong>Flask</strong>.
        </p>

        <p>
          J’accorde une grande importance à la qualité du code, à la lisibilité,
          et à la cohérence visuelle.  
          Chaque projet est pour moi l’occasion d’apprendre, d’expérimenter
          et d’aller plus loin dans le design et la technique.
        </p>

      </div>
    </div>

    <!-- COMPÉTENCES TECHNIQUES -->
    <div class="skills-section">
      <div class="skills-container">
        <h2 class="skills-title">Compétences Techniques</h2>
        
        <div class="skills-grid">
          <!-- Front-end -->
          <div class="skill-card">
            <div class="skill-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 class="skill-card__title">Front-end</h3>
            <ul class="skill-card__list">
              <li>HTML5 / CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Vue.js</li>
            </ul>
          </div>

          <!-- Back-end -->
          <div class="skill-card">
            <div class="skill-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <h3 class="skill-card__title">Back-end</h3>
            <ul class="skill-card__list">
              <li>PHP</li>
              <li>Node.js</li>
              <li>Laravel</li>
              <li>Express</li>
            </ul>
          </div>

          <!-- Base de données -->
          <div class="skill-card">
            <div class="skill-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <h3 class="skill-card__title">Base de données</h3>
            <ul class="skill-card__list">
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <!-- Outils -->
          <div class="skill-card">
            <div class="skill-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3 class="skill-card__title">Outils</h3>
            <ul class="skill-card__list">
              <li>Git / GitHub</li>
              <li>VSCode</li>
              <li>Postman</li>
              <li>Trello</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about {
  padding: 80px 40px;
  color: #e5e5e5;
}

.container {
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: auto;
  flex-wrap: wrap;
}

/* PHOTO */
.photo-wrapper {
  flex: 1;
  min-width: 260px;
  max-width: 350px;
}

.photo {
  width: 100%;
  border-radius: 12px;
  filter: grayscale(100%) contrast(1.1);
  object-fit: cover;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
}

.framed {
  padding: 12px;
  border-radius: 14px;
  background: #111;
  border: 2px solid #2a2a2a;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.45);
}

.framed .photo {
  width: 100%;
  border-radius: 10px;
  filter: grayscale(100%) contrast(1.15);
}



/* TEXTE */
.content {
  flex: 2;
  min-width: 300px;
}

h2 {
  font-size: 2.4rem;
  margin-bottom: 20px;
}

.intro {
  font-size: 1.15rem;
  margin-bottom: 20px;
  opacity: 0.9;
}

p {
  margin-bottom: 18px;
  line-height: 1.6;
  opacity: 0.85;
}

/* COMPÉTENCES TECHNIQUES */
.skills-section {
  margin-top: 6rem;
  padding: 4rem 2rem;
  background: linear-gradient(180deg, transparent 0%, hsla(0, 0%, 8%, 0.4) 100%);
}

.skills-container {
  max-width: 1200px;
  margin: 0 auto;
}

.skills-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  color: var(--foreground);
  font-weight: 700;
  letter-spacing: -0.025em;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: var(--card);
  border: 1px solid hsla(0, 0%, 15%, 0.5);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.skill-card:hover {
  border-color: hsla(0, 0%, 25%, 0.8);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.skill-card__icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondary);
  border-radius: var(--radius);
  margin-bottom: 1.5rem;
  color: var(--foreground);
}

.skill-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--foreground);
}

.skill-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-card__list li {
  padding: 0.5rem 0;
  color: var(--muted-foreground);
  font-size: 0.9375rem;
  position: relative;
  padding-left: 1.25rem;
}

.skill-card__list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--muted-foreground);
  opacity: 0.5;
}

@media (max-width: 768px) {
  .skills-section {
    padding: 3rem 1rem;
    margin-top: 4rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skill-card {
    padding: 1.5rem;
  }
}
</style>
