// Get the dropdown element
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle the visibility of the dropdown when the button is clicked
document.querySelector('.dropbtn').addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropbtn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});
