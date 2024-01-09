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
    question: "What is the correct syntax for printing 'Hello, World!' in C++?",
    options: [
        "print('Hello, World!')", 
        "cout << 'Hello, World!'", 
        "System.out.println('Hello, World!')", 
        "printf('Hello, World!')",
    ],
    answer: "cout << 'Hello, World!'"
},
{
    question: "Which header file should be included to use cout and cin in C++?",
    options: [
        "<stdio.h>", 
        "<iostream>", 
        "<stdlib.h>", 
        "<conio.h>",
    ],
    answer: "<iostream>"
},
{
    question: "How do you declare a variable in C++?",
    options: [
        "dim", 
        "var", 
        "let", 
        "int",
    ],
    answer: "int"
},
{
    question: "What is the result of the expression 5 + 3 * 2 in C++?",
    options: [
        "16", 
        "11", 
        "13", 
        "26"
    ],
    answer: "11"
},
{
    question: "Which keyword is used to indicate that a variable cannot be modified after its initial assignment in C++?",
    options: [
        "immutable", 
        "constant", 
        "readonly", 
        "final",
    ],
    answer: "constant"
},
{
    question: "What is the correct way to write an if statement in C++?",
    options: [
        "if x > y", 
        "if (x > y)", 
        "if x > y then", 
        "if x > y()",
    ],
    answer: "if (x > y)"
},
{
    question: "How do you define a function in C++?",
    options: [
        "function", 
        "func", 
        "def", 
        "void",
    ],
    answer: "void"
},
{
    question: "Which data type is used for whole numbers in C++?",
    options: [
        "double", 
        "int", 
        "float", 
        "char",
    ],
    answer: "int"
},
{
    question: "What is the correct way to write a for loop in C++?",
    options: [
        "for (x = 0; x < 5; x++)", 
        "for x in range(5)", 
        "for (x; x < 5; x++)", 
        "for x = 0 to 5",
    ],
    answer: "for (x = 0; x < 5; x++)"
},
{
    question: "What is the result of the expression 10 / 3 in C++?",
    options: [
        "3.3333", 
        "3.0", 
        "3", 
        "3.333",
    ],
    answer: "3"
},
{
    question: "Which of the following is used to declare a constant in C++?",
    options: [
        "const", 
        "readonly", 
        "final", 
        "constant",
    ],
    answer: "const"
},
{
    question: "How do you declare a pointer in C++?",
    options: [
        "int ptr;", 
        "int *ptr;", 
        "pointer ptr;", 
        "ptr int;",
    ],
    answer: "int *ptr;"
},
{
    question: "What is the purpose of 'cin' in C++?",
    options: [
        "To print output to the console", 
        "To read input from the console", 
        "To declare a constant", 
        "To define a class",
    ],
    answer: "To read input from the console"
},
{
    question: "What is the correct syntax for a switch statement in C++?",
    options: [
        "switch (variable) { case value: break; }", 
        "case value: break; switch (variable) { }", 
        "case value: switch (variable) { break; }", 
        "switch { case value: break; }",
    ],
    answer: "switch (variable) { case value: break; }"
},
{
    question: "How do you dynamically allocate memory in C++?",
    options: [
        "malloc()", 
        "allocate()", 
        "new", 
        "create()",
    ],
    answer: "new"
},
{
    question: "What is the result of the expression (true && false) in C++?",
    options: [
        "true", 
        "false", 
        "error", 
        "undefined",
    ],
    answer: "false"
},
{
    question: "In C++, what is the purpose of the 'endl' manipulator?",
    options: [
        "To insert a newline character", 
        "To concatenate strings", 
        "To end the program", 
        "To print an empty line",,],
    answer: "To insert a newline character"
},
{
    question: "Which of the following operators is used to access the value at a memory address in C++?",
    options: [
        "&", 
        "*", 
        "$", 
        "#",
    ],
    answer: "*"
},
{
    question: "What is the correct way to include the content of another file in C++?",
    options: [
        "#include <file>", 
        "#include 'file'", 
        "#import 'file'", 
        "#import <file>",
    ],
    answer: "#include <file>"
},
{
    question: "How do you define a class in C++?",
    options: [
        "class MyClass { }", 
        "define MyClass { }", 
        "class = MyClass { }", 
        "MyClass class { }",
    ],
    answer: "class MyClass { }"
},
{
    question: "What is the purpose of the 'static' keyword in C++?",
    options: [
        "To indicate a variable is constant",
        "To define a static method", 
        "To declare a static class", 
        "To indicate a variable is shared among instances",
    ],
    answer: "To indicate a variable is shared among instances"
},
{
    question: "How do you open a file named 'example.txt' in write mode in C++?",
    options: [
        "open('example.txt', 'w')", 
        "write_file('example.txt')", 
        "file_open('example.txt', 'write')", 
        "fstream file('example.txt', ios::out)"
    ],
    answer: "fstream file('example.txt', ios::out)"
},
{
    question: "What is the correct syntax for defining a member function outside the class in C++?",
    options: [
        "void MyClass::myFunction() { }", 
        "void myFunction() { MyClass:: }", 
        "void myFunction(MyClass) { }", 
        "void myFunction { MyClass:: }",
    ],
    answer: "void MyClass::myFunction() { }"
},
{
    question: "What is the purpose of the 'virtual' keyword in C++?",
    options: [
        "To indicate a variable is constant", 
        "To define a virtual method", 
        "To declare a virtual class", 
        "To indicate a variable is shared among instances",
    ],
    answer: "To define a virtual method"
},
{
    question: "In C++, how do you access the value of a pointer variable 'ptr'?",
    options: [
        "*ptr", 
        "&ptr", 
        "ptr.value", 
        "ptr->value",
    ],
    answer: "*ptr"
},
{
    question: "What is the output of the following code: cout << (5 > 3 && 5 < 10);",
    options: [
        "true", 
        "false", 
        "1", 
        "0"
    ],
    answer: "true"
},
{
    question: "The value of a string variable in C++ must be surrounded by double quotes.",
    options: [
        "True", 
        "False", 
        "Undefined", 
        "Error"
    ],
    answer: "False"
},
{
    question: "Which operator is used to concatenate two strings in C++?",
    options: [
        "+", 
        "-", 
        "*", 
        "&",
    ],
    answer: "+"
},
{
    question: "What is the correct way to create a dynamic array in C++?",
    options: [
        "int arr[] = new int[5]", 
        "int arr[5] = {1, 2, 3, 4, 5}", 
        "int arr[5]", 
        "int *arr = new int[5]",
    ],
    answer: "int *arr = new int[5]"
},
{
    question: "Array indexes in C++ start with:",
    options: [
        "1", 
        "0", 
        "-1",
        "None of the above"
    ],
    answer: "0"
},
{
    question: "How do you call a function in C++?",
    options: [
        "myFunction()", 
        "myFunction;", 
        "myFunction[]", 
        "(myFunction)"
    ],
    answer: "myFunction()"
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
  
  