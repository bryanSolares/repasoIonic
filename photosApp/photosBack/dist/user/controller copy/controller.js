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
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../model/user");
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt_1.default.hashSync(req.body.password, 10),
    };
    try {
        const userCreated = yield user_1.User.create(user);
        res.json({ message: 'User created', user: userCreated });
    }
    catch (error) {
        return res.json({ message: 'Error on create user', error });
    }
});
const editUser = (req, res) => { };
const deleteUser = (req, res) => { };
const allUsers = (req, res) => {
    res.json('hola');
};
exports.Controller = { newUser, editUser, deleteUser, allUsers };
