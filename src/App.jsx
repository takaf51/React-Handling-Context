import React, {useContext} from 'react'
import AuthContext from './store/auth-context'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'


export const App = () => {
	const {isLoggedIn} = useContext(AuthContext);
	return (
		<>
			<Header />
			{!isLoggedIn && <Login/>}
			{isLoggedIn && <Home/>}
		</>
	);
}
