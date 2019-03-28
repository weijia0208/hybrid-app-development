import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
import CustomLink from './containers/CustomLink';
import AuthExample from './Auth/AuthExample';
import Counter from './Counter';
import TodoList from './TodoList';

ReactDOM.render(
    <div style={{padding:'30px'}}>
        <Counter/>
        <TodoList />
    </div>,
    document.getElementById('root')
);



// ReactDOM.render(
//     <AuthExample/>,
//     document.getElementById('root')
// );



// ReactDOM.render(
//     <CustomLink/>,
//     document.getElementById('root')
// );



// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// );


