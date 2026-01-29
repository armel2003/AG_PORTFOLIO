import emailjs from '@emailjs/browser';

emailjs.init({
    publicKey: "1wa8D32EYBo9bOWdf",
});

export function validateForm(formData) {
    const errors = [];

    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Name is required.');
    }

    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !emailregex.test(formData.email)) {
        errors.push('Valid email is required.');
    }

    if (!formData.message || formData.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters.');
    }

    return errors;
}

export async function sendEmail(formData) {
    try {
        const response = await emailjs.send(
            "service_oai4yuy",
            "template_opzcqvo",
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }
        );

        return { success: true, response };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error };
    }
}

export default {
    validateForm,
    sendEmail
};