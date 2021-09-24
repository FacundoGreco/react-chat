import React, { useEffect, useState } from "react";
import { useUserContext } from "../../Contexts/UserContext";
import { useMessagesContext } from "../../Contexts/MessagesContext";
import "./MessageForm.scss";

export default function MessageForm() {
	const { userLogged, userPrefs, changeUserPrefs } = useUserContext();
	const { loadingMessages, notification, setNotification, sendMessage } = useMessagesContext();

	const [newMessage, setNewMessage] = useState({
		nickname: "",
		color: "white",
		message: "",
	});

	const onKeyPress = (e) => {
		const keyCode = e.which || e.keyCode;

		if (keyCode === 13 && !e.shiftKey) {
			e.preventDefault();
			handleSubmit();
		}
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		setNewMessage({ ...newMessage, [name]: value });
	};

	const handleSubmit = (e) => {
		if (e) e.preventDefault();

		if (loadingMessages) return;
		if (!newMessage.nickname) return setNotification("No ha ingresado un nickname.");
		if (!newMessage.message) return setNotification("No ha escrito ningún mensaje.");

		sendMessage(newMessage);
		setNewMessage({ ...newMessage, message: "" });
		changeUserPrefs(newMessage.nickname, newMessage.color);
	};

	//SETS USER NICKNAME AND COLOR
	useEffect(() => {
		setNewMessage({ nickname: userPrefs.nickname, color: userPrefs.color, message: "" });
	}, [userPrefs]);

	//SETS COLOR SELECTED
	useEffect(() => {
		const colorOption = document.querySelector(`.colorPicker option[value=${newMessage.color}]`);
		colorOption && (colorOption.selected = true);
	}, [newMessage.color]);

	return (
		<form className="messageForm" onSubmit={handleSubmit}>
			<fieldset className="transmiterData">
				<div className="nicknameDiv">
					<label htmlFor="nickname">Nickname</label>
					<input
						disabled={!userLogged}
						className="nicknameInput"
						type="text"
						id="nickname"
						name="nickname"
						value={newMessage.nickname}
						onChange={onChange}
					/>
				</div>
				<select disabled={!userLogged} className="colorPicker" name="color" id="color" onChange={onChange}>
					<option value="white">⚪</option>
					<option value="red">🔴</option>
					<option value="green">🟢</option>
					<option value="orange">🟠</option>
					<option value="yellow">🟡</option>
					<option value="blue">🔵</option>
					<option value="blueviolet">🟣</option>
				</select>
			</fieldset>
			<fieldset>
				<label htmlFor="message"> Message </label>
				<textarea
					disabled={!userLogged}
					className="messageArea"
					cols="30"
					rows="6"
					id="message"
					name="message"
					value={newMessage.message}
					onChange={onChange}
					onKeyPress={onKeyPress}
				></textarea>
			</fieldset>
			<button disabled={loadingMessages || !userLogged}> ENVIAR </button>
			<p className="notification">{notification}</p>
		</form>
	);
}
