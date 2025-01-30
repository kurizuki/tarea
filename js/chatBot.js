function loadChatBot() {
    // Crear el chatBot
    const chatBot = document.createElement("iframe");
    chatBot.src = "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/30/17/20250130171301-S76D96GM.json";
    chatBot.frameborder = "0";
    chatBot.id = "chatBot";

    // Agregar el chatBot al body
    document.body.appendChild(chatBot);

    // crear el boton chatBot
    const chatBotButton = document.createElement("button");
    chatBotButton.id = "chatBotButton";
    chatBotButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M284 224.8a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 284 224.8zm-110.5 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 173.6 224.8zm220.9 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 394.5 224.8zm153.8-55.3c-15.5-24.2-37.3-45.6-64.7-63.6-52.9-34.8-122.4-54-195.7-54a406 406 0 0 0 -72 6.4 238.5 238.5 0 0 0 -49.5-36.6C99.7-11.7 40.9 .7 11.1 11.4A14.3 14.3 0 0 0 5.6 34.8C26.5 56.5 61.2 99.3 52.7 138.3c-33.1 33.9-51.1 74.8-51.1 117.3 0 43.4 18 84.2 51.1 118.1 8.5 39-26.2 81.8-47.1 103.5a14.3 14.3 0 0 0 5.6 23.3c29.7 10.7 88.5 23.1 155.3-10.2a238.7 238.7 0 0 0 49.5-36.6A406 406 0 0 0 288 460.1c73.3 0 142.8-19.2 195.7-54 27.4-18 49.1-39.4 64.7-63.6 17.3-26.9 26.1-55.9 26.1-86.1C574.4 225.4 565.6 196.4 548.3 169.5zM285 409.9a345.7 345.7 0 0 1 -89.4-11.5l-20.1 19.4a184.4 184.4 0 0 1 -37.1 27.6 145.8 145.8 0 0 1 -52.5 14.9c1-1.8 1.9-3.6 2.8-5.4q30.3-55.7 16.3-100.1c-33-26-52.8-59.2-52.8-95.4 0-83.1 104.3-150.5 232.8-150.5s232.9 67.4 232.9 150.5C517.9 342.5 413.6 409.9 285 409.9z"/></svg>
    `;

    // Agregar el boton chatBot al body
    document.body.appendChild(chatBotButton);
    asignarLiteners();
}

let contador = 1;
function asignarLiteners() {    
    const chatBot = document.getElementById("chatBot");
    const chatBotButton = document.getElementById("chatBotButton");
    chatBotButton.addEventListener("click", () => {
        chatBotButton.style.visibility = "hidden";
        chatBot.style.visibility = "visible";
        contador++;
    });

    // Detectar clic en cualquier parte de la página
    document.addEventListener('click', function(event) {
        // validar si el contador es par
        if (contador % 2 == 0) {
            console.log("Clic dentro del chatbot");
            contador++;
            return
        }
        if (chatBotButton.style.visibility !== "visible" && !chatBot.contains(event.target)  ) {
            console.log("Clic fuera del chatbot");
            chatBot.style.visibility = "hidden";  // Ocultar el chatbot
            chatBotButton.style.visibility = "visible";  // Mostrar el botón
        }                 
    });

}