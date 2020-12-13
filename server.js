const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/gallery", require("./routes/gallery"));

//Serve static assests production
if (process.env.NODE_ENV === "production") {
	// Set static in folder
	app.use(express.static("carousel/build"));

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "carousel", "build", "index.html"))
	);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
