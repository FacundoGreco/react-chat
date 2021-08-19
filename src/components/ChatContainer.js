import { React, useState, useEffect } from "react";
import Message from "./Message";
import { getMessages, saveMessages } from "../model/model.js";

export default function ChatContainer() {
	const [messages, setMessages] = useState([]);
	const [nickname, setNickname] = useState(localStorage.getItem("nickname") || "");
	const [message, setMessage] = useState("");

	useEffect(() => {
		getMessages(setMessages);
	}, []);

	const onChange = (e, setHook) => {
		setHook(e.target.value);

		if (e.target.name === "nickname") localStorage.setItem("nickname", e.target.value);
	};

	const sendMessage = (e) => {
		e.preventDefault();

		const newMessage = {
			date: new Date(),
			nickname: nickname,
			message: message,
		};

		// setMessages([...messages, newMessage]);
		saveMessages(newMessage);
		setMessage("");
	};

	return (
		<div className={"container chatContainer"}>
			<h2> CHAT </h2>
			<div className="chatSection">
				<form className="inputContainer" onSubmit={sendMessage}>
					<fieldset>
						<label htmlFor="nickname"> Nickname </label>
						<input
							type="text"
							id="nickname"
							name="nickname"
							value={nickname}
							onChange={(e) => {
								onChange(e, setNickname);
							}}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="message"> Message </label>
						<textarea
							cols="30"
							rows="6"
							id="message"
							name="message"
							value={message}
							onChange={(e) => {
								onChange(e, setMessage);
							}}
						></textarea>
					</fieldset>
					<button> ENVIAR </button>
				</form>
				<div className="messagesContainer">
					{messages && messages.map((message) => <Message message={message} key={message.id} />)}
				</div>
			</div>
		</div>
	);
}
