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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const auth_1 = __importDefault(require("../auth/routes/auth"));
const user_1 = __importDefault(require("../user/routes/user"));
class Server {
    constructor() {
        this.port = 3000;
        this.app = express_1.default();
        this.startMiddlwares();
        this.startRoutes();
        this.connectToDataBase();
    }
    startServe() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    }
    startMiddlwares() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use(morgan_1.default('dev'));
    }
    startRoutes() {
        this.app.use('/auth', auth_1.default);
        this.app.use('/user', user_1.default);
    }
    connectToDataBase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield mongoose_1.default.connect('mongodb://localhost:27017/photosGram', (error) => {
                if (error) {
                    console.error(error);
                }
                else {
                    console.log('Connect to Database');
                }
            });
        });
    }
}
exports.default = Server;
//0PtjtbwMiVnz65UK
//mongodb+srv://mean_full:0PtjtbwMiVnz65UK@cluster0.gw8x9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
