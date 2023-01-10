let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// DataBase Connect 
mongoose.connect('mongodb+srv://dhrumilZignuts:deepatel@zignuts-technology.zveo5bz.mongodb.net/toDoList');

// Create a MongoDB Schema

let todoSchema = new mongoose.Schema({
    item: String
})
// Create Model for Database
let Todo = mongoose.model('Todo', todoSchema);

let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
    app.get('/todo', (req, res) => {
        // Get the data from MongoDG
        Todo.find({},(err,data)=>{
            if (err) throw err;
            res.render('todo', { todos: data });
        })
    })

    app.post('/todo', urlencodedParser, function (req, res) {
        // get data from views and send it to dataBase.
        let newTodo = Todo(req.body).save((err,data)=>{
            if(err) throw err;
            res.render('todo', { todos: data });
        })
    })

    app.delete('/todo/:item', function (req, res) {
        console.log(req.params.item);
        Todo.find({item: req.params.item.replace(/\-/g,' ').trim()}).remove((err,data)=>{
            if(err) throw err;
            console.log('Item is removed');
            res.json(data);
        })
    })
}