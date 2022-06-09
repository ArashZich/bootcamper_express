const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
} = require("../controllers/bootcamps");

const router = express.Router();

router.route("/radius/:zipcode/:distance");

router
  .route("/")
  .get(getBootcamps)
  .post(createBootcamp)
  .get(getBootcampsInRadius);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
