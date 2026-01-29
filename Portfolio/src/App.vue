<template>
  <div class="app">
    <ParticlesBackground />
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ParticlesBackground from './components/ParticulesBackground.vue'
</script>


<style scoped>
.app {
  min-height: 100vh;
  background: var(--background);
  color: var(--foreground);
  display: flex;
  flex-direction: column;
  position: relative;
}

main {
  flex: 1;
  position: relative;
  z-index: 1;
}
</style>
