const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('public'));

app.get('/users', function (req, res) {
  const result = Math.random() > 0.5 ? 'heads' : 'tails';
  res.json({ data: result });
});

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}...`);
});
