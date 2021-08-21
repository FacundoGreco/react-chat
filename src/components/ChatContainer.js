import { React, useState, useEffect } from "react";
import { getMessages, saveMessages } from "../model/model.js";
import FormContainer from "./FormContainer.js";
import MessagesContainer from "./MessagesContainer";
import "./ChatContainer.scss";

export default function ChatContainer() {
	const [loadingMessages, setloadingMessages] = useState(true);
	const [messages, setMessages] = useState([]);
	const [notification, setNotification] = useState("");
	const [newMessage, setNewMessage] = useState({
		nickname: localStorage.getItem("nickname" || ""),
		color: localStorage.getItem("color" || "white"),
		message: "",
	});

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

	useEffect(() => {
		loadMessages();
	}, []);

	const onChange = (e) => {
		const { name, value } = e.target;
		setNewMessage({ ...newMessage, [name]: value });

		if (name === "nickname") localStorage.setItem("nickname", value);
		if (name === "color") localStorage.setItem("color", value);
	};

	const sendMessage = async (e) => {
		if (e) e.preventDefault();

		if (loadingMessages) return;

		if (!newMessage.message) return setNotification("No ha escrito ningún mensaje.");
		else setNotification("");

		const message = {
			date: new Date(),
			nickname: newMessage.nickname,
			color: newMessage.color,
			message: newMessage.message,
		};

		setNewMessage({ ...newMessage, message: "" });

		try {
			await saveMessages(message);
			setNotification("Mensaje enviado");
		} catch (error) {
			console.log(error);
			setNotification(error.message);
		}
	};

	return (
		<div className={"container chatContainer"}>
			<h2> CHAT </h2>
			<section className="chatSection">
				<FormContainer
					loadingMessages={loadingMessages}
					newMessage={newMessage}
					notification={notification}
					onChange={onChange}
					sendMessage={sendMessage}
				/>

				<MessagesContainer loadingMessages={loadingMessages} messages={messages} />
			</section>
		</div>
	);
}
