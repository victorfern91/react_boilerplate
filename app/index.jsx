import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello.jsx';

ReactDOM.render(
    <div id="wrapper">
        <Hello name="Victor"/>
        <Hello name="Fernandes"/>
    </div>,
    document.getElementById('app')
);
