const mongoose = require("mongoose");

// connection create to db [STRATS]
const dbUrl = "mongodb://127.0.0.1:27017/students-api"; // url of mongodb database.

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,

};

mongoose.connect(dbUrl, connectionParams).then( () => {
        console.log("Connection successful....!");
    })
    .catch( (error) => {
        console.log("Connection failed...!", error)
    });
// Connection code [ENDS]


