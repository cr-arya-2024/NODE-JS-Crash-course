//fs module has inbuilt libraries in which we can use them to write in a file,read into a file,add some text tot the file.

//readFile is a function that reads a file asynchronously and logs its content to the console. If an error occurs, it logs the error instead.
import fs from 'fs/promises';
const readFile=async()=>{
    try {
        const data=await fs.readFile("./text.txt",'utf8')
        console.log(data);
        
    } catch (error) {
        console.log(error)
        
    }
}
// writeFile is a function that writes "hello world" to a file named text.txt asynchronously. If the operation is successful, it logs a success message; otherwise, it logs the error.
const writeFile=async()=>{
    try {
      await fs.writeFile("./text.txt","hello world")
        console.log("file written successfully");  
    } catch (error) {
        console.log(error)
    }
}
//appendFile result is shown in the text file directly 
const appendFile=async()=>{
    try {
        await fs.appendFile("./text.txt","\nhello world2 allmy lovely fans")
        console.log("file appended ");  
    } catch (error) {
        console.log(error)
    }
} 
writeFile()
appendFile()
readFile()