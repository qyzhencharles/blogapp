const express = require('express');
const mongoose = require('mongoose');
const app = express();

// 设置连接 MongoDB
mongoose.connect('mongodb://localhost/my-blog', { useNewUrlParser: true, useUnifiedTopology: true });

// 设置 EJS 作为模板引擎
app.set('view engine', 'ejs');

// 设置路由
app.get('/', (req, res) => {
  res.render('index');
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
