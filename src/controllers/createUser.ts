import prisma from "../prisma";
import { UserCreateDTOSchema } from "../schemas";
import { NextFunction, Request, Response } from "express";

const createUser = async(req:Request, res:Response, next:NextFunction)=>{
try {
    // validate user request
    const parseBody = UserCreateDTOSchema.safeParse(req.body)
    if(!parseBody.success){
        return res.status(400).json({
            code: 400,
            message: parseBody.error.errors[0].message
        })
    };

    // check if the authUserId already exists
    const existingUser = await prisma.user.findUnique({
        where:{
            authUserId: parseBody.data.authUserId
        }
    });

    if(existingUser){
        return res.status(400).json({
            code: 400,
            message: 'User already exist'
        })
    }

    // create a new user
    const user = await prisma.user.create({
        data: parseBody.data
    });

    return res.status(201).json({
        code: 201,
        message: 'User Create Successfully',
        data: user
    });

    } catch (err) {
    next(err) 
    }

}

export default createUser;