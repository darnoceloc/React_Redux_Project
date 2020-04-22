// ./containers/App.js
import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100vw;
    height: 100vh;
`;
 
const App = () => <div>Hello World!</div>;
 
export default hot(module)(app);