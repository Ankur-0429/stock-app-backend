import { Request, Response } from 'express';
import yahoo from './yahoo'
import express from 'express'
import cors from 'cors'
const port: number = 8080;
const app = express();

app.use(cors())

// @ts-ignore
app.get('/', (req: Request, res: Response)=>{
    res.send('home')
})

// @ts-ignore
app.get('/api/stocks/:year/query', (req: Request,res: Response)=> {
    yahoo(req, res)
})


// tslint:disable-next-line:no-console
app.listen(port, () => console.log('listening in port ' + port));
