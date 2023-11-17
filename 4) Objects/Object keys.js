function numberOfKeys(object) {
    let number = Object.keys(object)
    return number.length
}

const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
}

const test = numberOfKeys(object)
console.log(test)
module.exports = numberOfKeys;