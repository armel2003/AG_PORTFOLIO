<template>
  <header class="navbar">
    <router-link to="/" class="logo">
      <span class="logo-text">Armel</span>
      <span class="logo-dot">.dev</span>
    </router-link>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/projects">Projets</router-link>
      <router-link to="/about">À propos</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <div class="navbar__cta">
      <router-link to="/contact" class="btn-contact">
        Me contacter
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 3rem;
  border-bottom: 1px solid hsla(0, 0%, 15%, 0.5);
  background: hsla(0, 0%, 4%, 0.8);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
}

.logo {
  font-weight: 600;
  font-size: 1.125rem;
  letter-spacing: -0.025em;
  color: var(--foreground);
  position: absolute;
  left: 3rem;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.logo:hover {
  opacity: 0.8;
}

.logo::after {
  display: none !important;
}

.logo-text {
  color: var(--foreground);
}

.logo-dot {
  color: var(--foreground);
  opacity: 0.4;
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  color: var(--muted-foreground);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.navbar__cta {
  position: absolute;
  right: 3rem;
}

.btn-contact {
  padding: 0.425rem 1rem;
  margin: 1rem;
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: var(--radius);
  background: var(--foreground);
  color: var(--background);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: inline-block;
}

.btn-contact::after {
  display: none;
}

.btn-contact:hover {
  background: var(--muted-foreground);
  color: var(--background);
  transform: translateY(-2px);
}

.btn-contact.router-link-active {
  background: var(--foreground);
  color: var(--background);
}

a {
  color: var(--muted-foreground);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 400;
  position: relative;
  transition: color 0.3s ease;
}

a::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--foreground);
  transition: width 0.3s ease;
}

a:hover {
  color: var(--foreground);
}

a:hover::after {
  width: 100%;
}

.router-link-active {
  color: var(--foreground);
}

.router-link-active::after {
  width: 100%;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 1.5rem;
    justify-content: space-between;
  }
  
  .logo {
    position: static;
  }

  .navbar__cta {
    position: static;
  }
  
  nav {
    gap: 1.25rem;
    font-size: 0.8rem;
  }
}
</style>
