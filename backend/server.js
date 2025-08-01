const express = require("express");
const cors = require("cors");
const app = express();
const port = 4001;

const path = require("path");
const {readFile, writeFile} = require("fs").promises;

const tasksLocation = path.join(__dirname, "tasks.json")

app.use(cors());


app.get("/todo", async(req,res) => {
    console.log("GET läuft");
    const tasks = await readFile(tasksLocation, "utf-8");
    const todoAPI = JSON.parse(tasks);
    console.log("Sending tasks from JSON");
    res.json(todoAPI);
});

app.listen(port, () =>{
    console.log(`Server listening at http://127.0.0.1:${port}`);
    console.log(`Todo backend at: http://127.0.0.1:${port}/todo`)
});