const port = parseInt(process.env.PORT || '3001', 10);

require('./app').listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
