import React, {useState, useEffect} from 'react'

const AuthContext = React.createContext({
	//for auto completion
	isLoggedIn: false,
	logIn: (email, password) => {},
	logOut: () => {},
});

export const AuthContextProvider = ({children}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedLoginInfo = localStorage.getItem('isLoggedIn');
		if(storedLoginInfo==='1') setIsLoggedIn(true); 
	});

	const logIn = (email, password) => {
		localStorage.setItem('isLoggedIn', '1');
		setIsLoggedIn(true);
	}

	const logOut = () =>  {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	}
	return (
		<AuthContext.Provider value={{isLoggedIn, logIn, logOut}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext