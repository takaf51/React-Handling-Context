import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import {App} from './App'
import {AuthContextProvider} from './store/auth-context'

ReactDOM.render(<AuthContextProvider><App /></AuthContextProvider>, document.getElementById('root'));
