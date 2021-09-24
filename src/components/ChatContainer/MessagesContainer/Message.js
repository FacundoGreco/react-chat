import React from "react";
import { FiTrash } from "react-icons/fi";

import "./Messages.scss";

export default function Message({ message, displayDelete, handleDelete }) {
	return (
		<div className="message">
			<label className={message.color}>{message.nickname}</label>
			{displayDelete && (
				<FiTrash
					className="deleteButton"
					size="25px"
					color="white"
					onClick={() => {
						handleDelete(message.id);
					}}
				/>
			)}
			<p>{message.message}</p>
		</div>
	);
}
