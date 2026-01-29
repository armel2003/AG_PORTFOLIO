<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__brand">
          <span class="footer__logo-bracket">&lt;</span>
          Portfolio
          <span class="footer__logo-bracket">/&gt;</span>
        </div>
        <p class="footer__copyright">
          © {{ new Date().getFullYear() }} Portfolio. Tous droits réservés.
        </p>
      </div>
      
      <div class="footer__social">
        <a href="https://github.com/armel2003" target="_blank" class="footer__social-link" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/armel-njikam-giordanni/" class="footer__social-link" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 3rem 3rem;
  border-top: 1px solid hsla(0, 0%, 15%, 0.5);
  margin-top: 5rem;
}

.footer__container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.footer__content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer__brand {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
  font-family: 'JetBrains Mono', monospace;
}

.footer__logo-bracket {
  color: var(--primary);
  font-weight: 700;
}

.footer__copyright {
  font-size: 0.875rem;
  color: var(--muted-foreground);
  font-weight: 400;
}

.footer__social {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.footer__social-link {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--muted-foreground);
  border: 1px solid hsla(0, 7%, 62%, 0.5);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.footer__social-link:hover {
  color: var(--foreground);
  border-color: var(--primary);
  transform: translateY(-2px);
  background: hsla(0, 7%, 62%, 0.5);
}

.footer__social-link svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .footer {
    padding: 2.5rem 1.5rem;
    margin-top: 4rem;
  }

  .footer__container {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .footer__content {
    align-items: center;
  }
}
</style>
