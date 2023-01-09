let bodyParser = require('body-parser');

let data = [
    { item: 'Complete NodeJS Tutorials' },
    { item: 'Complete todoList' },
    { item: 'Complete the Learning Path ' }
]

let urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function (app) {
    app.get('/todo', (req, res) => {
        // console.log(data);
        res.render('todo', { todos: data });
    })

    app.post('/todo', urlencodedParser, function(req,res){
        console.log(`${ JSON.stringify(req.body)} new item added`);
        data.push(req.body);
        res.render('todo', { todos: data });
    })

    app.delete('/todo/:item',function(req,res){
        console.log(`this is a dta from US, ${req.params.item}`);
        let dataa = data.filter((todo)=>{
            return todo.item.replace(/ /g, '') !== req.params.item;
        })
        res.render('todo', { todos: dataa });
    })
}