const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/booking", require("./ticket"))

module.exports = router;