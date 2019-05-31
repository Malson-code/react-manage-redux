import React from 'react';
import ReactDOM from 'react-dom';
import App from './todoList/demo1/Index';
import { Provider } from 'react-redux';
import store from './main/store';


let renderVal = (
    <Provider store={store} >
        <App />
    </Provider >
)
//渲染
ReactDOM.render(renderVal, document.getElementById('root'));
