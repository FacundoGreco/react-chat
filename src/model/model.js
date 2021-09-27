import { db } from "./database.js";
const bcryptjs = require("bcryptjs");

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
		newUser.password = await bcryptjs.hash(newUser.password, 8);
		await db.collection("users").doc().set(newUser);
	} catch (error) {
		console.log(error);
		throw new Error("El usuario no se pudo registrar.");
	}
}

async function verifyPassword(usersDocs, password) {
	try {
		let userLogged = false;

		for (const user of usersDocs) {
			if (await bcryptjs.compare(password, user.data().password)) userLogged = { id: user.id, ...user.data() };
		}

		return userLogged;
	} catch (error) {
		console.log(error);
		throw new Error("La contraseña no se pudo validar.");
	}
}

async function verifyUser({ username, password }) {
	try {
		const users = await db.collection("users").where("username", "==", username).get();

		if (users.docs) {
			return verifyPassword(users.docs, password);
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

async function deleteMessageFromDb(id) {
	try {
		await db.collection("messages").doc(id).delete();
	} catch (error) {
		console.log(error);
		throw new Error("No se pudo eliminar el mensaje.");
	}
}

export { getMessages, saveMessages, saveNewUser, verifyUser, saveUserPrefs, deleteMessageFromDb };
