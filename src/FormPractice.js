import React, { Component } from "react";

class FormPractice extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted.");
    const name = document.getElementById("name").value;
    console.log(name);
  };

  //   taking state from the form/DOM and giving it to react to change instead.
  changeName = e => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3">
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.changeName}
                value={this.state.name}
                type="text"
                id="name"
                placeholder="Enter name"
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPractice;
