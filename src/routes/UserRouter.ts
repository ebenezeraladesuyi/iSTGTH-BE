import express from "express"
import { getAllUsers, getOneUser, newUser, signin, updateUser, searchUser } from "../controller/UserController"
import { memberImageConfig } from "../config/multer"

const userRouter = express.Router()

userRouter.get("/" , getAllUsers)
userRouter.get("/:userId" , getOneUser)
userRouter.post("/signup" ,memberImageConfig , newUser)
userRouter.post("/signin", signin)
userRouter.patch("/update", memberImageConfig, updateUser)
userRouter.post("/searchuser", searchUser)


export default userRouter