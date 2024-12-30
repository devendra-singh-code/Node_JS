// Import EventEmitter class
const EventEmitter = require("events")

// Create instance of EventEmitter
const emitter = new EventEmitter();

// Define an event listener (addListener)
// emitter.on("greet", () => {
//     console.log(`hello Devendra Singh`)
// })

// Trigger ( emit ) the 'greet' event
// emitter.emit('greet')


// You can also pass arguments while emitting
// emitter.on("greet", (name) => {
//     console.log(`hello ${name}`)
// })
// emitter.emit("greet", "Devendra")

emitter.on("greet", (args) => {
    console.log(`hello ${args.name} and your profession is ${args.job}`)
})
emitter.emit("greet", {name: "Devendra Singh", job: "Web Developer"})