let express = require('express');
let bodyParser = require('body-parser');
let todoController = require('./Controller/todoController');

// Create a Express app
let app = express();

// set up the EJS Tamplete
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('./public'));

// Fire Controller here
todoController(app);

// Listen to a Port
app.listen(3000, ()=>{
    console.log('Server is Running on Port no: 3000');
})  