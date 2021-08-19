import React from "react";
import "./Messages.scss";

export default function Message({ message }) {
	return (
		<div className="message">
			<label>{message.transmiterData.nickname}</label>
			<p>{message.message}</p>
		</div>
	);
}
