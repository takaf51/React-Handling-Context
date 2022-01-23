import React from 'react'

const Button = ({children, type, enable, styleName, onClick}) => {

	return (
		<button
			type={type || 'button'}
			disabled={enable ? '' : true}
			className={`${enable ? 'bg-gray-400 text-black-900' : 'bg-gray-100 text-gray-300'} mx-auto max-w-min px-12 py-3 rounded-full text-xl mt-5 ${styleName} `}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button