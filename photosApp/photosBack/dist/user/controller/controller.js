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
const jwt_1 = __importDefault(require("../../auth/helpers/jwt"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const user = {
        name,
        email,
        password: bcrypt_1.default.hashSync(password, 10),
    };
    try {
        const userCreated = yield user_1.User.create(user);
        const payloadParams = {
            _id: userCreated._id,
            name: userCreated.name,
            email: userCreated.email,
            avatar: userCreated.avatar,
        };
        const token = jwt_1.default.generateToken(payloadParams);
        res.json({ message: 'User created', user: userCreated, token, ok: true });
    }
    catch (error) {
        return res.json({ message: 'Error on create user', error, ok: false });
    }
});
const updateUser = (req, res) => {
    console.log(req.user);
    const { _id } = req.user;
    const { name, email } = req.body;
    try {
        user_1.User.findByIdAndUpdate(_id, { name, email }, { new: true }, (error, newUser) => {
            if (error) {
                return res.json({
                    message: 'Error on update user',
                    error,
                    ok: false,
                });
            }
            if (!newUser) {
                return res.json({
                    message: 'User not found on database',
                    error,
                    ok: false,
                });
            }
            const payloadParams = {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                avatar: newUser.avatar,
            };
            const token = jwt_1.default.generateToken(payloadParams);
            res.json({ message: 'User Updated', token, ok: true });
        });
    }
    catch (error) {
        return res.json({ message: 'Error on update user', error, ok: false });
    }
};
const deleteUser = (req, res) => { };
const allUsers = (req, res) => {
    res.json('hola');
};
exports.Controller = { newUser, updateUser, deleteUser, allUsers };
