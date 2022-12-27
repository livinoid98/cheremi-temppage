const express = require("express");
const app = express();
const port = 8001;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('views'));

const indexRouter = require(__dirname + '/views/routes/index');

app.use('/', indexRouter);

app.listen(port, (req,res) => {
    console.log(`server start on http://localhost:${port}`);
})