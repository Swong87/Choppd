const router = require("express").Router();
const challengesController = require("../../controllers/challengesController");

// Matches with "/api/recipes"
router.route("/")
  .get(challengesController.findAll)
  .post(challengesController.create);

// Matches with "/api/recipes/:id"
router
  .route("/:id")
  .get(challengesController.findById)
  .put(challengesController.update)
  .delete(challengesController.remove);

module.exports = router;
