import React from "react";
import "./Messages.scss";

export default function Message({ message }) {
	return (
		<div className="message">
			<label className={message.color}>{message.nickname}</label>
			<p>{message.message}</p>
		</div>
	);
}
