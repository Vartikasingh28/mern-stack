const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 5000;
const userRouter = require('./routers/userRouter');

const cors = require('cors');
app.use(cors({
    origin : ['http://localhost:3000'],
}));
app.use(express.json());

app.use('/user',userRouter);
app.get('/' , (req, res) => {
    res.send('Working Perfectly');
});
app.get('/add', (req,res) =>{
    res.send('Response from add');
});
app.get('/getall', (req,res) =>{
    res.send('Response from getall');
});
app.get('/update', (req,res) =>{
    res.send('Response from update');
});

app.listen (port, () => {console.log('server started');});
