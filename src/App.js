import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';
import './App.css';


const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100vw;
    height: 100vh;
`;

const App = () => (
    <div className="App">
        <TodoList />
    </div>
);

App.listen(process.env.PORT || 3000);

export default hot(module)(App);
