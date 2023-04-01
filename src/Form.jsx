import React from "react";
import { Button, Container } from 'react-bootstrap';
export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      emailErr: null,
      passErr: null,
    };
    this.emailRef = React.createRef();
  }

  valid() {
    if (this.state.email === null || !this.state.email.includes('@')) {
      this.setState({
        emailErr: 'invalid email.',
      })
    } else if (this.state.password === null || this.state.password.length < 6) {
      this.setState({
        passErr: 'Password must be 6 character long.',
      })
    } else {
      return true;
    }
  }

  submit() {

    this.emailRef.current.value = 'test@gmail.com';
    // console.log(this.state.email);
    // this.setState({
    //   emailErr: null,
    //   passErr: null,
    // })
    // if (this.valid()) {
    //   alert('Form Submitted.')
    // }
  }

  render() {
    return (
      <>
      <Container className="mt-5 mb-5 shadow-sm">
      <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={this.emailRef}
              onChange={(e) => this.setState({ email: e.target.value })}
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
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <span className="text-danger">{this.state.passErr}</span>
          </div>
          <Button onClick={() => this.submit()} className="shadow" variant="outline-success border-0" >Submit</Button>
      </Container>
         
         
      </>
    );
  }
}
