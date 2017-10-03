import React, { Component } from "react";
import API from "../utils/API";


class Discover extends Component {
  state = {
    challenges: [],
    title: ""
  };

  componentDidMount() {
    this.loadChallenges();
  };

  loadChallenges = () => {
    API.getChallenges()
      .then(res =>
        this.setState({ 
          challenges: res.data, 
          title: ""
        })
      ).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.saveChallenge({
        title: this.state.title
      })
        .then(res => this.loadChallenges())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <form>
            <div className="form-group">
              <input 
                className="form-control" 
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
            
              <button 
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit} 
                style={{ float: "right" }} 
                className="btn btn-success">
                Submit Challenge
              </button>
            </div>
          </form>
        </div>
        <div className="container">
          <ul>
            {this.state.challenges.map(challenge => (
              <li>
                <strong>
                  {challenge.title}
                </strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Discover;
