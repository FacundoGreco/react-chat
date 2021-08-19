import { db } from "./database.js";

async function getMessages(setMessages) {
	db.collection("messages")
		.orderBy("date", "asc")
		.onSnapshot((querySnapshot) => {
			const chatHistory = [];

			querySnapshot.forEach((doc) => {
				chatHistory.push({ id: doc.id, ...doc.data() });
			});

			setMessages(chatHistory);
		});
}

async function saveMessages(message) {
	await db.collection("messages").doc().set(message);
	console.log("Nuevo mensaje guardado.");
}

export { getMessages, saveMessages };
