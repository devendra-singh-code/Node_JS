const path = require("path")

// __dirname, __filename.....only works in commonjs
// console.log(__dirname)
// console.log(__filename)

// school folder/students/data.txt
const filePath = path.join("folder", "students", "data.txt")
console.log(filePath)

const parseData = path.parse(filePath)
const resolvePath = path.resolve(filePath)
const extname = path.extname(filePath)
const basename = path.basename(filePath)
const dirname = path.dirname(filePath)
const sepertor = path.sep

console.log({parseData, resolvePath, extname, basename, dirname, sepertor})