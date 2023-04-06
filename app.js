const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"))
const tasks = [];
app.get("/", function (req, res) {
    const day = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    const today = day.toLocaleDateString("en-US", options);
    res.render("list.ejs", { day: today, tasks: tasks });
});

app.post("/", function (req, res) {
    const task = req.body.task;
    tasks.push(task);
    res.redirect("/");
});
app.listen(3000, function () {
    console.log("Listening to Port 3000...");
});