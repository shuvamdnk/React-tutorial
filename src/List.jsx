import React from 'react';

export default class List extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[
                {name:'Shuvam'},
                {name:'Sudeshna'},
                {name:'Suravi'},
                {name:'Sarnali'},
                {name:'Sayantani'}
            ],
        }
    }

    render(){
        return(
            <>
                <h2>List Items</h2>
                <ul>
                    {
                        this.state.list.map((item,index) => 
                            <li key={index}>{item.name}</li>
                        )
                    }
                </ul>
            </>
        )
    }
}