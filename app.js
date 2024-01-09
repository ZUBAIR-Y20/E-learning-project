const questions = [
    
  {
    question: "What is the primary goal of object-oriented programming (OOP)?",
    options: [
        "To reduce code complexity",
        "To improve code reusability",
        "To enhance code maintainability",
        "All of the above"
    ],
    answer: "All of the above"
},
{
    question: "Which of the following is a core concept of OOP that allows a class to inherit properties and behaviors from another class?",
    options: [
      "Encapsulation", 
      "Polymorphism", 
      "Inheritance", 
      "Abstraction",
    ],
    answer: "Inheritance"
},
{
    question: "In Java, what is the process of bundling data (attributes) and methods (functions) that operate on the data into a single unit known as?",
    options: [
      "Module", 
      "Package", 
      "Class", 
      "Object",
    ],
    answer: "Class"
},
{
    question: "Which keyword is used to create an instance of a class in Java?",
    options: [
      "new", 
      "instance", 
      "create", 
      "instantiate",
    ],
    answer: "new"
},
{
    question: "What is the term for the ability of a class to provide a common interface for multiple classes that implement similar functionalities?",
    options: [
      "Polymorphism", 
      "Encapsulation", 
      "Abstraction", 
      "Inheritance",
    ],
    answer: "Polymorphism"
},
{
    question: "Which of the following statements is true about encapsulation in Java?",
    options: [
        "It allows a class to inherit properties and behaviors from another class.",
        "It involves bundling data and methods that operate on the data into a single unit.",
        "It provides a common interface for multiple classes.",
        "It is the process of creating an instance of a class.",
    ],
    answer: "It involves bundling data and methods that operate on the data into a single unit."
},
{
    question: "What is the term for the process of hiding the implementation details and showing only the functionality to the user?",
    options: [
      "Inheritance", 
      "Polymorphism", 
      "Abstraction", 
      "Encapsulation",
    ],
    answer: "Encapsulation"
},
{
    question: "In Java, what is an abstract class?",
    options: [
        "A class that cannot be instantiated and may contain abstract methods.",
        "A class that can be instantiated and cannot contain abstract methods.",
        "A class that is used for implementing interfaces.",
        "A class that cannot have any methods.",
    ],
    answer: "A class that cannot be instantiated and may contain abstract methods."
},
{
    question: "Which keyword is used to declare a method that has no implementation in an abstract class?",
    options: [
      "void", 
      "abstract", 
      "final", 
      "override",
    ],
    answer: "abstract"
},
{
    question: "In Java, what is the term for a special type of method that is called when an object is created?",
    options: [
      "Constructor", 
      "Initializer", 
      "Destructor", 
      "Initializer Block",
    ],
    answer: "Constructor"
},
{
    question: "What is the purpose of the 'super' keyword in Java?",
    options: [
        "To call the superclass constructor.",
        "To access the superclass methods and fields.",
        "To create an instance of the superclass.",
        "To mark a class as abstract.",
    ],
    answer: "To access the superclass methods and fields."
},
{
    question: "Which of the following statements is true about the 'this' keyword in Java?",
    options: [
        "It is used to create an instance of a class.",
        "It refers to the current instance of the class.",
        "It is used to call the superclass constructor.",
        "It is used to access the superclass methods and fields.",
    ],
    answer: "It refers to the current instance of the class."
},
{
    question: "What is the term for a mechanism in Java that allows a class to implement multiple interfaces?",
    options: [
      "Overloading", 
      "Overriding", 
      "Multiple Inheritance", 
      "Interface Composition",
    ],
    answer: "Interface Composition"
},
{
    question: "In Java, what is the term for a class that cannot be instantiated and may provide a common interface for multiple classes?",
    options: [
      "Abstract Class", 
      "Concrete Class", 
      "Interface", 
      "Static Class",
    ],
    answer: "Interface"
},
{
    question: "Which of the following is an advantage of using interfaces in Java?",
    options: [
        "Interfaces allow a class to provide a common interface for multiple classes.",
        "Interfaces allow a class to inherit properties and behaviors from another class.",
        "Interfaces allow multiple inheritance in Java.",
        "Interfaces allow a class to be instantiated.",
    ],
    answer: "Interfaces allow multiple inheritance in Java."
},
{
    question: "What is the term for a Java class that is used as a blueprint for creating objects?",
    options: [
      "Template Class", 
      "Object Class", 
      "Constructor Class", 
      "Instance Class",
    ],
    answer: "Template Class"
},
{
    question: "Which of the following is a principle of OOP that states that a subclass can provide a specific implementation of a method that is already provided by its superclass?",
    options: [
      "Encapsulation", 
      "Abstraction", 
      "Polymorphism", 
      "Inheritance",
    ],
    answer: "Inheritance"
},
{
    question: "In Java, what is the term for a method that has the same name as a method in the superclass?",
    options: [
      "Overloading", 
      "Overriding", 
      "Hiding", 
      "Encapsulation",
    ],
    answer: "Overriding"
},
{
    question: "What is the term for a mechanism in Java that allows a class to have multiple methods with the same name but different parameters?",
    options: [
      "Overloading", 
      "Overriding", 
      "Encapsulation", 
      "Polymorphism",
    ],
    answer: "Overloading"
},
{
    question: "Which keyword is used to prevent a method or variable from being overridden in a subclass in Java?",
    options: [
      "static", 
      "final", 
      "private", 
      "protected",
    ],
    answer: "final"
},
{
    question: "What is the term for a Java class that is used to wrap primitive data types and provide additional methods?",
    options: [
      "Wrapper Class", 
      "Primitive Class", 
      "Data Class", 
      "Enhanced Class",
    ],
    answer: "Wrapper Class"
},
{
    question: "In Java, what is the term for a feature that allows a class to have more than one method with the same name but with different parameters?",
    options: [
      "Overloading", 
      "Overriding", 
      "Polymorphism", 
      "Abstraction",
    ],
    answer: "Overloading"
},
{
    question: "What is the purpose of the 'default' keyword in Java interfaces?",
    options: [
        "To specify a default implementation for a method in an interface.",
        "To mark a method as mandatory in an interface.",
        "To create a default constructor in an interface.",
        "To define a default visibility for an interface.",
    ],
    answer: "To specify a default implementation for a method in an interface."
},
{
    question: "In Java, what is the term for a class that contains abstract methods that must be implemented by its subclasses?",
    options: [
      "Template Class", 
      "Abstract Class", 
      "Concrete Class", 
      "Interface",
    ],
    answer: "Abstract Class"
},
{
    question: "Which of the following is a benefit of using encapsulation in Java?",
    options: [
        "It allows a class to inherit properties and behaviors from another class.",
        "It improves code reusability.",
        "It hides the implementation details and shows only the functionality.",
        "It provides multiple methods with the same name but different parameters.",
    ],
    answer: "It hides the implementation details and shows only the functionality."
},
{
    question: "What is the term for a mechanism in Java that allows a class to have more than one method with the same name and same parameters but with different return types?",
    options: [
      "Overloading", 
      "Overriding", 
      "Polymorphism", 
      "Abstraction"
    ],
    answer: "Overloading"
},
{
    question: "In Java, what is the term for a method that is called when an object is no longer in use and about to be garbage collected?",
    options: [
      "Destructor", 
      "Finalizer", 
      "Cleaner", 
      "Disposer",
    ],
    answer: "Finalizer"
},
{
    question: "Which keyword is used to prevent a class from being subclassed in Java?",
    options: [
      "static", 
      "final", 
      "private", 
      "sealed",
    ],
    answer: "final"
},
{
    question: "What is the term for a mechanism in Java that allows a class to provide different implementations of a method based on the number and types of its parameters?",
    options: [
      "Overloading", 
      "Overriding", 
      "Polymorphism", 
      "Abstraction",
    ],
    answer: "Overloading"
}]
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

