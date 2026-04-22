//objects - that help you to handle your binary data, example - image processing 
//very helpful in file system operations and very helpful in cyrptography 

const buffOne = Buffer.alloc(10) //allocate a buffer of 10 bytes
console.log(buffOne)

const buffFromString = Buffer.from("Hello")
console.log(buffFromString)

const buffFromArrayOfIntegers = Buffer.from([1, 2, 3])
console.log(buffFromArrayOfIntegers);

buffOne.write("Node js")
console.log("After writing Node Js to buffOne = ", buffOne.toString())

console.log(buffFromString[0])
