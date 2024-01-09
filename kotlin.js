const questions = [

    {
      question: "What is a correct syntax to output (HELLLO WORLD) in Kotlin?",
      options: [
         "Syatem.out.printline(HELLO WORLD)", 
         "cout<<HELLO WORLD", 
        "Console.WriteLine(HELLO WORLD)", 
         "println (HELLO WORLD)" 
      ],
      answer :  "println (HELLO WORLD)"
    },
    {
      question: "How do you insert COMMENTS in Kotlin code?",
      options: [
          "//",
         "/*", 
          "--", 
          "#",
      ],
      answer :"//"
    },
  
    {
      question: "Which keyword is used to declare a function?",
      options: [
        "fun",
        "function",
        "decl",
        "define"
      ],
      answer:"fun"
    },
 
    {
      question: "How can you create a variable with the numeric value 5?",
      options: [
        "val num = 5",
        "num = int", 
        "int num = 5", 
        "num = 5",
      ],
      answer: "val num = 5"
    },
    {
      question: "How can you create a variable with the floating number 2.8?",
      options: [
       "double num = 2.8", 
        "val num = 2.8", 
        "num = 2.8 float", 
        "float num = 2.8",
      ],
      answer: "val num = 2.8"
    },
    {
      question: "Which operator is used to add together two values?",
      options: [
        "The ADD keyword", 
        "The * sign", 
        "The + sign", 
        "The & sign", 
      ],
      answer: "The + sign"
    },
    {
      question: "What is the output of the following code: printlin(5 > 3 && 5 < 10)",
      options: [
        "true", 
        "5", 
        "false", 
        "2", 
      ],
      answer: "true"
    },
    {
      question: "The value of a string variable must be surrounded by single quotes.",
      options: [
        "True", 
        "False", 
        "Undefined", 
        "Error", 
      ],
      answer: "False"
    },
    {
      question: "Which operator can be used to compare two values?",
      options: [
        "<>", 
        "><", 
        "==", 
        "=",
      ],
      answer: "=="
    },
    {
      question: "Which property can be used to find the length of a string?",
      options: [
        "The size property", 
        "The length property", 
        "The len property", 
        "The size of property", 
      ],
      answer:  "The length property"
    },
    {
      question: "In Kotlin, code statements must end with a semicolon (;)",
      options: [
        "true", 
        "false", 
        "undefined", 
        "Error", 
      ],
      answer: "false"
    },
    {
      question: "Which symbol is used for string templates/interpolation?",
      options: [
        "&", 
        ".", 
        "*", 
        "$", 
      ],
      answer: "$"
    },
    {
      question: "To create an array in Kotlin, use",
      options: [
        "None of the above", 
        "[]", 
        "The array of () function", 
        "{}", 
      ],
      answer: "The array of () function"
    },
    {
      question: "Array indexes start with:",
      options: [
        "1", 
        "0", 
        "None of above", 
        "", 
      ],
      answer: "0"
    },
    {
      question: "How do you call a function in Kotlin?",
      options: [
        "myFunction()", 
        "myFunction;", 
        "myFunction[]", 
        "(myFunction)", 
      ],
      answer: "myFunction()"
    },
    {
      question: "How do you start writing an if statement in Kotlin?",
      options: [
        "if x > y", 
        "if x > y then", 
        "if (x > y)", 
        "if x>y()", 
      ],
      answer: "if (x > y)"
    },
    {
      question: "How do you start writing a while loop in Kotlin?",
      options: [
        "while x < y then", 
        "if x > y while", 
        "while x < y", 
        "while (x < y)", 
      ],
      answer: "while (x < y)"
    },
    {
      question: "Which keyword is used to return a value inside a function?",
      options: [
        "get", 
        "void", 
        "return", 
        "break", 
      ],
      answer: "return"
    },
    {
      question: "How do you start writing a for loop in Kotlin, to loop through arrays?",
      options: [
        "for x",  
        "for (x in y)", 
        "for (x)", 
        "for x in y", 
      ],
      answer: "for (x in y)"
    },
    {
      question: "How can you create a range of numbers between 5 and 15 in Kotlin?",
      options: [
        "for (5...15)", 
        "for (5 to 15)", 
        "for (x in 5 to 15)", 
        "for (x in 5..15", 
      ],
      answer: "for (x in 5..15"
    },
    {
      question: "Which statement is used to stop a loop?",
      options: [
        "break", 
        "void", 
        "stop", 
        "exit", 
      ],
      answer: "break"
    },
    {
      question: "Which keyword is used to create a class in Kotlin?",
      options: [
        "class", 
        "className", 
        "MyClass", 
        "class()", 
      ],
      answer: "class"
    },
    {
      question: "What is the correct way to create an object called myObj of MyClass?",
      options: [
        "Main myObj = new MyClass();", 
        "val myObj = MyClass()", 
        "MyClass.new myObj", 
        "None of the above", 
      ],
      answer: "val myObj = MyClass()"
    },
    {
      question: "In Kotlin, it is possible to inherit class properties and functions from one class to another.?",
      options: [
        "True", 
        "False", 
        "None", 
        "Error",
      ],
      answer: "True"
    },
    {
      question: "What is the fname known as in the following code: fun myFunction(fname:String)",
      options: [
        "override", 
        "parameter",
        "inherit", 
        "range", 
      ],
      answer:  "parameter"
    },
    {
      question: "How do you declare a constant variable in Kotlin?",
      options: [
       "let",
       "const",
       "final",
       "val",
     ],
answer: "val"
    },
    {
question: "What is the purpose of the init block in a Kotlin class?",
options: [
 "It is used for initializing variables.",
 "It defines the main method of the class.",
 "It is executed after the class is instantiated.",
 "It is a reserved keyword in Kotlin.",
],
answer:  "It is executed after the class is instantiated."
    },
    {
question: "Which of the following is the correct way to define a nullable variable in Kotlin?",
options:[
 "var name: String",
 "var name: String?",
 "val name: String",
 "val name: String?",
],
answer:  "var name: String?",
    },
{
question:  "What is the purpose of the lateinit keyword in Kotlin?",
options:[
 "It is used to declare a variable with a late initialization.",
 "It indicates that a variable can be null.",
 "It is a keyword for defining late-binding functions.",
 "It is used to define a constant value.",
],
answer:  "It is used to declare a variable with a late initialization.",
},
{
question: "How do you perform a type check in Kotlin?",
options:[
 "typeOf",
 "checkType",
 "is",
 "typeCheck",
],
answer: "is",
},
]

const submit = document.getElementById('submit');
const setRecord = document.getElementById('setRecord');
const detail = document.getElementById('detail');
const blur = document.getElementById('blur');
const nameInput = document.getElementById('nameInput');
const idInput = document.getElementById('idInput');
const recordButton = document.getElementById('recordButton');
const popup = document.getElementById('popup');
const recordList = document.getElementById('recordList');
const error = document.querySelector('.error');
let displayQuestion = document.querySelector('.displayQuestion');
let optionsCh = document.querySelector('.options');
let question = document.querySelector('.question');
let questionContainer = document.querySelector('.questionContainer');

const nextBtn = document.getElementById('nextBtn');
const myul = document.getElementById('myul');
const record = JSON.parse(localStorage.getItem("record")) || []

submit.addEventListener('click', ()=>{
  if(nameInput.value == "" ){
error.classList.add('show');

  }else if(idInput.value == ""){

    error.classList.add('show');
}else{
  error.classList.remove('show');
  blur.classList.remove('active');
  detail.classList.add('inactive');
}
});
setRecord.addEventListener('click', ()=>{

  popup.classList.remove('open-popup')
   blur.classList.remove('active');
   detail.classList.add('inactive');
   
});

recordButton.addEventListener('click', ()=>{
  let recordsHTML = ''; 

  record.forEach((rec) => {
    recordsHTML += `<li class="recordListing"><div>Name: ${rec.name}</div><div>Id: ${rec.Id} <span>score: ${rec.myScore}</span></div></li>`;
  });

  recordList.innerHTML = recordsHTML;
  console.log(record)

  blur.classList.add('active');
popup.classList.add('open-popup')
}) 


let previousNumbers = [];
let un;
generateUniqueRandomNumbers = (min, max, count)=> {
  let uniqueNumbers = [];
  
  while (uniqueNumbers.length < count) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (!previousNumbers.includes(randomNumber) && !uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }
  
  previousNumbers = previousNumbers.concat(uniqueNumbers);
  
  return uniqueNumbers;
}

let uniqueNumbers = generateUniqueRandomNumbers(0, 29, 10);
let score = 0;
let quesCount = 0;
let finalScore;
let questionNumber = 1;
let i=0;

let getRandQuestion = () =>{
 myul.innerHTML = "";
 question.innerHTML = "Question # "+questionNumber;
 if(questionNumber > 10){
   finalScore = score;
   let value = {
    name:nameInput.value,
    Id:idInput.value,
    myScore: finalScore
  }
  record.push({...value})
  localStorage.setItem("record", JSON.stringify(record));
  optionsCh.innerHTML = "";
  displayQuestion.innerHTML = "";
  question.innerHTML = "Final Score";
  questionContainer.innerHTML = "Your score is "+ score +"/10";
  nextBtn.style.display = "none";
  return 0;
 }
 let currQues = questions[ uniqueNumbers[i]];
 console.log( uniqueNumbers[i]);
 displayQuestion.innerHTML = currQues.question;


 currQues.options.forEach((option)=>{
   const li = document.createElement("li");
   li.innerHTML = "";
  li.classList.add('choice');
  li.textContent = option;

  li.addEventListener('click',()=>{
    let opt = li.textContent;
  
    if(opt == currQues.answer){
      li.classList.add('correct')
      myul.classList.add('disable')
      score++
    }else if(opt !== currQues.answer){
      li.classList.add('incorrect')
      myul.classList.add('disable')
    }
    
  })
  myul.appendChild(li);
 
 })
 myul.classList.remove('disable');
optionsCh.appendChild(myul)

  }
 
nextBtn.addEventListener('click', ()=>{
  questionNumber++;
  i++;
 
  getRandQuestion();
})

getRandQuestion();

