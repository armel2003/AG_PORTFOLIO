<template>
  <section class="contact">
    <!-- Background glow -->
    <div class="glow-effect"></div>

    <div class="contact-container">
      <div class="contact-wrapper">
        <!-- Header -->
        <div class="header">
          <p class="label">Contact</p>
          <h2 class="title">
            Travaillons <span class="text-gradient">ensemble</span>
          </h2>
        </div>

        <div class="content-grid">
          <!-- Contact info -->
          <div class="info-section">
            <p class="description">
              Vous avez un projet en tête ? N'hésitez pas à me contacter 
              pour discuter de vos idées et voir comment je peux vous aider.
            </p>

            <div class="contact-cards">
              <!-- Email card -->
              <div class="contact-card">
                <div class="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <p class="card-label">Email</p>
                  <p class="card-value">armelgiordanni80@gmail.com</p>
                </div>
              </div>

              <!-- Location card -->
              <div class="contact-card">
                <div class="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p class="card-label">Localisation</p>
                  <p class="card-value">France</p>
                </div>
              </div>

              <!-- Téléphone card -->
              <div class="contact-card">
                <div class="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.38 2.39.73 3.5a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c1.11.35 2.29.6 3.5.73a2 2 0 0 1 1.71 2.18Z"></path>
                  </svg>
                </div>
                <div>
                  <p class="card-label">Téléphone</p>
                  <p class="card-value">+33 6 95 92 48 81</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact form -->
          <form class="form" @submit.prevent="handleSubmit">
            <div v-if="submitMessage" :class="['submit-message', submitStatus]">
              {{ submitMessage }}
            </div>

            <div class="form-field">
              <input
                type="text"
                v-model="form.name"
                placeholder="Votre nom"
                :disabled="isSubmitting"
                class="form-input"
              />
            </div>

            <div class="form-field">
              <input
                type="email"
                v-model="form.email"
                placeholder="Votre email"
                :disabled="isSubmitting"
                class="form-input"
              />
            </div>

            <div class="form-field">
              <textarea
                rows="4"
                v-model="form.message"
                placeholder="Votre message"
                :disabled="isSubmitting"
                class="form-input form-textarea"
              ></textarea>
            </div>

            <button type="submit" class="form-button" :disabled="isSubmitting">
              <span>{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="send-icon">
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { validateForm, sendEmail } from '../services/emailService'

export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitMessage: '',
      submitStatus: ''
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      this.submitMessage = ''
      
      // Validation du formulaire
      const errors = validateForm(this.form)
      if (errors.length > 0) {
        this.submitMessage = errors.join('. ')
        this.submitStatus = 'error'
        this.isSubmitting = false
        return
      }
      
      try {
        // Envoi de l'email via EmailJS
        const result = await sendEmail(this.form)
        
        if (result.success) {
          this.submitMessage = '✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
          this.submitStatus = 'success'
          
          // Réinitialiser le formulaire
          this.form = {
            name: '',
            email: '',
            message: ''
          }
          
          // Effacer le message après 5 secondes
          setTimeout(() => {
            this.submitMessage = ''
          }, 5000)
        } else {
          throw new Error('Erreur lors de l\'envoi')
        }
        
      } catch (error) {
        console.error('Erreur lors de l\'envoi:', error)
        this.submitMessage = '❌ Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement par email.'
        this.submitStatus = 'error'
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

/* Background glow effect */
.glow-effect {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 500px;
  height: 500px;
  background: var(--muted);
  opacity: 0.1;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
}

.contact-wrapper {
  max-width: 64rem;
  margin: 0 auto;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 4rem;
}

.label {
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted-foreground);
  margin-bottom: 1rem;
  font-weight: 400;
}

.title {
  font-size: clamp(1.875rem, 4vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--foreground);
}

/* Content grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Info section */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.description {
  color: var(--muted-foreground);
  line-height: 1.7;
  font-size: 1rem;
}

.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-icon {
  width: 3rem;
  height: 3rem;
  background: var(--secondary);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--foreground);
  flex-shrink: 0;
}

.card-label {
  font-size: 0.875rem;
  color: var(--muted-foreground);
  margin-bottom: 0.25rem;
}

.card-value {
  color: var(--foreground);
  font-weight: 500;
}

/* Form */
.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  background: hsla(0, 0%, 10%, 0.5);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  color: var(--foreground);
  font-size: 0.9375rem;
  font-family: inherit;
  transition: all 0.2s ease;
  outline: none;
}

.form-input::placeholder {
  color: var(--muted-foreground);
}

.form-input:focus {
  border-color: hsla(0, 0%, 95%, 0.3);
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-textarea {
  resize: none;
  min-height: 120px;
}

.form-button {
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.form-button:hover:not(:disabled) {
  background: hsla(0, 0%, 95%, 0.9);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.form-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.send-icon {
  transition: transform 0.3s ease;
}

.form-button:hover:not(:disabled) .send-icon {
  transform: translateX(4px);
}

/* Submit message */
.submit-message {
  padding: 1rem;
  border-radius: var(--radius);
  font-size: 0.9375rem;
  text-align: center;
  animation: fade-in 0.3s ease;
}

.submit-message.success {
  background: hsla(142, 76%, 36%, 0.2);
  border: 1px solid hsla(142, 76%, 36%, 0.5);
  color: hsl(142, 76%, 56%);
}

.submit-message.error {
  background: hsla(0, 84%, 60%, 0.2);
  border: 1px solid hsla(0, 84%, 60%, 0.5);
  color: hsl(0, 84%, 70%);
}

/* Responsive */
@media (max-width: 768px) {
  .contact {
    padding: 5rem 0;
  }

  .header {
    margin-bottom: 3rem;
  }

  .content-grid {
    gap: 2.5rem;
  }
}
</style>
