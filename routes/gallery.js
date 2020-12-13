const express = require("express");
const router = express.Router();

const Gallery = require("../models/Gallery");

// @route Get all images
router.get("/", async (req, res) => {
	try {
		const gallery = await Gallery.find();
		res.json(gallery);
	} catch (err) {
		res.json({
			message: err,
		});
	}
});

module.exports = router;
