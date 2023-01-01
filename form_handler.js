function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const value = data.get('text');
  
    console.log({ value });
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
}
  
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);