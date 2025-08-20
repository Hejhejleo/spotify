document.addEventListener('DOMContentLoaded', () => {
  const countdownElements = document.querySelectorAll('.countdown');

  function updateCountdown() {
    const now = new Date();

    countdownElements.forEach(countdownElement => {
      const monthIndex = parseInt(countdownElement.getAttribute('data-month'), 10);
      const year = parseInt(countdownElement.getAttribute('data-year'), 10); // 👈 read year too
      const lastDayOfMonth = new Date(year, monthIndex + 1, 0); 
      const timeDifference = lastDayOfMonth - now;

      if (timeDifference <= 0) {
        countdownElement.textContent = "Released!";
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});
