module.exports = class User{
    constructor(num1, num2, userName = "Tim", userAge= 45){
    this.num1 = num1,
    this.num2 = num2,
    this.userName = userName
    this.userAge = userAge
}
    add(){
        return this.num1 + this.num2
}
    subtract(){
        return this.num1 - this.num2
    }
    multiply(){
        return this.num1 * this.num2
      }
    divide(){
        return this.num1 / this.num2
}
    greeting(){
        return "Welcome" + " "+ this.userName + " " + this.userAge
    }

    stringMaker(){
        return this.num1.toString() + this.num2.toString()
    }
}




