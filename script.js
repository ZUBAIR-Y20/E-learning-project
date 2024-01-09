const questions = [

    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: [
         "String", 
         "Number", 
        "Boolean", 
         "Float" 
      ],
      answer : "Float"
    },
    {
      question: "Which operator is used to concatenate strings in JavaScript?",
      options: [
          "+",
         "-", 
          "*", 
          "/",
      ],
      answer : "+"
    },
  
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Centralized Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets"
      ],
      answer:"Cascading Style Sheets"
    },
 
    {
      question: "What is the output of the following code?console.log(typeof null);",
      options: [
        "object",
        "null", 
        "undefined", 
        "string",
      ],
      answer: "object"
    },
    {
      question: "Which method is used to remove the last element from an array in JavaScript?",
      options: [
       "pop()", 
        "shift()", 
        "splice()", 
        "push()",
      ],
      answer: "pop()"
    },
    {
      question: "What is the result of the following code?console.log(2 + '2');",
      options: [
        "4", 
        "22", 
        "NaN", 
        "Error", 
      ],
      answer: "22"
    },
    {
      question: "What is the correct syntax to comment out multiple lines in JavaScript?",
      options: [
        "/* Comment */", 
        "// Comment", 
        "<!-- Comment -->", 
        "# Comment", 
      ],
      answer: "/* Comment */"
    },
    {
      question: "Which operator is used for strict equality comparison in JavaScript?",
      options: [
        "==", 
        "===", 
        "!==", 
        "=", 
      ],
      answer: "==="
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: [
        "To refer to the previous element in an array", 
        "To refer to the next element in an array", 
        "To refer to the current object or context", 
        "To define a new function",
      ],
      answer: "To refer to the current object or context"
    },
    {
      question: "Which method is used to convert a string to lowercase in JavaScript?",
      options: [
        "toLowerCase()", 
        "toUpperCase()", 
        "charAt()", 
        "substring()", 
      ],
      answer: "toLowerCase()"
    },
    {
      question: "What is the output of the following code?console.log(0.1 + 0.2 === 0.3);",
      options: [
        "true", 
        "false", 
        "undefined", 
        "Error", 
      ],
      answer: "false"
    },
    {
      question: "Which method is used to remove whitespace from both ends of a string in JavaScript?",
      options: [
        "trim()", 
        "concat()", 
        "replace()", 
        "slice()", 
      ],
      answer: "trim()"
    },
    {
      question: "Which statement is used to exit a loop in JavaScript?",
      options: [
        "break", 
        "return", 
        "continue", 
        "exit", 
      ],
      answer: "break"
    },
    {
      question: "What is the result of the following code?console.log(typeof NaN);",
      options: [
        "number", 
        "NaN", 
        "undefined", 
        "string", 
      ],
      answer: "number"
    },
    {
      question: "Which method is used to add elements to the end of an array in JavaScript?",
      options: [
        "push()", 
        "pop()", 
        "shift()", 
        "unshift()", 
      ],
      answer: "push()"
    },
    {
      question: "What is the output of the following code?console.log(5 == '5');",
      options: [
        "true", 
        "false", 
        "undefined", 
        "Error", 
      ],
      answer: "true"
    },
    {
      question: "Which method is used to split a string into an array of substrings in JavaScript?",
      options: [
        "split()", 
        "join()", 
        "concat()", 
        "substring()", 
      ],
      answer: "split()"
    },
    {
      question: "What is the result of the following code?console.log(10 % 3);",
      options: [
        "3", 
        "1", 
        "0", 
        "10", 
      ],
      answer: "1"
    },
    {
      question: "Which method is used to remove the first element from an array in JavaScript?",
      options: [
        "shift()",  
        "pop()", 
        "slice()", 
        "push()", 
      ],
      answer: "shift()"
    },
    {
      question: "What is the output of the following code?console.log(2 + 2 + '2');",
      options: [
        "22", 
        "42", 
        "Error", 
        "NaN", 
      ],
      answer: "42"
    },
    {
      question: "What is the correct syntax to include an external JavaScript file named 'script.js'?",
      options: [
        "<script src='script.js'></script>", 
        "<script href='script.js'></script>", 
        "<script name='script.js'></script>", 
        "<script link='script.js'></script>", 
      ],
      answer: "<script src='script.js'></script>"
    },
    {
      question: "Which method is used to find the length of an array in JavaScript?",
      options: [
        "length", 
        "size", 
        "count", 
        "Array.length", 
      ],
      answer: "Array.length"
    },
    {
      question: "What is the output of the following code?console.log(5 === '5');",
      options: [
        "true", 
        "false", 
        "undefined", 
        "Error", 
      ],
      answer: "false"
    },
    {
      question: "Which method is used to convert a string to an integer in JavaScript?",
      options: [
        "parseInt()", 
        "parseFloat()", 
        "toFixed()", 
        "Math.floor()",
      ],
      answer: "parseInt()"
    },
    {
      question: "What is the result of the following code?console.log(typeof undefined);",
      options: [
        "object", 
        "undefined",
        "null", 
        "string", 
      ],
      answer: "undefined"
    },
    {
      question: "Which operator is used to assign a value to a variable in JavaScript?",
      options: [
        "=", 
        "==", 
        "===", 
        "=>", 
      ],
      answer: "="
    },
    {
      question: "What is the output of the following code?console.log(2 * '2');",
      options: [
        "4", 
        "22", 
        "NaN", 
        "Error", 
      ],
      answer: "4"
    },
    {
      question: "Which method is used to find the index of an element in an array in JavaScript?",
      options: [
        "indexOf()", 
        "findIndex()", 
        "search()", 
        "locate()", 
      ],
      answer: "indexOf()"
    },
    {
      question: "What is the result of the following code?console.log(true + false);",
      options: [
        "true", 
        "false", 
        "undefined", 
        "1" 
      ],
      answer: "false"
    },
    {
        question: "Which method is used to find the index of an element in an array in JavaScript?",
        options: [
          "indexOf()", 
          "findIndex()", 
          "search()",
          "locate()"
        ],
        answer: "indexOf()"
      }
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

