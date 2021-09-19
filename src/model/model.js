import { db } from "./database.js";

async function getMessages(setMessages) {
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
		console.log(error);
		throw new Error("Los mensajes no se pudieron cargar");
	}
}

async function saveMessages(message) {
	try {
		await db.collection("messages").doc().set(message);
	} catch (error) {
		console.log(error);
		throw new Error("El mensaje no se pudo enviar.");
	}
}

async function saveNewUser(newUser) {
	try {
		await db.collection("users").doc().set(newUser);
	} catch (error) {
		console.log(error);
		throw new Error("El usuario no se pudo registrar.");
	}
}

export { getMessages, saveMessages, saveNewUser };
