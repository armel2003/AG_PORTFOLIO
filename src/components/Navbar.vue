<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <router-link to="/" class="logo">
          <span class="logo-text">armel giordanni</span>
        </router-link>
      </div>
      
      <button class="navbar-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="navbar-menu" :class="{ active: isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">Accueil</router-link>
        <router-link to="/about" class="nav-link" @click="closeMenu">À propos</router-link>
        <router-link to="/projects" class="nav-link" @click="closeMenu">Projects</router-link>
        <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  background: var(--dark-bg-secondary);
  border-bottom: 2px solid var(--primary-color);
  box-shadow: 0 2px 20px rgba(196, 30, 58, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand .logo {
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.logo-text {
  background: var(--gradient-gold-red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: var(--transition);
}

.logo-text:hover {
  filter: brightness(1.3);
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.navbar-toggle span {
  width: 28px;
  height: 3px;
  background: var(--gradient-gold-red);
  margin: 4px 0;
  transition: 0.3s;
  border-radius: 3px;
}

.navbar-toggle.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-6px, 7px);
  background: var(--secondary-color);
}

.navbar-toggle.active span:nth-child(2) {
  opacity: 0;
}

.navbar-toggle.active span:nth-child(3) {
  transform: rotate(45deg) translate(-6px, -7px);
  background: var(--secondary-color);
}

.navbar-menu {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 600;
  transition: var(--transition);
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--gradient-gold-red);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--secondary-color);
  background-color: rgba(196, 30, 58, 0.1);
}

.nav-link:hover::before {
  width: 60%;
}

.nav-link.router-link-active {
  color: var(--secondary-color);
  background: rgba(196, 30, 58, 0.15);
  font-weight: 700;
}

.nav-link.router-link-active::before {
  width: 60%;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    height: 100vh;
    background: var(--dark-bg);
    border-left: 2px solid var(--primary-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.4s ease;
    box-shadow: -10px 0 30px rgba(196, 30, 58, 0.4);
  }

  .navbar-menu.active {
    right: 0;
  }

  .nav-link {
    font-size: 1.5rem;
    width: 80%;
    text-align: center;
  }
}
</style>
