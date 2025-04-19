import { log } from 'console'
import http from 'http'
const server = http.createServer((req, res) => {
    try{
if(req.method === 'GET'){
    if(req.url==='/'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>Home Page</h1>')}
    else if(req.url==='/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>About Page</h1>')    
    }
    else if(req.url==='/contact'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>Contact Page</h1>')    }   
    else if(req.url==='/services'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>Services Page</h1>')    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>404 Not Found</h1>')    
    }
}
}catch(err){
res.writeHead(500, { 'Content-Type': 'text/html' })
res.end('<h1>500 Internal Server Error</h1>');
    }   
})
server.listen(8000, () => {
  console.log('Server running successfully  ')
})