const app = require('express')();
const helmet = require('helmet');

app.use(helmet());
app.get('/', (req,res) => {
    res.send('Welcome!!');
});

app.listen(3000, () => {
    console.log('Listening');
});