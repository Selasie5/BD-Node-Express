import express from 'express';
let app = express();
const port = 3100

//Starting A Working Express Server
app.get('/', (req, res)=>{
    res.send("Hello World, this is my first express app")
})
 app.listen(port)



































 export default app;
