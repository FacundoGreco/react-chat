import React, { Component } from "react";

export default class message extends Component {
	render() {
		const { message } = this.props;

		return (
			<div className="message">
				<label>{message.nickname}</label>
				<p>{message.message}</p>
			</div>
		);
	}
}
