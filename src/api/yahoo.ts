import {Request, Response} from 'express'
let yahooFinance = require('yahoo-finance');

export default async function handler (req: Request, res: Response) {
  
  var year = parseInt(req.params.year)
  var today = new Date()
  var currentYear = today.getFullYear()
  var currentDate = currentYear +'-'+(today.getMonth()+1)+'-'+today.getDate()
  var PastDate = (currentYear-year) +'-'+(today.getMonth()+1)+'-'+today.getDate()
  
  var period = 'm'
  
  if (year <= 5) {
    period = 'w'
  }
  if (year == 1) {
    period = 'd'
  }


  if (!req.query || !req.query.symbol)
    res.status(400).end();
  else {
    await yahooFinance.historical({
      symbol: req.query.symbol,
      from: PastDate,
      to: currentDate,
      period: period
    }, function (err: any, quotes: [{}]) {
      if (err)
        res.status(500).end();
      else
        res.status(200).json(quotes);
    });
  }
}