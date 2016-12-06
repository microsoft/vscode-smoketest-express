window.onload = () => {
  const el = document.getElementById('count');

  setInterval(() => {
    el.textContent = new Date();
  }, 1000);
};
