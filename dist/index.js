"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yahoo_1 = __importDefault(require("./yahoo"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const port = 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    // origin: 'https://stock-app-ncxz169d6-ankur-0429.vercel.app/',
    credentials: true
}));
// @ts-ignore
app.get('/', (req, res) => {
    res.send('home');
});
// @ts-ignore
app.get('/api/stocks/:year/query', (req, res) => {
    (0, yahoo_1.default)(req, res);
});
// tslint:disable-next-line:no-console
app.listen(port, () => console.log('listening in port ' + port));
//# sourceMappingURL=index.js.map