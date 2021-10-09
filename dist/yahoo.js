"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
const yahooFinance = require('yahoo-finance');
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const year = parseInt(req.params.year, 0);
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentDate = currentYear + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const PastDate = (currentYear - year) + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let period = 'm';
    if (year <= 5) {
        period = 'w';
    }
    if (year === 1) {
        period = 'd';
    }
    if (!req.query || !req.query.symbol)
        res.status(400).end();
    else {
        yield yahooFinance.historical({
            symbol: req.query.symbol,
            from: PastDate,
            to: currentDate,
            period
        }, (err, quotes) => {
            if (err)
                res.status(500).end();
            else
                res.status(200).json(quotes);
        });
    }
});
exports.default = handler;
//# sourceMappingURL=yahoo.js.map