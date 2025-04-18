// in this file i have understand how to create server
import http from 'http'
const server=http.createServer((req,res)=>{
    
    res.write("HW");
    res.end("Hello world");
});
server.listen(8000,()=>{
  console.log("success");//this function is not compulsary it inndicates the content is connect to localhost 8000
    })