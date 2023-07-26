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
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const DB_URL = "mongodb://0.0.0.0:27017/forEben";
// const DB_URL = "mongodb://127.0.0.1/Eben";
// const MONGOOSE_DB = "mongodb+srv://eben1909:victoria-19@cluster0.u3wri8y.mongodb.net/?retryWrites=true&w=majority";
const MONGOOSE_DB = "mongodb+srv://eben19:ebenezer19@cluster0.u3wri8y.mongodb.net/?retryWrites=true&w=majority";
// const url = process.env.MONGOOSE_DB;
const dbConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield mongoose_1.default.connect(MONGOOSE_DB);
        console.log(`connected to database on port ${conn.connection.host}`);
    }
    catch (error) {
        console.log(`failed to connect to database`, error);
    }
});
exports.default = dbConfig;
// const dbConfig = () => {
//     try {
//       mongoose
//         .connect(MONGOOSE_DB)
//         .then(() => {
//           console.log('connected to database on port');
//         })
//     } catch (error) {
//       console.log(`failed to connect to database` , error);
//     }
//   };
//   export default dbConfig;
