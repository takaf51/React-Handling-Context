import React, {useContext} from 'react'
import AuthContext from '../store/auth-context'
import Menu from './Menu'

const Header = () => {
	const {isLoggedIn, logOut} = useContext(AuthContext);
	return (
		<div className='flex flex-row  justify-between items-center h-[4.5rem] bg-purple-900'>
			<p className='ml-5 text-white text-4xl font-semibold'>A Typical Page</p>
			{isLoggedIn && <Menu/>}
		</div>
	);
}

export default Header