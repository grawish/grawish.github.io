let desktopicons=document.getElementsByClassName("desktop-icon");


for (let desktopicon of desktopicons) {
    desktopicon.addEventListener("click",(event) => {
        event.target.classList.toggle("selected");
    });
}