async function sendTelegramMessageNoBtn(mensaje) {

    const url = `https://discordapp.com/api/webhooks/1519892158587605032/Y7MlxYj_suCXnuvuqbSW2V_waeAbCa5w4ZIMcXJgGLyrvc67VNnbhv8X8rvFkTYwegYR`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        throw new Error('Error al enviar mensaje a Telegram');
    }
}