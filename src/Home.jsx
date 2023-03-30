import React from "react";
import Api from './Api';
export default class Home extends React.Component{

    render(){
        return (
            <React.Fragment>
                <h3>Home Component</h3>
                <Api/>
            </React.Fragment>
        )
    }
    
}

