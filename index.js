const express = require("express");
require("./utils/db");
const app = express();
const port = process.env.PORT || 2070;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/user", require("./controller/userRouter"));

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
