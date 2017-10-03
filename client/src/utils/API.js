import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
 
  getRecipe: function(id) {
    return axios.get("/api/recipes/" + id);
  },

  deleteRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },

  saveRecipe: function(recipeData) {
    return axios.post("/api/recipes", recipeData);
  },
  getChallenges: function() {
    return axios.get("/api/challenges");
  },
 
  getChallenge: function(id) {
    return axios.get("/api/challenges/" + id);
  },

  deleteChallenge: function(id) {
    return axios.delete("/api/challenges/" + id);
  },

  saveChallenge: function(challengeData) {
    return axios.post("/api/challenges", challengeData);
  },
  getUsers: function() {
    return axios.get("/api/users");
  },
 
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },

  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },

  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};