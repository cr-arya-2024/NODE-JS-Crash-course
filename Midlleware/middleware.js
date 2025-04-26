import {createServer} from 'http'

const users=[
    {id:1,name:'Arya'},
    {id:2,name:'Dheeraj'},
    {id:3,name:'Mohana'}]

const logger=(res,req,next)=>{//this is a middleware
    next()
}
const jsonMiddleware=(req,res,next)=>{//this is a middleware
res.setHeader('Content-Type','application/json')
next()
}
const getUsersHandler=(res,req)=>{//this is a normal function not a middelware
    res.write(JSON.stringify(users))
    res.end()
}
const createUserHandler=(res,req)=>{//this is a function used for post the data to the server
    let body=''
    req.on('data',(chunk)=>{
        body+=chunk.toString()
    })
    req.on('end',()=>{
        const user=JSON.parse(body)
        users.push(user)
        res.write(JSON.stringify(users))
        res.end()
    })
}
const userbyId=(res,req)=>{//this is a normal function not a middelware
    const id=req.url.split('/')[3]
    const user=users.find((user)=>user.id===parseInt(id))
    if(user){
        res.write(JSON.stringify(user))}
        else{res.statusCode=404;
            res.write(JSON.stringify({message:"user not found"}))
        }
        res.end()
    }
    const notFoundhandler=(res,req)=>{//this is a normal function not a middelware
res.statusCode=404
res.write(JSON.stringify({message:"router not found"}))
res.end();
}

const server=createServer((req,res)=>{
logger(res,req,()=>{
    jsonMiddleware(req,res,()=>{
        if(req.url==="/api/users" && req.method==="GET"){
            getUsersHandler(res,req)
        } else if(req.url.match(/\/api\/users\/([0-9]+)/)&& req.method==="GET"){
            userbyId(res,req)
        }else if(req.url==="/api/users" && req.method==="POST"){
            
            createUserHandler(res,req)
        }
        else{
            notFoundhandler(res,req)
        }
    })
})
})    
server.listen(8000,()=>{
    console.log('run sucessful');
    
})