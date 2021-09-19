import { React } from "react";
import { MessagesProvider } from "../Contexts/MessagesContext.js";
import FormsContainer from "./FormsContainer/FormsContainer.js";
import MessagesContainer from "./MessagesContainer/MessagesContainer";
import "./ChatContainer.scss";

export default function ChatContainer() {
	return (
		<MessagesProvider>
			<div className={"chatContainer"}>
				<h2> CHAT </h2>
				<section className="chatSection">
					<FormsContainer />

					<MessagesContainer />
				</section>
			</div>
		</MessagesProvider>
	);
}
