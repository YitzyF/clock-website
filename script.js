function updateClock() {
  const now = new Date();
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;
  clockEl.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

