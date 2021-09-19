import React, { useState } from "react";
import { useUserContext } from "../../Contexts/UserContext";
import "./LoginForm.scss";

export default function LoginForm() {
	const { registerUser, notification, setNotification } = useUserContext();

	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const onChange = (e) => {
		const { name, value } = e.target;

		setUser({ ...user, [name]: value });
	};

	const handleRegister = (e) => {
		e.preventDefault();
		if (!user.username) return setNotification("El usuario está vacío.");
		if (!user.password) return setNotification("La contraseña está vacía.");

		registerUser(user);
		setUser({ ...user, password: "" });
	};

	const handleLogin = (e) => {
		e.preventDefault();
	};

	return (
		<form className={"loginForm"}>
			<fieldset className={"loginData"}>
				<label htmlFor="username">Usuario</label>
				<input
					className="usernameInput"
					type="text"
					id="username"
					name="username"
					value={user.username}
					onChange={onChange}
				/>

				<label htmlFor="password">Contraseña</label>
				<input
					className="passwordInput"
					type="password"
					id="password"
					name="password"
					value={user.password}
					onChange={onChange}
				/>
			</fieldset>

			<div className={"buttonsDiv"}>
				<button onClick={handleRegister}> Registrarse </button>
				<button onClick={handleLogin}> Login </button>
			</div>
			<p className="notification">{notification}</p>
		</form>
	);
}
