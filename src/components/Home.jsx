import React, { useContext } from 'react'
import AuthContext from '../store/auth-context'
import Card from './Card'
import Button from './Button'

const Home = () => {
	const {logOut} = useContext(AuthContext)
	return (
		<Card>
			<div className='w-full px-10 flex flex-col items-center'>
				<p className='py-16 text-4xl font-semibold'>Welcome Back!</p>
				<Button enable={true} onClick={logOut} styleName='mb-10 mt-[-1.0rem] '>Logout</Button>
			</div>
		</Card>
	);
}

export default Home