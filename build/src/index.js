"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('hola mundo');
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log('Server is running');
});
