"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'Required Name'] },
    avatar: { type: String, default: 'av-1.png' },
    email: { type: String, unique: true, required: [true, 'Required Email'] },
    password: { type: String, required: [true, 'Required Password'] },
});
userSchema.method('comparePassword', function (password) {
    if (bcrypt_1.default.compareSync(password, this.password)) {
        return true;
    }
    return false;
});
exports.User = mongoose_1.model('User', userSchema);
