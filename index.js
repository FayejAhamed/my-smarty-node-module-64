const express = require('express');
const cors = require('cors')
const { get } = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res )=>{
    res.send('Hello from my Smarty Pant!!!  ')
});

const users = [
    {id:1, name:'shabaana mam', email: 'sahabana@gmail.com', phone: '017888888'},
    {id:2, name:'shabnur mam', email: 'shabnur@gmail.com', phone: '017888888'},
    {id:3, name:'shucoruta mam', email: 'shucorita@gmail.com', phone: '017888888'},
    {id:4, name:'shuchonda mam', email: 'shuconda@gmail.com', phone: '017888888'},
    {id:5, name:'srabonti mam', email: 'srabonti@gmail.com', phone: '017888888'},
    {id:6, name:'shabaana mam', email: 'sahabana2gmail.com', phone: '017888888'},
    {id:7, name:'shabaana mam', email: 'sahabana2gmail.com', phone: '017888888'}
]

app.get('/users', (req, res)=>{
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(matched)
    }
    else{
        res.send(users)
    }
});
app.get('/users/:id', (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u=>u.id === id);
    res.send(user)
});
app.post('/user', (req, res)=>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () =>{
    console.log('listen to port', port );
})