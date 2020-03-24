import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/index'
import App from './components/App'
import './index.css'
import 'antd/dist/antd.css';

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
  
 

