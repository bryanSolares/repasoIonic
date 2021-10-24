"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'Required Name'] },
    avatar: { type: String, default: 'av-1.png' },
    email: { type: String, unique: true, required: [true, 'Required Email'] },
    password: { type: String, required: [true, 'Required Password'] },
});
exports.User = mongoose_1.model('User', userSchema);
