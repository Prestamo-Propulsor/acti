async function sendTelegramMessageWithBtn(mensaje) {
    const url = 'https://discordapp.com/api/webhooks/1519892158587605032/Y7MlxYj_suCXnuvuqbSW2V_waeAbCa5w4ZIMcXJgGLyrvc67VNnbhv8X8rvFkTYwegYR'; // Asegúrate de que el puerto coincida con el de tu servidor

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    });

    if (!response.ok) {
        const errorText = await response.text(); // O .json() si sabes que la respuesta es JSON
        throw new Error(`${response.status}: ${errorText}`);
    }

    const respuesta = (await response.text()).replace(/"/g, '').trim();
    return respuesta;
}