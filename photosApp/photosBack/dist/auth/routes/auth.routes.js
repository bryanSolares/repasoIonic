"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller/controller");
const routes = express_1.Router();
routes.get('/', controller_1.Controller.allUsers);
routes.post('/create', controller_1.Controller.newUser);
exports.default = routes;
