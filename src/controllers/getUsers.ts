import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';
const getUsers = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        // const {id}=req.params;
        const users = await prisma.user.findMany();
        res.status(200).json({
            code: 200,
            message: "Retrieve All Users",
            data:users
        })
    } catch (error) {
        next(error)
    }
}

export default getUsers;