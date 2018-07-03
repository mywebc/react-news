import React from "react";
import MobilePCHeader from './mobile_pc_header';
import MobilePCFooter from './mobile_pc_footer'
 
export default class MobilePCIndex extends React.Component {
    render() {
        return (
           <div>
               <MobilePCHeader/>
               <MobilePCFooter/>
           </div> 
        )
    }
}