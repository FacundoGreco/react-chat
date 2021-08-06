import React, { Component } from "react";
import Message from "./message";

let messages = [];

export default class ChatContainer extends Component {
	state = {
		messages: messages,
		nickname: localStorage.getItem('nickname') || "",
		message: "",
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});

		if(e.target.name === 'nickname') localStorage.setItem('nickname', e.target.value);
	};

	sendMessage = (e) => {
		e.preventDefault();

		const newMessage = {
			id: this.state.messages.length + 1,
			nickname: this.state.nickname,
			message: this.state.message,
		};

		this.setState({
			messages: [...this.state.messages, newMessage],
		});
	};

	render() {
		return (
			<div className={"container chatContainer"}>
				<h2>CHAT</h2>
				<div className="chatSection">
					<form className="inputContainer" onSubmit={this.sendMessage}>
						<fieldset>
							<label htmlFor="nickname">Nickname</label>
							<input
								type="text"
								id="nickname"
								name="nickname"
								value={this.state.nickname}
								onChange={this.onChange}
							/>
						</fieldset>

						<fieldset>
							<label htmlFor="message">Message</label>
							<textarea
								cols="30"
								rows="6"
								id="message"
								name="message"
								value={this.state.message}
								onChange={this.onChange}
							></textarea>
						</fieldset>

						<button>ENVIAR</button>
					</form>

					<div className="messagesContainer">
						{this.state.messages.map((message) => (
							<Message message={message} key={message.id}/>
						))}
					</div>
				</div>
			</div>
		);
	}
}
