const fs = require("fs/promises")
const path = require("path")

const fileName = "fsAyncWait.txt"
const filePath = path.join(__dirname, fileName)

const file = __dirname

// fs.promises.readdir(file).then((data) => console.log(data)).catch((error) => console.log(error))

// const readFile = async () => {
//     try {
//         const res = await fs.promises.readdir(file)
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }
// readFile();



//*-------------------------------------------------------------------------------------*
//* fsPromises.writeFile() : Writes data to a file asynchronously. If the file exists, it overwrites the content.
//! syntax: fs.Promises.writeFile(path, data, options);

//? path: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Specifies encoding (e.g., 'utf8'), mode, or flags.
//*-------------------------------------------------------------------------------------*

// const writeFileExample = async () => {
//     try {
//         const res = await fs.writeFile(filePath, "this is aa sync await file")       
//         console.log("file created")
//     } catch (error) {
//         console.log(error)
//     }
// }
// writeFileExample()

//*-------------------------------------------------------------------------------------*
//* Reading a File: fsPromises.readFile() : Reads the contents of a file asynchronously.
//! syntax: fsPromises.readFile(path, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*

// const ReadFileExample = async () => {
//     try {
//         const res = await fs.readFile(filePath, "utf-8")       
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }
// ReadFileExample()


//*-------------------------------------------------------------------------------------*
//* Appending Data: fsPromises.appendFile() : Adds content to the end of a file. If the file does not exist, it creates a new one.
//! syntax: fsPromises.appendFile(path, data, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*

// const updateFileExample = async () => {
//     try {
//         const res = await fs.appendFile(filePath,  "\n this is updated line", "utf-8")       
//         console.log("file is updated")
//     } catch (error) {
//         console.log(error)
//     }
// }
// updateFileExample()


//*-------------------------------------------------------------------------------------*
//* Deleting a File: fsPromises.unlink() : Deletes a file by its path.
//! syntax: fsPromises.unlink(path)

//? path: The file path to delete.
//*-------------------------------------------------------------------------------------*

const deletedFile = async () => {
    try {
        const res = await fs.unlink("deleted.txt")       
        console.log("file is deleted")
    } catch (error) {
        console.log(error)
    }
}
deletedFile()