import React from "react";
export default class Api extends React.Component{
    constructor(){
        super();
        this.state = {
            users:null
        }
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users?page=1')
                .then((res) => {
                    res.json().then((result) => {
                        // console.log(result.data);
                        this.setState({
                            users:result.data
                        })
                    })
                })
                .catch(err => console.log(err));
    }

    render(){
        return(
            <>
                <ul>
                    {
                        this.state.users ? 
                        this.state.users.map((user) => 
                            <li className="m-2" key={user.id}> 
                            <img className="rounded-circle" src={user.avatar} width={40} alt={user.first_name}/>
                            {`${user.first_name} ${user.last_name}`}
                            </li>
                        )
                        : null
                    }
                    
                </ul>
            </>
        )
    }
}