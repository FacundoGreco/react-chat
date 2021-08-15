import React from "react";

export default function Message({ message }) {
	return (
		<div className="message">
			<label>{message.nickname}</label>
			<p>{message.message}</p>
		</div>
	);
}
