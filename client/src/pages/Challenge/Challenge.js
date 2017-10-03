import React, { Component } from "react";
import API from "../../utils/API";


class Challenge extends Component {

  state = {
    challenge: {},
    recipes: [],
    title: ""
  };

  componentDidMount() {
    API.getChallenge(this.props.match.params.id)
      .then(
        res => this.setState({ challenge: res.data })
        // this.loadRecipes()
      )
    .catch(err => console.log(err));
  };

  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ 
          recipes: res.data, 
          title: ""
        })
      ).catch(err => console.log(err));
  };

  deleteRecipe = id => {
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
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
      API.saveRecipe({
        title: this.state.title
      })
        .then(res => this.loadRecipes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <h1>
              {this.state.challenge.title}
            </h1>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Challenge;
