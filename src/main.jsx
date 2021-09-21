import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import 'lib-flexible/flexible'
import './index.css'
import App from './App'
import { CookiesProvider } from 'react-cookie'
import { Provider as StoreProvider } from 'react-redux'
import { dvaApp } from '@/dva'

console.log('main.jsx dvaApp=', dvaApp)
const store = dvaApp.getStore()

ReactDOM.render(
  <React.StrictMode>
     <StoreProvider store={store}>
      <CookiesProvider>
        <Router>
          <App />
        </Router>
      </CookiesProvider>
     </StoreProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
)
