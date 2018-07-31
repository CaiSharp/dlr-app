const express = require("express");
const bodyParser = require("body-parser");
const jsonfile = require("jsonfile");
const cors = require("cors");
const path = require('path');
const PORT = 3000;
const DIRECTORY = path.join(__dirname, 'data/data.json');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT || process.env.PORT, () =>
    console.log(`App is running on ${PORT}`)
);

app.get("/questions", (req,res)=>{
    jsonfile.readFile(DIRECTORY, (err, data)=>{
        res.send(data);
    })
});

app.post("/", (req,res)=>{
    jsonfile.writeFile(DIRECTORY, req.body, (err)=>{
        if (err) throw err;
        console.log('Entry has been saved!');
        res.end();
    });
});
