import {Request , Response}  from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



//get all todos
exports.getall = async (req : Request,res: Response) => {
    const todos = await prisma.todo.findMany({
        include:{user:true}
    });
    res.json(todos);
};

//create todo
exports.addTodo = async(req:Request, res:Response)=>{
    const {title,description,userId} = req.body;
    console.log("req.body",req.body);
    const todo = await prisma.todo.create({
        data:{
           description:description,
           title:title,
           userId : userId
        }
    })
    res.json(todo);
};


exports.getbyid = async (req:Request,res:Response)=>{
    const {id} = req.params;
    const todo = await prisma.todo.findUnique({
        where:{
            todoId:Number(id)
        },
        include:{user:true}
    });
    res.json(todo);
};

exports.updateTodo = async (req:Request,res:Response)=>{
    const {id} = req.params;
    const {title,description,userId} = req.body;
    const todo = await prisma.todo.update({
        where:{
            todoId:Number(id)
        },
        data:{
            title,
            description,
            userId
        }
    });
    res.json(todo);
}

exports.deleteTodo = async (req:Request,res:Response)=>{
    const {id} = req.params;
    const todo = await prisma.todo.delete({
        where:{
            todoId:Number(id)
        }
    });
    res.json(todo);
}



