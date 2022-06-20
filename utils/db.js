const mongoose = require("mongoose");
const url = "mongodb://localhost/authTest";
const url2 =
	"mongodb+srv://CodeLab:CodeLab@cluster0.lzdw3.mongodb.net/AuthTestDB?retryWrites=true&w=majority";;

mongoose.connect(url2).then(() => {
	console.log("database is now connected...!");
});

module.exports = mongoose;
