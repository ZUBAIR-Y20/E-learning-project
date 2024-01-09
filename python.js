const questions = [
    {
    question: "What is the correct syntax for printing 'Hello, World!' in Python?",
    options: [
        "print 'Hello, World!'", 
        'echo("Hello, World!")', 
        'console.log("Hello, World!")', 
        'print("Hello, World!")',
    ],
        answer: 'print("Hello, World!")',
  },
  {
    question: "Which of the following is a valid comment in Python?",
    options: [
        "// This is a comment", 
        "# This is a comment", 
        "/* This is a comment */", 
        "' This is a comment",
    ],
    answer: '# This is a comment',
  },
  {
    question: "How do you declare a variable in Python?",
    options: [
        "dim", 
        "var", 
        "let", 
        "None of the above",
    ],
    answer: "None of the above",
  },
  {
    question: "What is the result of the expression 3 + 4 * 2 in Python?",
    options: [
        "14", 
        "11", 
        "15", 
        "20",
    ],
    answer: "11",
  },
  {
    question: "Which data type is used for whole numbers in Python?",
    options: [
        "float", 
        "int", 
        "double", 
        "char"
    ],
    answer: "int",
  },
  {
   question: "What is the purpose of the 'elif' keyword in Python?",
    options: [
        "It defines a new variable.", 
        "It checks another condition if the previous one is False.", 
        "It ends the program.", 
        "It creates a loop.",
    ],
    answer: "It checks another condition if the previous one is False.",
  },
  {
    question: "How do you check the length of a list named 'myList' in Python?",
    options: [
        "len(myList)", 
        "length(myList)", 
        "size(myList)", 
        "count(myList)"
    ],
    answer: "len(myList)",
  },
  {
    question: "What is the correct way to write an if statement in Python?",
    options: [
        "if x > y", 
        "if x > y then", 
        "if (x > y)", 
        "if x>y()"
    ],
    answer: "if (x > y)",
  },
  {
    question: "Which of the following is a valid way to create an empty dictionary in Python?",
    options: [
        "empty_dict = {}", 
        "empty_dict = dict()", 
        "empty_dict = []", 
        "empty_dict = set()",
    ],
    answer: "empty_dict = {}",
  },
  {
    question: "How do you open a file named 'example.txt' in read mode in Python?",
    options: [
        "open('example.txt', 'r')", 
        "read_file('example.txt')", 
        "file_open('example.txt', 'read')", 
        "open_file('example.txt')"
    ],
    answer: "open('example.txt', 'r')",
  },
  {
    question: "Which of the following is used to create a function in Python?",
    options: [
        "def", 
        "function", 
        "func", 
        "define",
    ],
    answer: "def",
  },
  {
    question: "What is the correct way to write a for loop in Python?",
    options: [
        "for x in range(5)", 
        "for x from 1 to 5", 
        "for (x = 1; x <= 5; x++)", 
        "for x = 1 to 5"
    ],
    answer: "for x in range(5)",
  },
  {
    question: "Which module in Python provides support for regular expressions?",
    options: [
        "re", 
        "regex", 
        "regexp", 
        "regular"
    ],
    answer: "re",
  },
  {
    question: "What is the output of the following code: print('Python'[::-1])?",
    options: [
        "nohtyP", 
        "Python", 
        "yhtnoP", 
        "P",
    ],
    answer: "nohtyP",
  },
  {
    question: "How do you remove an element with the value '42' from a list named 'numbers' in Python?",
    options: [
        "numbers.remove(42)", 
        "numbers.delete(42)", 
        "numbers.pop(42)", 
        "numbers.discard(42)",
    ],
    answer: "numbers.remove(42)",
  },
  {
    question: "Which method is used to capitalize the first letter of a string in Python?",
    options: [
        "upper()", 
        "capitalize()", 
        "first()", 
        "start()",
    ],
    answer: "capitalize()",
  },
  {
    question: "In Python, how do you check if a key exists in a dictionary named 'my_dict'?",
    options: [
        "if 'key' in my_dict", 
        "if 'key' exists my_dict", 
        "if my_dict has 'key'", 
        "if my_dict contains 'key'",
    ],
    answer: "if 'key' in my_dict",
  },
  {
    question: "What is the purpose of the 'pass' statement in Python?",
    options: [
        "It does nothing and acts as a placeholder.", 
        "It terminates the program.", 
        "It skips the next iteration of a loop.", 
        "It raises an exception.",
    ],
    answer: "It does nothing and acts as a placeholder.",
  },
  {
    question: "Which of the following is a mutable data type in Python?",
    options: [
        "int", 
        "tuple", 
        "string", 
        "list",
    ],
    answer: "list",
  },
  {
    question: "What is the correct way to round a floating-point number 'x' to two decimal places in Python?",
    options: [
        "round(x, 2)", 
        "floor(x, 2)", 
        "ceil(x, 2)", 
        "truncate(x, 2)",
    ],
    answer: "round(x, 2)",
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: [
        "function", 
        "func", 
        "define", 
        "def",
    ],
    answer: "def",
  },
  {
    question: "What does the 'with' statement in Python primarily facilitate?",
    options: [
        "Error handling", 
        "Memory management", 
        "File handling resources", 
        "Thread synchronization"
    ],
    answer: "File handling resources",
  },
  {
    question: "Which operator is used for exponentiation in Python?",
    options: [
        "^", 
        "**", 
        "*", 
        "//",
    ],
    answer: "**",
  },
  {
    question: "How do you convert a string 'x' to lowercase in Python?",
    options: [
        "x.lower()", 
        "lower(x)", 
        "to_lower(x)", 
        "x.toLower()",
    ],
    answer: "x.lower()",
  },
  {
    question: "In Python, what does the 'sys.argv' list contain?",
    options: [
        "Command-line arguments", 
        "System variables", 
        "Module names", 
        "Environment variables",
    ],
    answer: "Command-line arguments",
  },
  {
    question: "Which method is used to remove leading and trailing whitespaces from a string in Python?",
    options: [
        "trim()", 
        "strip()", 
        "clean()", 
        "removeWhitespace()",
    ],
    answer: "strip()",
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

