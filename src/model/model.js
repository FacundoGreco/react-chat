// const fs = require("fs");
import chatHistory from "./chatHistory.json";


async function getMessages() {

	// const response = await fetch("http://localhost:5000/api/chatHistory", {
    //     method: "GET",
    //     headers: {
    //         "Accept": "application/json"
    //     }
    // });
	// const messages = await response.json();	
    // console.log(messages);
		
    return chatHistory;

}

function saveMessages(messages) {
    
    // fs.writeFile("./chatHistory.json", JSON.stringify(messages), (err) => {
    //     if (err) throw err;

    //     console.log('Mensajes guardados con éxito.');
    // });

}

export { getMessages, saveMessages };
