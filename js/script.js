// bring in the toggle
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

//add event listener to toggle element to listen for click events
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
});
