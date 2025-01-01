import readline from "readline";
import fs from 'fs/promises'
import path from "path";

import { fileURLToPath } from 'url';

// Get the __filename and __dirname equivalents
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const fileNameCli = () => {
    rl.question("Enter the file name: ", (name) => {
       rl.question("Enter the Content : ", (data) => {
        fs.writeFile(`${name}.txt`, data, (err) => {
          if(err){
            console.log(`Error find : ${err}` )
          } else {
            console.log(`${name}.txt file created successfully`)
          }
        })
        rl.close()
      })
    })

}
fileNameCli();





// let fileName;
// const filePath = path.join(__dirname, fileName)

// const writeFileExample = async () => {
//     try {
//         const file = await fs.writeFile(filePath, "hello this is a file create in here")
//         console.log("File Created Successfully")
//     } catch (error) {
//         console.log(`File error : ${error}`)
//     } 
// }
// writeFileExample()



