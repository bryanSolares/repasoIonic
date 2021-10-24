"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller/controller");
const routes = express_1.Router();
routes.post('/login', controller_1.Controller.login);
routes.post('/logout', controller_1.Controller.logout);
exports.default = routes;
