app = require('./src/app');

const port = '7000';
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})