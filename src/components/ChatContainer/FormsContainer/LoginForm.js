import React, { useState } from "react";
import { useUserContext } from "../../Contexts/UserContext";
import "./LoginForm.scss";

export default function LoginForm() {
	const { registerUser, loginUser, notification, setNotification } = useUserContext();

	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const onChange = (e) => {
		const { name, value } = e.target;

		setUser({ ...user, [name]: value });
	};

	const validateInputs = () => {
		if (!user.username) {
			setNotification("El usuario está vacío.");
			return false;
		} else if (!user.password) {
			setNotification("La contraseña está vacía.");
			return false;
		} else return true;
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (validateInputs()) {
			registerUser(user);
			setUser({ ...user, password: "" });
		}
	};

	const handleLogin = (e) => {
		e.preventDefault();

		if (validateInputs()) {
			loginUser(user);
			setUser({ ...user, password: "" });
		}
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
				<button onClick={handleLogin}> Login </button>
				<button onClick={handleRegister}> Registrarse </button>
			</div>
			<p className="notification">{notification}</p>
		</form>
	);
}
