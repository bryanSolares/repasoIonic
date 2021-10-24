"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Token {
    constructor() { }
    static generateToken(payload) {
        return jsonwebtoken_1.default.sign(payload, this.seed, {
            expiresIn: this.expires,
        });
    }
    static compareToken(token) {
        return new Promise((res, rej) => {
            const payload = jsonwebtoken_1.default.verify(token, this.seed);
            if (payload) {
                res(payload);
            }
            rej(null);
        });
    }
}
exports.default = Token;
Token.seed = 'este-es-el-seed-ultrasecreto';
Token.expires = '12h';
