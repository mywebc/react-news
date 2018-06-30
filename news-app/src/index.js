import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Button from 'antd';
import PCIndex from './js/components/pc_index'
import registerServiceWorker from './registerServiceWorker';
import './css/index.css'

export default class Root extends React.Component{
    render() {
        return  (
            <div>
                <PCIndex/>
           </div>
        )        
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
