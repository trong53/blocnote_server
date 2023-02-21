import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Simple API to call un message "Hello World"');                   
});

app.get('/test', (req, res) => {
    res.json({message: 'Test : this is the message from server'});
});

app.listen(4000, () => console.log('App listening on port 4000'));

