import App from './app';

const port = parseInt(process.env.PORT || '3001', 10);

App.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
