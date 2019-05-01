import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/app'

const container = document.createElement('div')
container.className = 'root'
document.body.appendChild(container)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container)
