<template>
  <section class="hero">
    <div class="hero__content">
  
      <h1 class="hero__title">
        <span class="text-gradient">Armel Giordanni</span><br />
        Développeur Web Junior
      </h1>
      <p class="hero__description">
        Création d'expériences web élégantes, performantes et modernes.
      </p>

      <div class="hero__buttons">
        <router-link to="/projects" class="hero__btn hero__btn--primary">
          Voir mes projets
        </router-link>
        <a href="/image/ANG-CV.pdf.pdf" target="_blank" class="hero__btn hero__btn--cv">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Voir mon CV
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero__content {
  position: relative;
  z-index: 10;
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  padding: 0 1.5rem;
}



.hero__title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.025em;
  animation: fade-in 0.6s ease-out 0.4s forwards;
  opacity: 0;
}

.hero__description {
  font-size: 1.125rem;
  color: var(--muted-foreground);
  max-width: 42rem;
  margin: 0 auto 3rem;
  line-height: 1.6;
  animation: fade-in 0.6s ease-out 0.6s forwards;
  opacity: 0;
}

.hero__buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  animation: fade-in 0.6s ease-out 0.8s forwards;
  opacity: 0;
}

@media (min-width: 640px) {
  .hero__buttons {
    flex-direction: row;
  }
}

.hero__btn {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: var(--radius);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.hero__btn:hover {
  transform: scale(1.05);
}

.hero__btn--primary {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.hero__btn--primary:hover {
  background-color: hsla(0, 0%, 95%, 0.9);
  box-shadow: var(--shadow-glow);
}

.hero__btn--secondary {
  background-color: transparent;
  color: var(--foreground);
  border: 1px solid var(--border);
}

.hero__btn--secondary:hover {
  background-color: var(--secondary);
  border-color: hsla(0, 0%, 95%, 0.2);
}

.hero__btn--cv {
  background-color: transparent;
  color: var(--foreground);
  border: 1px solid var(--border);
}

.hero__btn--cv:hover {
  background-color: var(--secondary);
  border-color: hsla(0, 0%, 95%, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.hero__btn--cv .btn-icon {
  transition: transform 0.3s ease;
}

.hero__btn--cv:hover .btn-icon {
  transform: translateY(2px);
}

.hero__scroll:hover {
  color: var(--foreground);
}

.hero__scroll-text {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--muted-foreground), transparent);
  animation: bounce 2s ease-in-out infinite;
}

@media (max-width: 768px) {
  .hero {
    min-height: calc(100vh - 60px);
  }
  
  .hero__scroll {
    bottom: 1.5rem;
  }
}
</style>
