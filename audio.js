document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento de audio
    var audio = document.getElementById("audio");

    // Verificar si el audio debe estar reproduciéndose
    var isAudioPlaying = localStorage.getItem("isAudioPlaying");

    // Si el audio estaba reproduciéndose antes
    if (isAudioPlaying === "true") {
        audio.play();
    }

    // Redirigir a la siguiente página al hacer clic en el botón
    document.getElementById("goToNextPage").addEventListener("click", function() {
        // Almacenar el estado de reproducción del audio
        localStorage.setItem("isAudioPlaying", audio.paused ? "false" : "true");
        window.location.href = "flor.html";
    });
});
