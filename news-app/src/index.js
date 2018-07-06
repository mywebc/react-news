import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, hashHistory } from 'react-router';
// import Button from 'antd';
import PCIndex from './js/components/pc_index'
import MobilePCIndex from './js/components/mobile_pc_index'
import MediaQuery from 'react-responsive'
// import registerServiceWorker from './registerServiceWorker';
import './css/index.css'
import './css/mobile_index.css'

export default class Root extends React.Component{
    render() {
        return  (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <MobilePCIndex/>
                </MediaQuery>
           </div>
        )        
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
