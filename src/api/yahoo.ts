import {Request, Response} from 'express'
let yahooFinance = require('yahoo-finance');

var today = new Date()
var currentYear = today.getFullYear()
var currentDate = currentYear +'-'+(today.getMonth()+1)+'-'+today.getDate()
var PastDate = (currentYear-5) +'-'+(today.getMonth()+1)+'-'+today.getDate()

export default async function handler (req: Request, res: Response) {
  if (!req.query || !req.query.symbol)
    res.status(400).end();
  else {
    await yahooFinance.historical({
      symbol: req.query.symbol,
      from: PastDate,
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