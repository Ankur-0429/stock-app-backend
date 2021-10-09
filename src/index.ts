import { Request, Response } from 'express';
import yahoo from './api/yahoo'
import express from 'express'
import cors from 'cors'
const port: Number = 5000;

const app = express();

app.use(cors({
    origin: 'https://stock-app-alpha.vercel.app/',
    credentials: true
}))

// @ts-ignore
app.get('/', (req: Request, res: Response)=>{
    res.send('home')
})

// @ts-ignore
app.get('/api/stocks/:year/query', (req: Request,res: Response)=> {
    yahoo(req, res)
})

app.listen(port, () => console.log("Listening on port " + port));
