"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controller/UserController");
const multer_1 = require("../config/multer");
const userRouter = express_1.default.Router();
userRouter.get("/", UserController_1.getAllUsers);
userRouter.get("/:userId", UserController_1.getOneUser);
userRouter.post("/signup", multer_1.memberImageConfig, UserController_1.newUser);
userRouter.post("/signin", UserController_1.signin);
userRouter.patch("/update", multer_1.memberImageConfig, UserController_1.updateUser);
userRouter.post("/searchuser", UserController_1.searchUser);
exports.default = userRouter;
