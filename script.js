let trashBtn = document.getElementById("trash");
let browserBtn = document.getElementById("browser");
let homeBtn = document.getElementById("home");
let fmX = 0;
let fmY = 0;
let fm = document.getElementById("file-manager");
let maxBtn = document.querySelectorAll('.max-btn');

homeBtn.addEventListener('click',function (){
    fm.classList.add("active");
});
maxBtn.forEach((event)=>{
    console.log(event);
})


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
