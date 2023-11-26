import { deletePost, getById, updadePost } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try{
        const id = req.url.split("blog/")[1]
        const post = getById(id)
        if(!post){
            return NextResponse.json({msg:'id não encontrado'},{status:404})
        }
        return NextResponse.json({msg:'id ok'},{status:200})
    }catch(err){
        return NextResponse.json({msg:'error', err},{status:500})
    }
   
}

export const PUT = async (req: Request) => {
    try{
        const {title, desc} = await req.json()
        const id = req.url.split("blog/")[1]
        updadePost(id, title, desc)
            return NextResponse.json({msg:'alterado'},{status:200})
    }catch(err){
        return NextResponse.json({msg:'error', err},{status:500})
    }
}

export const DELETE = async (req: Request) => {
    try{
        const id = req.url.split("blog/")[1]
        deletePost(id)      
        return NextResponse.json({msg:'alterado'},{status:200})
    }catch(err){
        return NextResponse.json({msg:'error', err},{status:500})
    }
}
