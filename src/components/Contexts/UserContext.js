import React, { createContext, useContext, useState } from "react";
import { saveNewUser, verifyUser } from "../../model/model";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
	const [notification, setNotification] = useState("");
	const [userLogged, setUserLogged] = useState(false);
	const [userPref, setUserPref] = useState({ nickname: "", color: "white" });

	const registerUser = async (newUser) => {
		setNotification("");

		try {
			await saveNewUser({ ...newUser, nickname: "", color: "white" });
			setNotification("Usuario creado. Logueate!");
		} catch (error) {
			setNotification(error.message);
		}
	};

	const loginUser = async (user) => {
		setNotification("");

		try {
			const userData = await verifyUser(user);

			if (userData) {
				setUserPref({ nickname: userData.nickname, color: userData.color });
				setUserLogged(true);
				setNotification("Has iniciado sesión!");
			} else {
				setNotification("El usuario y/o contraseña es/son incorrecto/s.");
			}
		} catch (error) {
			setNotification(error.message);
		}
	};

	return (
		<UserContext.Provider value={{ notification, setNotification, registerUser, loginUser, userLogged, userPref }}>
			{children}
		</UserContext.Provider>
	);
}
