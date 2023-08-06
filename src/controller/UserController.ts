import { Request, Response } from "express";
import UserModel from "../model/UserModel";
import cloudinary from "../config/cloudinary";
import bcrypt from "bcrypt"



export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();

    return res.status(200).json({
      message: "gotten all users",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all users",
      data: error,
    });
  }
};

//get one user
export const getOneUser = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findById(req.params.userId);

    return res.status(200).json({
      message: "gotten one user",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all users",
      data: error,
    });
  }
};

//create a user
export const newUser = async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      email,
      password,
      businessName,
      businessContact,
      businessServices,
      memberImage
    } = req.body;

    const slt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, slt)
    const generateNumber = `${Math.floor(Math.random() * 100000)}`;

    const {secure_url} = await cloudinary.uploader?.upload(req?.file!.path);

    const checkExist = await UserModel.findOne({ email });

    if (checkExist) {
      return res.status(500).json({
        message: "This user already exist",
      });
    } else {

      const users = await UserModel.create({
        fullName,
        email,
        password: hash,
        businessName,
        businessContact,
        businessServices,
        MembershipNumber : generateNumber,
        memberImage : secure_url
      });
  
      return res.status(200).json({
        message: "user created",
        data: users,
      });
    }
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get create user",
      data: error?.message,
    });
  }
};


// signin user

export const signin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    
    const { email, password } = req.body;

    const findUser = await UserModel.findOne({ email });

    if (!findUser) {
      return res.status(400).json({
        message: "user does not exist",
      })
    } else {
      const comparePassword = await bcrypt.compare(
        password,
        findUser?.password!
      )
      if (!comparePassword) {
        return res.status(400).json({
          message: "incorrect password"
        })
      }
    }
    return res.status(200).json({
      message: "login successful"
    })

  } catch (error) {
    return res.status(400).json({
      message: "login unsuccessful",
    })
  }
}

// update user

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { fullName, businessName, businessContact, memberImage } = req.body;
    const getUser = await UserModel.findById(req.params.userId);

    const users = await UserModel.findByIdAndUpdate(
      getUser?._id,
      { fullName, businessName, businessContact, memberImage},
      { new: true }
    );

    return res.status(200).json({
      message: "updated a user",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all users",
      data: error,
    });
  }
};


  // Search user
  export const searchUser = async (req: Request, res: Response): Promise<Response> => {

    try {

      const queryData = req.query;
      
      const searchOneUser = await UserModel.find(queryData);

      return res.status(200).json({
        message: "user found",
        data: searchOneUser
      })
      
    } catch (error) {
      return res.status(400).json({
        message: "error finding user",
        data: error,
      })
    }
  }
