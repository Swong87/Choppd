const router = require("express").Router();
const recipeRoutes = require("./recipes");
const challengeRoutes = require("./challenges");
const userRoutes = require("./users");

// Book routes
router.use("/recipes", recipeRoutes);
router.use("/challenges", challengeRoutes);
router.use("/users", userRoutes);

module.exports = router;
