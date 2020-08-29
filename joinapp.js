const express = require('express');
const path = require("path");
const fs = require("fs");
const cors = require('cors');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.set('views', `${__dirname}/dist`);
app.set('vew engine', 'ejs'); //html파일을 인식할수 있게 해주는 ejs
app.engine('html', require('ejs').renderFile); 

app.use(cors());
app.use(express.static(`${__dirname}/dist`));

app.listen(PORT, HOST);
console.log('server started');

app.get('/login', (req,res) => {
    res.render('login.html');
});

app.get('/join', (req,res) => {
    res.render('join.html');
});

app.get('/api/blog', (req,res) => {
    fs.readFile('blog.json', 'utf8', (err, data) => { 
        let prettyJson = JSON.parse(data);
        res.json(prettyJson); //웹으로 데이터를 옮긴다
    });
});

// app.get('/second/about', (req,res) => {
//     res.render('about.html');
// });

// // rest api: 데이터 받아오기(get), 데이터 저장하기(post), 데이터 수정하기(put), 데이터 삭제하기(delete)


// app.get()