
module.exports = class Instances{
constructor(num){
 
    this.num = num
  
 
}
  main(){
    if(typeof this.num === "number"){
    if (this.num == 3)
      return "Good Morning"
    else if (this.num ==7)
      return 'Good Afternoon'
    else if (this.num % 3 == 0 && this.num % 7 == 0) 
      return "Good Evening"
    else if (this.num % 3 == 0)
      return "Good Morning"
    else if (this.num % 7 == 0)
      return "Good Afternoon"
    else
      return this.num.toString()
}
else{
  return "Try again with a number"
}
  }
}