let trashBtn = document.getElementById("trash");
let browserBtn = document.getElementById("browser");
let homeBtn = document.getElementById("home");
let fmX = 0;
let fmY = 0;
let fm = document.getElementById("file-manager");
let maxBtn = document.querySelectorAll('.max-btn');
let titleBar=document.querySelector('.titlebar');

homeBtn.addEventListener('click', function () {
    fm.classList.add("active");
});


fm.ondragstart = (event) => {
    fmX = "" + (event.pageX - fm.offsetLeft);
    fmY = "" + (event.pageY - fm.offsetTop);
    fm.style.opacity = "0.01";
}
fm.ondragend = (event) => {
    fm.style.left = "" + (event.clientX - fmX) + "px";
    fm.style.top = "" + (event.clientY - fmY) + "px";
    fm.style.opacity = "1";
}
titleBar.addEventListener('mousedown',()=>{
    titleBar.parentNode.draggable = true;
})
titleBar.addEventListener('mouseup',()=>{
    titleBar.parentNode.draggable = false;
})
titleBar.addEventListener('mouseleave',()=>{
    titleBar.parentNode.draggable = false;
})


function maxfm() {
    fm.classList.toggle("maximise");
    fm.style.top="5vh";
    fm.style.left="0";
}
function closefm() {
    fm.classList.remove("active");
}
function maxterm() {
    fm.classList.toggle("maximise");
    fm.style.top="5vh";
    fm.style.left="0";
}
function closeterm() {
    fm.classList.remove("active");
}
