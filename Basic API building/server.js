import {createServer} from 'http'
const user=[
    {id:1,name:"arya"},
    {id:2,name:"lochan"},
    {id:3,name:"ram"},
]
const server=createServer((req,res)=>{
if(req.url=="/api/users" && req.method=="GET"){
    res.setHeader('Content-Type','application/json')
    // res.setHeader("Content-Type","application/json")
    res.write(JSON.stringify(user))
    res.end()
}
else{
    res.writeHead(404,{"Content-Type":"application/json"})
    res.write("404 Not Found")
    res.end()
}
})
server.listen(3000,()=>{
console.log('server is running on port 3000');
})