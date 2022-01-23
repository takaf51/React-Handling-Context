import React, { useRef, useEffect, useReducer, useContext } from 'react'
import AuthContext from '../store/auth-context'
import Card from './Card'
import Button from './Button'

/*
	*** Reducer
*/
const VALIDATE = {
	EMIAL: 'email',
	PASSWORD: 'password'
}

const reducer = (state, action) => {
	switch (action.type) {
		case VALIDATE.EMIAL:
			return {
				isEmailValid: action.isEmailValid,
				isPasswordVaid: action.isPasswordVaid,
				validated: state.isEmailValid && action.isPasswordVaid
			}
		case VALIDATE.PASSWORD:
			return {
				isEmailValid: state.isEmailValid,
				isPasswordVaid: action.isPasswordVaid,
				validated: state.isEmailValid && action.isPasswordVaid
			}
		default:
			return state;
	}
}


const Login = () => {
// useContext
	const {logIn} = useContext(AuthContext);

// useReducer [state, dispatch] = useReducer(function, action)
	const [state, validate] = useReducer(reducer, { isEmailValid: null, isPasswordVaid: null, validated: false });


// useRef (reference)
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

// useEffect
	useEffect(()=>{
		emailRef.current.focus();
	},[])

	const emailCheckHandler = (e) => {
		const regex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
		regex.test(e.target.value) ? validate({ type: VALIDATE.EMIAL, isEmailValid: true }) : validate({ type: VALIDATE.EMIAL, isEmailValid: false });
	}
	const passwordCheckHandler = (e) => {
		e.target.value.trim().length > 6 ? validate({ type: VALIDATE.PASSWORD, isPasswordVaid: true }) : validate({ type: VALIDATE.PASSWORD, isPasswordVaid: false });
	}
	const loginHandler = (e) => {
		e.preventDefault();
		logIn(emailRef.current.value, passwordRef.current.value);
	}

	return (
		<Card>
			<div className='w-full px-10'>
				<form onSubmit={loginHandler}>
					<div className='flex flex-col my-10 gap-5 '>
						<div className='flex flex-col sm:flex-row items-stretch'>
							<label htmlFor='email' className='flex-1 block font-bold'>E-mail</label>
							<input
								onChange={emailCheckHandler}
								onBlur={emailCheckHandler}
								ref={emailRef}
								className={`${state.isEmailValid === false ? 'bg-red-300' : 'focus:bg-purple-200'} 
													block flex-[3_3_0%] border border-gray-400 rounded-lg text-lg' type='email' id='email`}
								type='email'
								id='email' />
						</div>
						<div className='flex flex-col sm:flex-row items-stretch'>
							<label htmlFor='password' className='flex-1 block font-bold'>Password</label>
							<input
								onChange={passwordCheckHandler}
								onBlur={passwordCheckHandler}
								ref={passwordRef}
								className={`${state.isPasswordVaid === false ? 'bg-red-300' : 'focus:bg-purple-200'} 
													block flex-[3_3_0%] border border-gray-400 rounded-lg text-lg' type='email' id='email`}
								type='password'
								id='password' />
						</div>
						<Button
							type='submit'
							enable={state.validated}
						>
							Login
						</Button>
					</div>
				</form>
			</div>
		</Card>
	);
}

export default Login