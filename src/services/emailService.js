import emailjs from '@emailjs/browser';

// Initialisation d'EmailJS
emailjs.init({
  publicKey: "1wa8D32EYBo9bOWdf",
});

// Fonction pour valider le formulaire
export function validateForm(formData) {
  const errors = [];

  if (!formData.name || formData.name.trim().length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.push('Veuillez entrer une adresse email valide');
  }

  if (!formData.subject || formData.subject.trim().length < 3) {
    errors.push('Le sujet doit contenir au moins 3 caractères');
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères');
  }

  return errors;
}

// Fonction pour envoyer l'email
export async function sendEmail(formData) {
  try {
    const response = await emailjs.send(
      "service_oai4yuy", 
      "template_opzcqvo", 
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }
    );
    
    return { success: true, response };
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    return { success: false, error };
  }
}

export default {
  validateForm,
  sendEmail
};
