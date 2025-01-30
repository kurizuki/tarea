function loadChatBot() {
    // Crear el chatBot
    const chatBot = document.createElement("iframe");
    chatBot.src = "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/30/17/20250130171301-S76D96GM.json";
    chatBot.frameborder = "0";

    // Agregar el chatBot al body
    document.body.appendChild(chatBot);
}