import inquirer from "inquirer";   //Imported inquirer for user input

const userin= await inquirer.prompt([
   {message: "Select the operation below", type: "list", name: "operator", 
    choices: ["Multiplication", "Division", "Addition", "Subtraction", "BMI"]},
    
])
if(userin.operator === "Multiplication" || userin.operator === "Division" ||userin.operator === "Addition" || userin.operator === "Subtraction"){
const userin2= await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "firstNumber"},
   {message: "Enter second number", type: "number", name: "secondNumber"}
])
    if(userin.operator == "Multiplication"){
    console.log(`The ${userin.operator} answer of ${userin2.firstNumber} and ${userin2.secondNumber} is: `+(userin2.firstNumber*userin2.secondNumber))
}
else if(userin.operator == "Division"){
    console.log(`The ${userin.operator} answer of ${userin2.firstNumber} and ${userin2.secondNumber} is: `+(userin2.firstNumber/userin2.secondNumber))
}
else if(userin.operator == "Addition"){
    console.log(`The ${userin.operator} answer of ${userin2.firstNumber} and ${userin2.secondNumber} is: `+(userin2.firstNumber+userin2.secondNumber))
}
else if(userin.operator == "Subtraction"){
    console.log(`The ${userin.operator} answer of ${userin2.firstNumber} and ${userin2.secondNumber} is: `+(userin2.firstNumber-userin2.secondNumber))
}
}
else {
    const userin1= await inquirer.prompt([
        { message: "Enter your weight in kgs: ", type: "number", name:"weight"},
        {message: "Enter your height in meters: ", type: "number", name: "height"}
])
let bmi=  userin1.weight/(userin1.height*userin1.height);
   if(bmi <= 18.5){
    console.log(`Your BMI is : ${bmi} (Low BMI)`)
}
else if(bmi >= 24.9){
    console.log(`Your BMI is : ${bmi} (High BMI)`)
    
} 
else{
    console.log(`Your BMI is : ${bmi} (Normal BMI)`)
}
}