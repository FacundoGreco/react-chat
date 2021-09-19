import React, { useState } from "react";
import "./LoginForm.scss";

export default function LoginForm() {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const onChange = (e) => {
		const { name, value } = e.target;

		setUser({ ...user, [name]: value });
	};

	const register = (e) => {
		e && e.preventDefault();
		console.log(user);
	};

	const login = (e) => {
		e && e.preventDefault();
		console.log(user);
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
				<button onClick={register}> Registrarse </button>
				<button onClick={login}> Login </button>
			</div>
		</form>
	);
}
