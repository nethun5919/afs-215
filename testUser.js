

const User = require ('./user')

user1 = new User (1,2) 
console.log(user1.add())
console.log(user1.subtract())
console.log(user1.multiply())
console.log(user1.divide())
console.log(user1.greeting())
console.log(user1.stringMaker())

user2 = new User (6,7) 
console.log(user2.add())
console.log(user2.subtract())
console.log(user2.multiply())
console.log(user2.divide())
console.log(user2.greeting())
console.log(user2.stringMaker())