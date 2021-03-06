import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

ReactDOM.render(<App />, document.getElementById('root'))

JavascriptTimeAgo.locale(en)