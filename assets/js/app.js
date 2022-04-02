const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


console.log($("*"));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const colors = ["green", "red", "#ff214"];

$(".btn").onclick = function() {

    const color = "#" + Math.floor(Math.random()*16777215).toString(16);

    // $("*").style.backgroundColor = `rgb(${r},${g},${b})`;
    // $(".btn").style.backgroundColor = `rgb(${r},${g},${b})`;
    $("*").style.backgroundColor = color;
    $(".btn").style.backgroundColor = color;
    $(".color").textContent = color;
    $(".color").style.color = color;
}