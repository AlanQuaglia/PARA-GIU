document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    let yesButtonSize = 18; // Tamaño inicial del texto del botón "Sí"

    noButton.addEventListener("click", function() {
        // Aumentar el tamaño del botón "Sí" al tocar "No"
        yesButtonSize += 10;
        yesButton.style.fontSize = `${yesButtonSize}px`;
        yesButton.style.padding = `${yesButtonSize / 2}px ${yesButtonSize}px`;
    });

    yesButton.addEventListener("click", function() {
        window.location.href = "ahorasi.html"; // Redirige a ahorasi.html
    });
});
