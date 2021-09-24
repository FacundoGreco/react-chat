import React, { createContext, useContext, useState, useEffect } from "react";
import { getMessages, saveMessages, deleteMessageFromDb } from "../../model/model.js";

export const MessagesContext = createContext();
export const useMessagesContext = () => useContext(MessagesContext);

export function MessagesProvider({ children }) {
	const [loadingMessages, setloadingMessages] = useState(true);
	const [messages, setMessages] = useState([]);
	const [notification, setNotification] = useState("");

	const loadMessages = async () => {
		try {
			await getMessages(setMessages);

			setTimeout(() => {
				setloadingMessages(false);
			}, 500);
		} catch (error) {
			console.log(error);
			setNotification(error.message);
		}
	};

	const sendMessage = async (newMessage) => {
		setNotification("");

		const message = {
			date: new Date(),
			nickname: newMessage.nickname,
			color: newMessage.color,
			message: newMessage.message,
		};

		try {
			await saveMessages(message);
			setNotification("Mensaje enviado");
		} catch (error) {
			console.log(error);
			setNotification(error.message);
		}
	};

	const deleteMessage = async (id) => {
		setNotification("");

		try {
			await deleteMessageFromDb(id);
			setNotification("Mensaje eliminado.");
		} catch (error) {
			setNotification("No se pudo eliminar el mensaje.");
		}
	};

	useEffect(() => {
		loadMessages();
	}, []);

	return (
		<MessagesContext.Provider
			value={{ loadingMessages, messages, notification, setNotification, sendMessage, deleteMessage }}
		>
			{children}
		</MessagesContext.Provider>
	);
}
