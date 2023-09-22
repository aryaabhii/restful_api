const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json()); // middleware

require("./database/connection");
const Student = require("./models/user");


// client will request
// server give response on the basis of client
app.get("/", (req, res) => {
    res.send("Hello Home");
});

app.post("/student", (req, res) => {
    const user = Student(req.body);
    console.log(req.body);
    user.save().then( () => {
        res.send(user);
    }).catch( (error) => {
        res.send(error);
    });
});


app.listen(port, () => {
    console.log(`Server started at ${port}`);
});

