// const func = () => {
//     if (...) ...
// }



// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
//   }


 const func = (age) => {
   
        return (age > 18) ?  true : confirm('Do you have your parents permission to access this page?');
    
 }

let result =func(20);
console.log(result);


// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(a,b){
    let result=1;
  for (let i= 1; i<=b; i++) {
     
      result=result*a;
  }
  return result;

}

console.log(pow(3,3));



// Exercise 3
// Replace Function Expressions with arrow functions in the code:


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// )




  const fun = (question, yes, no) =>{
    if (confirm(question)) yes()
    else no()
  }
  
  (
    "Do you agree?",
    function() { alert("You agreed.") },
    function() { alert("You canceled the execution.") }
  )


//   Exercise 4
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {

    sum(){
        return this.a + this.b;
    },

    mul(){
        return this.a * this.b;
    },

    read(){
        this.a =+prompt('a?' , 0);
        this.b = +prompt('b?', 0);
    }

  
};


calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Exercise 5
// Write a function min(a,b) which returns the least of two numbers a and b. Use arrow function along with the question mark operator ?
  
 const min = (a,b) => {

     const result =(a>b)?  "a is big" : "b is big";
     
     return result;
  }

  console.log(min(10,11));