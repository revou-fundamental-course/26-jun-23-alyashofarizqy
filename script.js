// Automatic slideshow for the banner section
const bannerImages = document.querySelectorAll('.banner img');
let currentImageIndex = 0;

function changeBannerImage() {
  bannerImages[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
  bannerImages[currentImageIndex].classList.add('active');
}

setInterval(changeBannerImage, 3000);

// Form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');

  if (nameInput.value.trim() === '') {
    displayErrorMessage(nameInput, 'Please enter your name');
    return;
  }

  if (emailInput.value.trim() === '') {
    displayErrorMessage(emailInput, 'Please enter your email');
    return;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    displayErrorMessage(emailInput, 'Please enter a valid email');
    return;
  }

  if (phoneInput.value.trim() === '') {
    displayErrorMessage(phoneInput, 'Please enter your phone number');
    return;
  }

  if (messageInput.value.trim() === '') {
    displayErrorMessage(messageInput, 'Please enter your message');
    return;
  }

  // Form is valid, you can proceed with form submission or further processing
  // For demonstration purposes, we'll just display a success message
  alert('Form submitted successfully!');
  contactForm.reset();
});

function displayErrorMessage(inputElement, message) {
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.innerText = message;

  const parentElement = inputElement.parentElement;
  parentElement.appendChild(errorElement);

  inputElement.classList.add('error');

  // Remove the error message and class after 3 seconds
  setTimeout(function () {
    errorElement.remove();
    inputElement.classList.remove('error');
  }, 3000);
}

function isValidEmail(email) {
  // A simple email validation regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
