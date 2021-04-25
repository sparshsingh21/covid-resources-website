const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const bodyParser = require('body-parser');
const resourcesRoute = require("./routes/resourcesRoute");

env.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', resourcesRoute);
const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.pecbm.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database Connected..!!');
    });

app.get('/', (req, res) => {
    res.send("Hello Bhadwe")
});


app.listen(process.env.PORT || 8000, () => {
    console.log(`Server rocking at port: ${process.env.PORT}`)
});