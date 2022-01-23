import React from 'react'

const Card = ({children}) => {
	return (
		<div className='flex flex-wrap justify-center mt-4 shadow-lg mx-auto w-8/12 border-2 rounded-lg'>
			{children}
		</div>
	);
}

export default Card