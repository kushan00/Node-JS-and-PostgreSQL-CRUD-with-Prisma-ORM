import {Request , Response}  from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


//get all users
exports.getall = async (req : Request,res: Response) => {
    const users = await prisma.user.findMany({
        include:{todos:true}
    });
    res.json(users);
};

//create user
exports.adduser = async(req:Request, res:Response) => {
    const {
        name, 
        email, 
        password
    } = req.body;
   
    const user = await prisma.user.create({
        data : {
           name:name,
           email:email,
           password:password,           
        }
    })
    res.json(user);
};


exports.getbyid = async (req:Request,res:Response)=>{
    const {id} = req.params;
    const user = await prisma.user.findUnique({
        where:{
            id:Number(id)
        },
        include:{todos:true}
    });
    res.json(user);
};

exports.updateuser = async (req:Request,res:Response)=>{
    const {id} = req.params;
    const {
       name, 
       email, 
       password
     } = req.body;

    const user = await prisma.user.update({
        where:{
            id:Number(id)
        },
        data:{
            name,
            email,
            password
        }
    });
    res.json(user);
}

exports.deleteuser = async (req:Request,res:Response)=>{
    const {id} = req.params;
    const user = await prisma.user.delete({
        where:{
            id:Number(id)
        }
    });
    res.json(user);
}



