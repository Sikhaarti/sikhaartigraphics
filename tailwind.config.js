/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
// Function to toggle the navigation menu on mobile
document.getElementById('menu-btn').addEventListener('click', () => {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');

  // Toggle class for changing the hamburger icon
  document.getElementById('menu-btn').classList.toggle('open');
});
