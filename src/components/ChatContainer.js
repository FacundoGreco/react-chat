import { React, useState, useEffect } from "react";
import Message from "./Message";
import { getMessages, saveMessages } from "../model/model.js";

// async function loadMessages() {
// 	console.log("asdasd");
// 	const messages = getMessages();
// 	// console.log(messages);
// 	// ChatContainer.state.setState("messages", messages);
// }

export default function ChatContainer() {
	const [messages, setMessages] = useState([]);
	const [nickname, setNickname] = useState(localStorage.getItem("nickname") || "");
	const [message, setMessage] = useState("");

	useEffect(() => {
		async function loadChat() {
			const chatHistory = await getMessages();
			setMessages(chatHistory);
		}
		loadChat();
		console.log("charge");
	}, []);

	const onChange = (e, setHook) => {
		setHook(e.target.value);

		if (e.target.name === "nickname") localStorage.setItem("nickname", e.target.value);
	};

	const sendMessage = (e) => {
		e.preventDefault();

		const newMessage = {
			id: messages.length + 1,
			nickname: nickname,
			message: message,
		};

		setMessages([...messages, newMessage]);

		saveMessages(messages);
	};

	return (
		<div className={"container chatContainer"}>
			<h2> CHAT </h2>{" "}
			<div className="chatSection">
				<form className="inputContainer" onSubmit={sendMessage}>
					<fieldset>
						<label htmlFor="nickname"> Nickname </label>{" "}
						<input
							type="text"
							id="nickname"
							name="nickname"
							value={nickname}
							onChange={(e) => {
								onChange(e, setNickname);
							}}
						/>{" "}
					</fieldset>
					<fieldset>
						<label htmlFor="message"> Message </label>{" "}
						<textarea
							cols="30"
							rows="6"
							id="message"
							name="message"
							value={message}
							onChange={(e) => {
								onChange(e, setMessage);
							}}
						></textarea>{" "}
					</fieldset>
					<button> ENVIAR </button>{" "}
				</form>
				<div className="messagesContainer">
					{" "}
					{messages.map((message) => (
						<Message message={message} key={message.id} />
					))}{" "}
				</div>{" "}
			</div>{" "}
		</div>
	);
}
