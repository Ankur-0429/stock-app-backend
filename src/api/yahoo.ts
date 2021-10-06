import {Request, Response} from 'express'
let yahooFinance = require('yahoo-finance');

var today = new Date()
var currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

export default async function handler (req: Request, res: Response) {
  if (!req.query || !req.query.symbol)
    res.status(400).end();
  else {
    await yahooFinance.historical({
      symbol: req.query.symbol,
      from: '2015-10-01',
      to: currentDate,
      period: req.query.period
    }, function (err: any, quotes: [{}]) {
      if (err)
        res.status(500).end();
      else
        res.status(200).json(quotes);
    });
  }
}