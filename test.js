const expect = require('chai').expect
function calculator(num1,num2,action){
if (action && typeof num1 === 'number'&& typeof num2=== 'number' ) {
 
  if(action === 'add'){
    return num1 + num2
  }
if(action === 'subtract'){
  return num1 - num2
  }
if(action === 'multiply'){
  return num1 * num2
 } 
 if(action === 'divide'){
  return num1 / num2
 } 
}else {
  return "Try again, only num allowed"
}    
}
it('expect passing text', function(){
expect (typeof calculator).to.equal("function")
})
it('adding test', function(){
    expect ( calculator(21,10, "add")).to.equal(31)
    })
it('subtract test', function(){
   expect ( calculator(21,10, "subtract")).to.equal(11)
})
it('multiply test', function(){
  expect ( calculator(21,10, "multiply")).to.equal(210)
})
it('divide test', function(){
  expect ( calculator(21,10, "divide")).to.equal(2.1)
})
it('not a number', function(){
  expect ( calculator(21,'10', "divide")).to.equal("Try again, only num allowed")
})