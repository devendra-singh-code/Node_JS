const EventEmitter = require("events")
const emitter = new EventEmitter();

const eventCounts = {
    "user-login": 0,
    "user-purchase": 0,
    "profile-update": 0,
    "user-logout": 0
}


emitter.on("user-login", (username) => {
    console.log(`Hello ${username}`)
})

// emitter.on("user-purchase", (username, purchase) => {
//     eventCounts["user-purchase"]++
//     console.log(`${username} purchased ${purchase}`)
// })

// emitter.on("profile-update", (username, field) => {
//     eventCounts["profile-update"]++
//     console.log(`${username} updated ${field}`)
// })

// emitter.on("user-logout", (username) => {
//     eventCounts["user-logout"]++
//     console.log(`${username} is logout`)
// })

emitter.on("Summary", ()=> {
    console.log(newEmit)
    // console.log(eventCounts)
})

emitter.emit("user-login", "Devendra Singh")
// emitter.emit("user-purchase", "Devendra Singh", "laptop")
// emitter.emit("profile-update", "Devendra Singh", "email")
// emitter.emit("user-logout", "Devendra Singh")
emitter.emit("Summary")
