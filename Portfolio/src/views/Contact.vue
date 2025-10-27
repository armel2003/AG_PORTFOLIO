<template>
  <section class="contact">
    <div class="container">
      <h2 class="section-title">Travaillons Ensemble</h2>
      <div class="contact-content">
        <div class="contact-form">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Nom complet *</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required 
                placeholder="Votre nom"
              >
            </div>
            <div class="form-group">
              <label for="email">Adresse email *</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required 
                placeholder="votre@email.com"
              >
            </div>
            <div class="form-group">
              <label for="subject">Sujet du projet</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                placeholder="Ex: Création site e-commerce"
              >
            </div>
            <div class="form-group">
              <label for="message">Décrivez votre projet *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required 
                placeholder="Parlez-moi de votre projet, vos objectifs, votre budget et vos délais..."
              ></textarea>
            </div>
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>
            <div v-if="submitMessage" :class="['submit-message', submitStatus]">
              {{ submitMessage }}
            </div>
          </form>
        </div>
        <div class="contact-info">
          <h3>Discutons de nos futures collaborations</h3>
          <p>Vous avez une idée, un projet simplement ? Je serai ravi d'échanger avec vous pour comprendre les besoins et trouver de meilleures solutions.</p>
          
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <div>
                <strong>Localisation</strong><br>
                Paris, France
              </div>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <div>
                <strong>Email</strong><br>
                armelgiordanni80@email.com
              </div>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <div>
                <strong>Téléphone</strong><br>
                +33 6 95 92 48 81
              </div>
            </div>
          </div>
          
          <div class="social-links">
            <a href="https://github.com/armel2003" class="social-link" title="GitHub" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/armel-njikam-giordanni" class="social-link" title="LinkedIn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:armel.giordanni@email.com" class="social-link" title="Email" aria-label="Email">
               <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
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
            subject: '',
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
  padding: 4rem 2rem;
  min-height: calc(100vh - 200px);
  background: var(--dark-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient-gold-red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact-form {
  background: var(--dark-bg-secondary);
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid var(--dark-bg-tertiary);
  box-shadow: var(--shadow-lg);
  transition: border-color 0.3s ease;
}

.contact-form:hover {
  border-color: var(--primary-color);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.7rem;
  color: var(--secondary-color);
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: var(--dark-bg);
  border: 2px solid var(--dark-bg-tertiary);
  border-radius: 8px;
  font-size: 1rem;
  color: var(--text-color);
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(196, 30, 58, 0.2);
  background: var(--dark-bg-tertiary);
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 1.2rem;
  background: var(--gradient-secondary);
  color: var(--dark-bg);
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.4s ease;
  box-shadow: var(--shadow-gold);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.5);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
}

.submit-message.success {
  background-color: rgba(66, 185, 131, 0.2);
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
}

.submit-message.error {
  background-color: rgba(196, 30, 58, 0.2);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.contact-info {
  padding: 1rem;
}

.contact-info h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  background: var(--gradient-gold-red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #2c3e50;
}

.contact-info p {
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.contact-details {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--dark-bg-secondary);
  border: 2px solid var(--dark-bg-tertiary);
  border-radius: 10px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(8px);
  border-color: var(--primary-color);
  box-shadow: var(--shadow-lg);
}

.contact-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3));
}

.contact-item strong {
  color: var(--secondary-color);
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-item div {
  color: var(--text-secondary);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: var(--gradient-primary);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.8rem;
  transition: all 0.4s ease;
  box-shadow: var(--shadow-md);
  border: 2px solid transparent;
}

.social-link:hover {
  transform: translateY(-8px) rotate(360deg);
  box-shadow: var(--shadow-gold);
  border-color: var(--secondary-color);
  background: var(--gradient-gold-red);
}

.social-link i {
  color: var(--dark-bg);
}

/* Responsive */
@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    order: -1;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 2rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
  
  .contact-info h3 {
    font-size: 1.5rem;
  }
}
</style>
