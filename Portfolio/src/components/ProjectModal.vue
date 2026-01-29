<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <button class="modal-close" @click="closeModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">{{ project.title }}</h2>
            <p class="modal-subtitle">{{ project.description }}</p>
          </div>

          <div class="modal-body">
            <div class="modal-section">
              <h3 class="section-title">Contexte</h3>
              <p class="section-text">{{ project.context }}</p>
            </div>

            <div class="modal-section">
              <h3 class="section-title">Objectif</h3>
              <ul class="section-list">
                <li v-for="(obj, index) in project.objective" :key="index">{{ obj }}</li>
              </ul>
            </div>

            <div class="modal-section">
              <h3 class="section-title">Défis techniques</h3>
              <ul class="section-list">
                <li v-for="(challenge, index) in project.challenges" :key="index">{{ challenge }}</li>
              </ul>
            </div>

            <div class="modal-section">
              <h3 class="section-title">Fonctionnalités développées</h3>
              <ul class="section-list">
                <li v-for="(feature, index) in project.features" :key="index">{{ feature }}</li>
              </ul>
            </div>

            <div class="modal-section">
              <h3 class="section-title">Technologies utilisées</h3>
              <div class="tags">
                <span v-for="tech in project.technologies" :key="tech" class="tag">{{ tech }}</span>
              </div>
            </div>

            <div class="modal-section">
              <h3 class="section-title">Rôle & Équipe</h3>
              <p class="section-text"><strong>Rôle :</strong> {{ project.role }}</p>
              <p class="section-text"><strong>Équipe :</strong> {{ project.team }}</p>
            </div>
          </div>

          <div class="modal-footer">
            <a 
              v-if="project.github" 
              :href="project.github" 
              target="_blank" 
              class="btn-github"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Voir le code source
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: hsla(0, 0%, 0%, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  overflow-y: auto;
}

.modal-container {
  position: relative;
  background: var(--card);
  border-radius: var(--radius-xl);
  border: 1px solid hsla(0, 0%, 15%, 0.5);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px hsla(0, 0%, 0%, 0.5);
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsla(0, 0%, 15%, 0.5);
  border: 1px solid hsla(0, 0%, 15%, 0.5);
  border-radius: var(--radius-lg);
  color: var(--muted-foreground);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.modal-close:hover {
  background: hsla(0, 0%, 20%, 0.8);
  color: var(--foreground);
  border-color: var(--border);
}

.modal-content {
  padding: 2.5rem;
}

.modal-header {
  margin-bottom: 2rem;
  padding-right: 3rem;
}

.modal-title {
  font-size: clamp(1.75rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 0.75rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modal-subtitle {
  font-size: 1rem;
  color: var(--muted-foreground);
  line-height: 1.6;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.modal-section {
  padding-bottom: 2rem;
  border-bottom: 1px solid hsla(0, 0%, 15%, 0.3);
}

.modal-section:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.75rem;
}

.section-text {
  font-size: 0.9375rem;
  color: var(--muted-foreground);
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.section-text:last-child {
  margin-bottom: 0;
}

.section-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.section-list li {
  font-size: 0.9375rem;
  color: var(--muted-foreground);
  line-height: 1.7;
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.section-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: 600;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.375rem 0.875rem;
  font-size: 0.8125rem;
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  border-radius: 9999px;
  border: 1px solid hsla(0, 0%, 15%, 0.5);
  font-weight: 500;
}

.modal-footer {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid hsla(0, 0%, 15%, 0.3);
}

.btn-github {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: var(--primary);
  color: var(--primary-foreground);
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--primary);
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-github:hover {
  background: hsl(from var(--primary) h s calc(l * 1.1));
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95);
}

/* Responsive */
@media (max-width: 768px) {
  .modal-content {
    padding: 2rem 1.5rem;
  }

  .modal-header {
    padding-right: 2.5rem;
  }

  .modal-close {
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
  }

  .modal-body {
    gap: 1.5rem;
  }

  .modal-section {
    padding-bottom: 1.5rem;
  }
}
</style>
