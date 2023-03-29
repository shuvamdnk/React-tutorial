import React from "react";

// export default function Profile(props){
//     return (
//     <>
//         <h2>{props.name}</h2>
//     </>
//     )
// }

export default class Profile extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      name: "Shuvam",
      email: "shuvam@gmail.com",
      count: 0,
      show: true,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log('Deleted');
  }

  updateState() {
    this.setState({
      name: "Monika",
      count: this.state.count + 1,
    });
  }

  render() {
    console.log("render");
    return (
      <>
        {this.state.show ? <h3>Hide Show Element</h3> : null}
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
          className="btn shadow-sm"
        >
          Show Hide
        </button>
        <h2>
          {this.state.name} {this.state.count}
        </h2>

        <h2>{this.state.email}</h2>
        <button
          onClick={() => {
            this.updateState();
          }}
          className="btn btn-outline-success btn-sm shadow-sm"
        >
          Update
        </button>
      </>
    );
  }
}
