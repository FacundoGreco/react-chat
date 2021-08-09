/* GLOBAL SCOPE */
const express = require('express');
const app = express();
const fs = require('fs');


/* MIDDLEWARES */
app.use(express.json());


/* GET CHAT HISTORY */
function getChatHistory() {

    return new Promise((res, rej) => {

        fs.readFile("chatHistory.json", 'utf-8', (err, json) => {

            console.log('Chat obtenido con éxito.');
            res(json);
        });
    });

}

/* SAVE CHAT HISTORY */
function saveChatHistory(messages) {

    return new Promise(function (res, rej) {

        fs.writeFile("chatHistory.json", JSON.stringify(messages), (err) => {
            if (err) throw err;

            console.log('Mensajes guardados con éxito.');
            res();
        });

    });
}




/* POST HANDLING */
app.post('/api/chatHistory', (req, res) => {
   

    let chatHistory;
    getChatHistory()
        .then((json) => {
            chatHistory = json ? JSON.parse(json) : [];
            const newMessage = req.body;
            console.log('Nuevo mensaje: ', newMessage);
            
            chatHistory.push(newMessage);
            saveChatHistory(chatHistory)
                .then(() => {
                    console.log('Nuevo mensaje guardado.\n');
                    res.send(newMessage);
                });

        });
});



/* START SERVER */
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}`));