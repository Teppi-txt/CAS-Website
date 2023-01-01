function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = data.get('email');
    console.log({ value });
}
  
var form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);