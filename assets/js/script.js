let trashBtn = document.getElementById("trash");
let browserBtn = document.getElementById("chrome");
let homeBtn = document.getElementById("home");
let fmX = 0;
let fmY = 0;
let fm = document.getElementById("file-manager");
let titleBar = document.querySelector('.titlebar');
let browser = document.getElementById('browser');
let iframe = document.getElementById('browser-window');
let powerBtn = document.getElementById('shutdown');
let powerMenu = document.getElementById('powermenu');

homeBtn.addEventListener('click', function () {
    fm.classList.add("active");
});
browserBtn.addEventListener('click', function () {
    browser.classList.add('active');
});
powerBtn.addEventListener('click', function () {
    powerMenu.classList.add('active');
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
titleBar.addEventListener('mousedown', () => {
    titleBar.parentNode.draggable = true;
})
titleBar.addEventListener('mouseup', () => {
    titleBar.parentNode.draggable = false;
})
titleBar.addEventListener('mouseleave', () => {
    titleBar.parentNode.draggable = false;
})


function maxEle(element) {
    element.classList.toggle("maximise");
    element.style.top = "5vh";
    element.style.left = "0";
}

function closeEle(element) {
    element.classList.remove("active");
}

function browserBack() {
    alert("blocked due to security issue!");
}

function browserFwd() {
    alert("blocked due to security issue!");
}

function browserHome() {
    iframe.src = "https://google.com/webhp?igu=1";
}

function browserReload() {
    iframe.src = iframe.src;
}

function browserUrl() {
    iframe.src = document.getElementById('iframe-url').value;
}

function poweroff() {
    // window.open(""+location.toString() , '_self', '').close();
    // window.close();
}

function restart() {
    location.reload();
}
