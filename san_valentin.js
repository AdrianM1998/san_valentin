function showMessage() {
    document.getElementById("message").style.display = "block";
    document.getElementById("continue-button").style.display = "inline-block";
}
function showLoveMessage() {
    document.getElementById("love-message").style.display = "block";
}
function playMusic() {
    let audio = document.getElementById("bg-music");
    audio.volume = 0.5;
    audio.play().catch(error => {
        console.log("Reproducción bloqueada por el navegador. Se activará tras la interacción del usuario.", error);
        document.addEventListener("click", () => {
            audio.play();
        }, { once: true });
    });
}
function createFallingElements() {
    const elements = ['❤️', '🌹', '💖', '💞', '💕'];
    setInterval(() => {
        let element = document.createElement("div");
        element.classList.add("falling-elements");
        element.innerText = elements[Math.floor(Math.random() * elements.length)];
        element.style.left = Math.random() * 100 + "vw";
        element.style.fontSize = Math.random() * 20 + 20 + "px";
        element.style.position = "absolute";
        element.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(element);
        setTimeout(() => { element.remove(); }, 5000);
    }, 300);
}