const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const app = express();


let todos = [];

app.use(cors());

app.listen(5000, () => {
    console.log("Servidor iniciado!");
});

app.get('/todos', (req, res) => {
    res.json({i: todos.length, result: todos});
});

app.post('/todos', jsonParser, (req, res) => {
    let {name, status, priority} = req.body;

    if (name == "" || name == undefined) name = "Nova Tarefa";
    if (status != false && status != true) status = false;
    if (priority < 0 || priority == undefined) priority = 0;

    todos.push({name, status, priority});
    
    res.json({i: todos.length - 1, result: {name, status, priority}});
});

app.put('/todos', jsonParser, (req, res) => {
    let {pName, name, status, priority} = req.body;
    const items = todos.filter(item => item.name == pName);
    let i = todos.length;

    if (items.length) {
        i = todos.indexOf(items[0]);
    }

    if (i < todos.length) {
        if (name == "" || name == undefined) name = "Nova Tarefa";
        if (typeof(status) != typeof(true)) status = false;
        if (priority < 0 || typeof(priority) != typeof(0)) priority = 0;
    
        todos[i] = {name, status, priority};
        
        res.json({i, result: {name, status, priority}});
    } else 
        res.json({i, result: false});
    
});

app.delete('/todos', jsonParser, (req, res) => {
    let {name} = req.body;
    const items = todos.filter(item => item.name == name);
    let i = todos.length;

    if (items.length) {
        i = todos.indexOf(items[0]);
    }

    if (i < todos.length) {
        todos.splice(i, 1);
        res.json({i, result: true});
    } else 
        res.json({i, result: false});
});