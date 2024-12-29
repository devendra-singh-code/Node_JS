const add = (a, b) => {
    return a + b;
}

const mult = (a, b) => {
    return a * b
}
const minus = (a, b) => {
    return a - b
}

// module.exports = add;
// module.exports = mult   // wrong

// module.exports.add = add
// module.exports.mult = mult

module.exports = {mult , add, minus}


// module.exports is a single object or value 
// When you reassign module.exports (e.g. module.exports = add), it completely replaces whatever was previouly assigned.
// If you reassign it again (module.exports = mult), the previous value(add), replaced with mult