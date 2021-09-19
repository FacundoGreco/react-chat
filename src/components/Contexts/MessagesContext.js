import React, { createContext, useContext, useState, useEffect } from "react";
import { getMessages, saveMessages } from "../../model/model.js";

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

	useEffect(() => {
		loadMessages();
	}, []);

	return (
		<MessagesContext.Provider value={{ loadingMessages, messages, notification, setNotification, sendMessage }}>
			{children}
		</MessagesContext.Provider>
	);
}
