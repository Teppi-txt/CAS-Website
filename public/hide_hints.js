var noPostText = document.getElementById("noPost");
var hint = document.getElementById("postHint");
var postBtn = document.getElementById("writeButton");
var popup = document.getElementById("write-popup");
var pageBtn = document.getElementById("homeButton");
var pagePopup = document.getElementById("page-popup");
var body = document.body;
var textBox = document.getElementById("text");
var submitBtn = document.getElementById("submit");
var closePost = document.getElementById("closePostUI");
var closePage = document.getElementById("closePageUI");

if (document.getElementsByClassName("post").length != 0) {
    noPostText.style.visibility = "hidden";
    console.log(document.getElementsByClassName("post"));
} else {
    noPostText.style.visibility = "visible";
}

postBtn.onclick = function () {
    body.classList.add("right-zoom-transition");
    setTimeout(() => {
        popup.style.visibility = "visible";
    }, 600);

    setTimeout(() => {
        body.classList.remove("right-zoom-transition");
    }, 1200);
}

console.log(window.location.pathname);
submitBtn.addEventListener('click', function () {
    if (textBox.value == "") {
        textBox.classList.add("shake");
        setTimeout(() => {
            textBox.classList.remove("shake");
        }, 300);
    } else {
        window.location.href = "main";
    }
})

pageBtn.onclick = function () {
    body.classList.add("left-zoom-transition");
    setTimeout(() => {
        pagePopup.style.visibility = "visible";
    }, 600);

    setTimeout(() => {
        body.classList.remove("left-zoom-transition");
    }, 1200);
}

closePost.onclick = function () {
    popup.style.visibility = "hidden";
}


closePage.onclick = function () {
    body.classList.add("left-zoom-transition");
    setTimeout(() => {
        pagePopup.style.visibility = "hidden";
    }, 600);
    setTimeout(() => {
        body.classList.remove("left-zoom-transition");
    }, 1200);
}

var page_buttons = document.getElementsByClassName('page-select');
for(var i = 0; i < page_buttons.length; i++) {
    var select = page_buttons[i];
    console.log(select.innerHTML);
    select.addEventListener('click', redirectPage);
}

function redirectPage(event) {
    window.location.href = event.target.innerHTML.toLowerCase();
    
}