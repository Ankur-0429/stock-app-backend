import {Request, Response} from 'express'
// tslint:disable-next-line:no-var-requires
const yahooFinance = require('yahoo-finance');

const handler = async(req: Request, res: Response) => {

  const year = parseInt(req.params.year, 0)
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentDate = currentYear +'-'+(today.getMonth()+1)+'-'+today.getDate()
  const PastDate = (currentYear-year) +'-'+(today.getMonth()+1)+'-'+today.getDate()

  let period = 'm'

  if (year <= 5) {
    period = 'w'
  }
  if (year === 1) {
    period = 'd'
  }


  if (!req.query || !req.query.symbol)
    res.status(400).end();
  else {
    await yahooFinance.historical({
      symbol: req.query.symbol,
      from: PastDate,
      to: currentDate,
      period
    }, (err: any, quotes: [{}]) => {
      if (err)
        res.status(500).end();
      else
        res.status(200).json(quotes);
    });
  }
}


export default handler