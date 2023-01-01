fetch('./data.json')
    .then((response) => response.json())
    .then((json) => json.forEach(element => {
        createElement(element[0], element[1], element[2])
    }));    

const content = document.getElementById("content");


function createElement(subject, date, text) {
    var post = document.createElement("div")
    post.innerHTML = '<div class="post" id="post"><div class="header"><h1 class="subject-display">' + subject + '</h1><h2 class="date">' + date + '</h2></div><p class="text">' + text + '</p></div>';
    content.append(post);
}