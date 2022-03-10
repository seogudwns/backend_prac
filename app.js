const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.send('Starting page');
})
//req:응답을 받는거.(ex.. 주소창에서 :id같은 것이 있을 때, req.params.id)
//res: 받은 후 전달해주는거.

app.listen(3000, () => {
  console.log('서버 실행!');
});