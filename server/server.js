const fs = require('fs');
const cors = require('cors');
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(cors());

// create application/json parser
const jsonParser = bodyParser.json()

app.use(jsonParser);

app.get('/hello', function (req, res) {
  console.debug(`Was called with: ${req.query.foo}`)
  res.status(200).send({data: "Hello World!"});
})

app.post('/read', function (req, res) {
  const filename = req.body.name;
  const data = fs.readFileSync(__dirname + `\\data\\${filename}`);
  const parsed = JSON.parse(data);
  res.status(200).send({data: parsed});
})

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));