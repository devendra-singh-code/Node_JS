const fs = require("fs")
const path = require("path")

const fileName = 'hello.txt'
const filePath = path.join(__dirname, fileName)


// const file = fs.writeFileSync(filePath, "Hello this is a file for expirement", "utf-8")
// console.log(file)

// Synchromous task
// const file = fs.readFileSync(filePath, "utf-8")
// console.log(`Sync `, file)
// console.log("Code Start here....")

// Asynchronous task

fs.readFile(filePath, "utf-8", (err, data) => {
    if(err) throw err
    console.log(data)
})
console.log("Codes start here...")