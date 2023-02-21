import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());                 // support  encoded Json
app.use(bodyParser.urlencoded({             // support  encoded URL
    extended: true
}));

app.get('/', (req, res) => {
    res.send('Simple API to call un message "Hello World"');                   
});

app.get('/test', (req, res) => {                                // Api to send a data JSON , being "message"
    res.json({message: 'Test : this is the message from server'});
});

app.listen(4000, () => console.log('App listening on port 4000'));

