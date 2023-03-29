import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      email:null,
      password:null,
      emailErr:null,
      passErr:null,
    };
  }

  valid(){
    if(this.state.email === null || !this.state.email.includes('@')){
        this.setState({
            emailErr:'invalid email.',
        })
    }else if(this.state.password === null || this.state.password.length < 6){
        this.setState({
            passErr:'Password must be 6 character long.',
        })
    }else{
       return true;
    }
  }

  submit(){
    this.setState({
        emailErr:null,
        passErr:null,
    })
    if(this.valid()){
        alert('Form Submitted.')
    }
  }

  render() {
    return (
      <>
      <div className="container shadow-sm rounded mt-5">
      <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => this.setState({email:e.target.value})}
            />
            <span className="text-danger">{this.state.emailErr}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => this.setState({password:e.target.value})}
            />
            <span className="text-danger">{this.state.passErr}</span>
          </div>
          <button onClick={() => this.submit()} className="btn btn-primary">
            Submit
          </button>
      </div>
      </>
    );
  }
}
