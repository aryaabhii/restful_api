const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json()); // middleware for data

require("./database/connection");

// routers
const studentRouter = require("./routers/student")
app.use(studentRouter);


// server
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});

