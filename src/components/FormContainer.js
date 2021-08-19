import React from "react";

import "./FormContainer.scss";

export default function FormContainer({ newMessage, onChange, sendMessage }) {
	return (
		<form className="inputContainer" onSubmit={sendMessage}>
			<fieldset>
				<label htmlFor="nickname"> Nickname </label>
				<input
					type="text"
					id="nickname"
					name="nickname"
					value={newMessage.transmiterData.nickname}
					onChange={onChange}
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="message"> Message </label>
				<textarea
					cols="30"
					rows="6"
					id="message"
					name="message"
					value={newMessage.message}
					onChange={onChange}
				></textarea>
			</fieldset>
			<button> ENVIAR </button>
		</form>
	);
}
