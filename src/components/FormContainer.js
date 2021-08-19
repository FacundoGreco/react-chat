import React, { useEffect } from "react";

import "./FormContainer.scss";

export default function FormContainer({ newMessage, notification, onChange, sendMessage }) {
	useEffect(() => {
		document.querySelector(`.colorPicker option[value=${newMessage.color}]`).selected = true;
	}, [newMessage.color]);

	const onKeyPress = (e) => {
		const keyCode = e.which || e.keyCode;

		if (keyCode === 13 && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	};

	return (
		<>
			<form className="inputContainer" onSubmit={sendMessage}>
				<fieldset className="transmiterData">
					<div className="nicknameDiv">
						<label htmlFor="nickname">Nickname</label>
						<input
							className="nicknameInput"
							type="text"
							id="nickname"
							name="nickname"
							value={newMessage.nickname}
							onChange={onChange}
						/>
					</div>
					<select className="colorPicker" name="color" id="color" onChange={onChange}>
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
				<button> ENVIAR </button>
				<p className="notification">{notification}</p>
			</form>
		</>
	);
}
