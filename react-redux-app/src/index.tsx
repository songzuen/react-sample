import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';
import { applyMiddleware, createStore } from 'redux';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const loggerMiddleware = (store : any) => (next : any) => (action : any) => {
	next(action);
}

const middleware = applyMiddleware(thunk, loggerMiddleware)

const store = createStore(rootReducer, undefined, middleware)
// store.dispatch({
//   type : "ADD_TODO",
//   text : "Use Redux"
// })

const render = () => root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App onIncrement={()=> store.dispatch({type : "INCREMENT"})} onDecrement={()=> store.dispatch({type : "DECREMENT"})} />
		</Provider>
	</React.StrictMode>
);

render();

store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
