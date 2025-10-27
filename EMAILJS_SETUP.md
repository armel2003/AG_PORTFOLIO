# Configuration EmailJS

Ce projet utilise EmailJS pour gérer l'envoi des emails depuis le formulaire de contact.

## Configuration actuelle

- **Public Key**: `1wa8D32EYBo9bOWdf`
- **Service ID**: `service_oai4yuy`
- **Template ID**: `template_opzcqvo`

## Fichiers concernés

1. **`src/services/emailService.js`** - Service d'envoi d'emails
2. **`src/views/Contact.vue`** - Page de contact utilisant le service

## Fonctionnalités

### Validation du formulaire
Le service valide automatiquement :
- Nom (minimum 2 caractères)
- Email (format valide)
- Sujet (minimum 3 caractères)
- Message (minimum 10 caractères)

### Envoi d'email
La fonction `sendEmail()` envoie les données suivantes :
- name
- email
- subject
- message

## Utilisation

```javascript
import { validateForm, sendEmail } from '@/services/emailService'

// Valider le formulaire
const errors = validateForm(formData)
if (errors.length > 0) {
  // Afficher les erreurs
}

// Envoyer l'email
const result = await sendEmail(formData)
if (result.success) {
  // Email envoyé avec succès
} else {
  // Erreur lors de l'envoi
}
```

## Personnalisation

Pour modifier la configuration EmailJS, éditez le fichier `src/services/emailService.js` :

```javascript
emailjs.init({
  publicKey: "VOTRE_PUBLIC_KEY",
});

// Dans la fonction sendEmail
await emailjs.send(
  "VOTRE_SERVICE_ID", 
  "VOTRE_TEMPLATE_ID", 
  templateParams
);
```

## Template EmailJS recommandé

Votre template EmailJS doit contenir les variables suivantes :
- `{{name}}` - Nom du contact
- `{{email}}` - Email du contact
- `{{subject}}` - Sujet du message
- `{{message}}` - Message du contact

## Installation

Le package @emailjs/browser est déjà installé :
```bash
npm install @emailjs/browser
```

## Dépannage

### L'email ne s'envoie pas
1. Vérifiez que votre Public Key est correcte
2. Vérifiez que le Service ID et Template ID correspondent à votre configuration EmailJS
3. Vérifiez la console pour les erreurs détaillées

### Erreur de CORS
Assurez-vous que votre domaine est autorisé dans les paramètres EmailJS.
