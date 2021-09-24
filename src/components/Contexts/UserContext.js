import React, { createContext, useContext, useState } from "react";
import { saveNewUser, saveUserPrefs, verifyUser } from "../../model/model";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
	const [notification, setNotification] = useState("");
	const [userLogged, setUserLogged] = useState(false);
	const [adminLogged, setAdminLogged] = useState(false);
	const [userPrefs, setUserPrefs] = useState({ id: "", nickname: "", color: "white" });

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
				setUserPrefs({ id: userData.id, nickname: userData.nickname, color: userData.color });
				setUserLogged(true);
				setAdminLogged(userData.admin === true);
				setNotification("Has iniciado sesión!");
			} else {
				setNotification("Usuario o contraseña incorrecto/s.");
			}
		} catch (error) {
			setNotification(error.message);
		}
	};

	const logOutUser = () => {
		setUserLogged(false);
		setUserPrefs({ id: "", nickname: "", color: "white" });
		setNotification("Ha cerrado sesión.");
	};

	const changeUserPrefs = async (nickname, color) => {
		try {
			await saveUserPrefs(userPrefs.id, nickname, color);
			setUserPrefs({ nickname: nickname, color: color });
			setNotification("");
		} catch (error) {
			setNotification("No se pudieron guardar las preferencias.");
		}
	};

	return (
		<UserContext.Provider
			value={{
				notification,
				setNotification,
				registerUser,
				loginUser,
				userLogged,
				adminLogged,
				userPrefs,
				logOutUser,
				changeUserPrefs,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
