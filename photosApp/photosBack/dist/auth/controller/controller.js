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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const user_1 = require("../../user/model/user");
const jwt_1 = __importDefault(require("../helpers/jwt"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_1.User.findOne({ email });
        if (!user) {
            return res.json({ message: 'User not Found', ok: false });
        }
        if (!user.comparePassword(password)) {
            return res.json({ message: 'Password or User invalid', ok: false });
        }
        const payloadParams = {
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
        };
        const token = jwt_1.default.generateToken(payloadParams);
        res.json({ message: 'Welcome', token, ok: true });
    }
    catch (error) {
        return res.json({ message: 'Error on login', error, ok: false });
    }
});
const logout = (req, res) => { };
exports.Controller = { login, logout };
