const readline = require("readline");
const fs = require("fs");
const { fileURLToPath } = require("url");

/* LECTURE 4: Code Example 
 Reading input and Writing Output

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Please Enter your name : ", (name) => {
    console.log("You Entered :", name)
    rl.close()
})

rl.on("close", () => {
    console.log("Interface closed");
    process.exit(0)
})
    */

// Lecture 5: Code Example
// Reading and Writing to a file Synchronously

/* let testIn = fs.readFileSync(`./Files/input.txt`, 'utf-8')
console.log(testIn)

let content = `Data read from input file ${testIn} \n Date Created ${new Date()}`
fs.writeFileSync(`./Files/output.txt`, content) 
*/

/* 
Lecture 7: Reading and writing a file asyn
*/
fs.readFile(`./Files/start.txt`, `utf-8`, (error, data) => {
  console.log(data);
  fs.readFile(`./Files/${data}.txt`, "utf-8", (error1, data1) => {
    console.log(data1);
    fs.readFile(`./Files/append.txt`, 'utf-8', (error2, data2) => {
        console.log(data2)
        fs.writeFile(`./Files/output1.txt`, `${data} \n\n ${data1} \n\n ${new Date()}`, (error3, data3) => {
            console.log(error3)
        })
    })
  });
});
