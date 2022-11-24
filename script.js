$(document).ready(function () {
    // Précisez la date limite
    const deadlineDate = new Date('october 20, 2022 23:59:59').getTime();

    // Mettez en cache toutes les boîtes de compte à rebours dans consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours = document.querySelector('.countdown__hours .number');
    const countdownMinutes = document.querySelector('.countdown__minutes .number');
    const countdownSeconds = document.querySelector('.countdown__seconds .number');

    // Mettre à jour le compte à rebours toutes les 1 seconde (1000 millisecondes)
    setInterval(() => {
      // Obtenir la date et l'heure actuelles
      const currentDate = new Date().getTime();

      // Calculer la distance entre la date et l'heure actuelles et la date et l'heure d'échéance
      const distance = deadlineDate - currentDate;

      // Calcule les données pour les jours, heures, minutes et secondes restants
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);

      // Insérez les données de résultat dans des cases de compte à rebours individuelles
      countdownDays.innerHTML = days;
      countdownHours.innerHTML = hours;
      countdownMinutes.innerHTML = minutes;
      countdownSeconds.innerHTML = seconds;
    }, 1000);
  });