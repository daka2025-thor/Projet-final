// script.js

// Exemple d'effet interactif (optionnel)
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
    form.reset();
  });
});