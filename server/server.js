const express = require('express');
const cors = require('cors');
const app = express();

const port = 3005;

const colors = require('./router/colorData');
app.use(cors());
app.use(express.json());

app.use('/', colors);

app.use((req, res, next) => {
    res.status(404).send('Not Found!');
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
      message: 'Internal Server Error',
      stacktrace: err.toString()
    });
  });


app.listen(port, () => {
    console.log(`[run] server running! on port : ${port}`);
});
