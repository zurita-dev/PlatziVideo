import express from 'express';

const app = express();

// tipo de ruta '/', index. '/ssr' ssr. '*' todas.
app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('server running on port 3000');
});
