import React, { createContext, useContext, useState } from "react";
import { saveNewUser } from "../../model/model";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
	const [notification, setNotification] = useState("");

	const registerUser = async (newUser) => {
		setNotification("");

		try {
			await saveNewUser(newUser);
			setNotification("Usuario creado. Logueate!");
		} catch (error) {
			console.log(error);
			setNotification(error.message);
		}
	};

	return (
		<UserContext.Provider value={{ notification, setNotification, registerUser }}>{children}</UserContext.Provider>
	);
}
