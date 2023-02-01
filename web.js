const express = require('express');
const app = express();
const PORT = 8001;
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/Board', express.static(__dirname + '/views/Forum'));
app.use('/Header', express.static(__dirname + '/views/Header'));
app.use('/Main', express.static(__dirname + '/views/Main'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`);
});