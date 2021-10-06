import {Request, Response} from 'express'
let yahooFinance = require('yahoo-finance');


export default async function handler (req: Request, res: Response) {
  if (!req.query || !req.query.symbol)
    res.status(400).end();
  else {
    await yahooFinance.historical({
      symbol: req.query.symbol,
      from: '2021-06-01',
      to: '2021-12-31',
    }, function (err: any, quotes: [{}]) {
      if (err)
        res.status(500).end();
      else
        res.status(200).json(quotes);
    });
  }
}