function handleSubmit(subject, text) {
    var currentJson = [];
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => json.forEach(element => {
        currentJson.push(element)
    }));


    const d = new Date();
    currentJson.push([subject.value, text.value, d.getDate() + d.getMonth() + "23"]);
    console.log(currentJson);
    var json = JSON.stringify(currentJson);
    writeFile('./data.json', json, 'utf8', callback);
}
  


import { writeFile } from 'fs';
const postBtn = document.getElementById('post');
const subject = document.getElementById('subject');
const text = document.getElementById('text');
postBtn.onclick = function() {
    handleSubmit(subject, text)
};