import React, { createContext, useContext, useState } from "react";
import { saveNewUser, verifyUser } from "../../model/model";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
	const [notification, setNotification] = useState("");
	const [userLogged, setUserLogged] = useState(false);
	const [userPrefs, setUserPrefs] = useState({ nickname: "", color: "white" });

	const registerUser = async (newUser) => {
		setNotification("");
		setUserLogged(false);

		try {
			await saveNewUser({ ...newUser, nickname: "", color: "white" });
			setNotification("Usuario creado. Logueate!");
		} catch (error) {
			setNotification(error.message);
		}
	};

	const loginUser = async (user) => {
		setNotification("");
		setUserLogged(false);

		try {
			const userData = await verifyUser(user);

			if (userData) {
				setUserPrefs({ nickname: userData.nickname, color: userData.color });
				setUserLogged(true);
				setNotification("Has iniciado sesión!");
			} else {
				setNotification("Usuario o contraseña incorrecto/s.");
			}
		} catch (error) {
			setNotification(error.message);
		}
	};

	return (
		<UserContext.Provider value={{ notification, setNotification, registerUser, loginUser, userLogged, userPrefs }}>
			{children}
		</UserContext.Provider>
	);
}
