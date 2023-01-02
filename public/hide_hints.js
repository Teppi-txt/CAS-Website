var noPostText = document.getElementById("noPost");
var hint = document.getElementById("postHint");
var postBtn = document.getElementById("writeButton");
var popup = document.getElementById("write-popup");
var body = document.body;
var textBox = document.getElementById("text");
var submitBtn = document.getElementById("submit");
var close = document.getElementById("closePostUI");

if (document.getElementsByClassName("post").length != 0) {
    noPostText.style.visibility = "hidden";
    console.log(document.getElementsByClassName("post"));
} else {
    noPostText.style.visibility = "visible";
}

postBtn.onclick = function () {
    body.classList.add("right-zoom-transition");
    setTimeout(() => {
        hint.style.display = "none";
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

textBox.onchange = function () {
    textBox.value = textBox.value.trim();
}

close.onclick = function () {
    body.classList.add("right-zoom-transition");
    setTimeout(() => {
        hint.style.display = "none";
        popup.style.visibility = "hidden";
    }, 600);
    setTimeout(() => {
        body.classList.remove("right-zoom-transition");
    }, 1200);
}