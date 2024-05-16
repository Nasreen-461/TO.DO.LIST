import inquirer from "inquirer"
let todos = []// Shopper []
let condition = true

while(condition)
{ 
   let todoQuestions= await inquirer.prompt(
   [  
   {
    name: "firstQuestion",
    type: "input",
    message: "what would you like to add in your todos?"
   },
   {
    name: `secondQuestion`,
    type: "confirm",// when type is confirm answer is in yes or no
    message: "would you like to add more in your todos?",
    default: "true"
   }
]
)
 todos.push(todoQuestions.firstQuestion);
 console.log(todos);
 // the loop is running on the based of this veriable condition
 condition = todoQuestions.secondQuestion;
}