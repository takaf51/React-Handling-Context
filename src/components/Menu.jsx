import React, {useContext} from 'react'
import AuthContext from '../store/auth-context'

const Menu = () => {
	const {logOut} = useContext(AuthContext);
	return (
		<ul className='flex flex-row items-center gap-8 mr-10' >
			<li className='text-white hover:text-pink-300' >Users</li>
			<li className='text-white hover:text-pink-300'>Admin</li>
			<li><button onClick={logOut} className='px-6 py-[0.4rem] bg-pink-500 rounded-full text-white hover:text-pink-300'>Logout</button></li>
		</ul>
	);
}

export default Menu