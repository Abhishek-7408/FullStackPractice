import express from 'express';
import dotenv from 'dotenv';


const app = express();
const PORT = 9000


app.use(express.static('dist'))



// app.get('/', (req,res) => {
// res.send('Server is ready')

// })

app.get('/api/jokes', (req,res) => {
    const jokes = [
{
    id:1,
    title:'First',
    content: 'this is First joke'

},
{
    id:2,
    title:'Second',
    content: 'this is Second joke'

},
{
    id:3,
    title:'Third',
    content: 'this is Third joke'

},
{
    id:4,
    title:'Fourth',
    content: 'this is Fourth joke'

},
{
    id:5,
    title:'Fifth',
    content: 'this is Fifth joke'

},
{
    id:6,
    title:'Sixth',
    content: 'this is Sixth joke'

}
    ];
    res.send(jokes)
    })




app.listen(process.env.PORT || 3000, ()=>{
console.log(`Server running on port: ${PORT}`);

})