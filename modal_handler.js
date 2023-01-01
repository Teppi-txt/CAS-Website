const closeButton = document.getElementById('modal-close');
const modal = document.getElementById('terms-modal');

closeButton.addEventListener('close', modal.style.display = "none");