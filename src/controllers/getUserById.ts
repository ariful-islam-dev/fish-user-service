import prisma from '../prisma';
import { User } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
const getUserById = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const {id}=req.params;
        const field = req.query.field as string;
        let user:User | null = null;
        if(field === 'authUserId'){
            user = await prisma.user.findUnique({where:{authUserId:id}});

        }else{
            user = await prisma.user.findUnique({where: {id: id}})
        }

        if(!user){
            return res.status(404).json({
                code: 404,
                message: 'User not found'
            })
        }

        return res.status(200).json({
            code: 200,
            message: 'Get user by id',
            data: user
        })
    }catch(error){
        next(error)
    }
}

export default getUserById;