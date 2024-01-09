const questions = [
  {
    Question: "What is the correct syntax for printing 'Hello, World!' in C#?",
    Options: [
         "Console.WriteLine('Hello, World!')", 
         "print('Hello, World!')", 
         "echo('Hello, World!')", 
         "System.out.println('Hello, World!')",
    ],
    Answer: "Console.WriteLine('Hello, World!')"
},
{
    Question: "Which data type is used for whole numbers in C#?",
    Options: [
          "double", 
          "int", 
          "float", 
          "char", 
        ],
    Answer: "int"
},
{
    Question: "How do you declare a variable in C#?",
    Options: [  
        "dim", 
        "var", 
        "let", 
        "int", 
    ],
    Answer: "int"
},
{
    Question: "What is the result of the expression 5 + 3 * 2 in C#?",
    Options: [  
        "16", 
        "11", 
        "13", 
        "26", 
    ],
    Answer: "11"
},
{
    Question: "Which of the following is used to declare a constant in C#?",
    Options: [ 
         "const", 
         "readonly", 
         "final", 
         "constant", 
        ],
    Answer: "const"
},
{
    Question: "What is the correct way to write an if statement in C#?",
    Options: [  
        "if x > y", 
        "if (x > y)", 
        "if x > y then", 
        "if x > y()" 
    ],
    Answer: "if (x > y)"
},
{
    Question: "How do you define a method in C#?",
    Options: [ 
         "function", 
         "method", 
         "def", 
         "void" 
    ],
    Answer: "void"
},
{
    Question: "Which keyword is used to indicate that a variable cannot be modified after its initial assignment in C#?",
    Options: [ 
         "immutable", 
         "constant", 
         "readonly", 
         "final", 
    ],
    Answer: "readonly"
},
{
    Question: "In C#, how do you check the length of an array named 'myArray'?",
    Options: [ 
         "length(myArray)", 
         "size(myArray)", 
         "myArray.length", 
         "myArray.Length" 
    ],
    Answer: "myArray.Length"
},
{
    Question: "What is the correct syntax for a switch statement in C#?",
    Options: [ 
         "switch (variable) { case value: break; }", 
         "case value: break; switch (variable) { }", 
         "case value: switch (variable) { break; }", 
         "switch { case value: break; }",
    ],
    Answer: "switch (variable) { case value: break; }"
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

