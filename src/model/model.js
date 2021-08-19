import { db } from "./database.js";

async function getMessages(setMessages, setNotification) {
	try {
		db.collection("messages")
			.orderBy("date", "asc")
			.onSnapshot((querySnapshot) => {
				const chatHistory = [];

				querySnapshot.forEach((doc) => {
					chatHistory.push({ id: doc.id, ...doc.data() });
				});

				setMessages(chatHistory);
			});
	} catch (error) {
		setNotification("Los mensajes no se pudieron cargar: ", error.message);
	}
}

async function saveMessages(message, setNotification) {
	try {
		await db.collection("messages").doc().set(message);
		setNotification("Mensaje enviado");
	} catch (error) {
		setNotification("El mensaje no se pudo enviar: ", error.message);
	}
}

export { getMessages, saveMessages };
