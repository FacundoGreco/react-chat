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

async function verifyUser({ username, password }) {
	try {
		const user = await db
			.collection("users")
			.where("username", "==", username)
			.where("password", "==", password)
			.get();

		if (user.docs[0]) {
			return { id: user.docs[0].id, ...user.docs[0].data() };
		} else {
			return false;
		}
	} catch (error) {
		console.log(error);
		throw new Error("El usuario no se pudo validar.");
	}
}

async function saveUserPrefs(id, nickname, color) {
	try {
		await db.collection("users").doc(id).update({ nickname: nickname, color: color });
	} catch (error) {
		console.log(error);
		throw new Error("No se pudieron guardar las preferencias.");
	}
}

export { getMessages, saveMessages, saveNewUser, verifyUser, saveUserPrefs };
