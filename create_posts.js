fetch('./data.json')
    .then((response) => response.json())
    .then((json) => json.forEach(element => {
        createElement(element[0], element[1], element[2])
    }));    

const content = document.getElementById("content");
var colorDict = {
    "general" : "#E9A641",
    "english lang & lit": "#BB38E9",
    "english lit": "#BB38E9",
    "spanish" : "#EB6C6C",
    "french" : "#EB6C6C",
    "vietnamese" : "#EB6C6C",
    "self taught" : "#EB6C6C",
    "mandarin" : "#EB6C6C",
    "economics" : "#FDDC66",
    "business" : "#FDDC66",
    "psychology" : "#FDDC66",
    "history" : "#FDDC66",
    "geography" : "#FDDC66",
    "computer science" : "#5ABDC0",
    "physics" : "#5ABDC0",
    "chemistry" : "#5ABDC0",
    "biology" : "#5ABDC0",
    "design" : "#5ABDC0",
    "sports science" : "#5ABDC0",
    "environmental science" : "#5ABDC0",
    "math aa" : "#3B6DED",
    "math ai" : "#3B6DED",
    "tok" : "#E077F1",
    "cas" : "#E077F1",
    "ee" : "E077F1"
}


function createElement(subject, text, date) {
    var post = document.createElement("div");
    var parsedDate = date.substring(0, 2) + " / " + date.substring(2, 4) + " / 20" + date.substring(4, 6);
    post.className = "post";
    post.innerHTML = '<div class="header"><h1 class="subject-display">' + subject + '</h1><h2 class="date">' + parsedDate + '</h2></div><p class="text">' + text + '</p>';
    post.style.backgroundColor = colorDict[subject.toLowerCase()];
    content.append(post);
}