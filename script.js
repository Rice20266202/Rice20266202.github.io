// The page works without JavaScript; this enhancement keeps the footer current.
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
