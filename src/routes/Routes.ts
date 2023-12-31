const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/booking", require("./ticket"))
router.use("/moviehall", require("./moviehall"))
router.use("/bookedseats", require("./bookedseats"))

module.exports = router;