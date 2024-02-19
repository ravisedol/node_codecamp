const app = require('./app');

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Sever started at port: ${PORT}`);
});