import { React, useState, useEffect } from "react";
import { getMessages, saveMessages } from "../model/model.js";
import FormContainer from "./FormContainer.js";
import MessagesContainer from "./MessagesContainer";
import "./ChatContainer.scss";

export default function ChatContainer() {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState({
		nickname: localStorage.getItem("nickname" || ""),
		color: localStorage.getItem("color" || "white"),
		message: "",
	});

	useEffect(() => {
		getMessages(setMessages);
	}, []);

	const onChange = (e) => {
		const { name, value } = e.target;
		setNewMessage({ ...newMessage, [name]: value });

		if (name === "nickname") localStorage.setItem("nickname", value);
		if (name === "color") localStorage.setItem("color", value);
	};

	const sendMessage = (e) => {
		if (e) e.preventDefault();

		const message = {
			date: new Date(),
			nickname: newMessage.nickname,
			color: newMessage.color,
			message: newMessage.message,
		};

		saveMessages(message);
		setNewMessage({ ...newMessage, message: "" });
	};

	return (
		<div className={"container chatContainer"}>
			<h2> CHAT </h2>
			<section className="chatSection">
				<FormContainer newMessage={newMessage} onChange={onChange} sendMessage={sendMessage} />

				<MessagesContainer messages={messages} />
			</section>
		</div>
	);
}
