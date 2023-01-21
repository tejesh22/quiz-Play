// Questions will be asked
const Questions = [{
        id: 0,
        q: "Question 1: What is your favourite color?",
        a: [{ text: "Black", isCorrect: false },
            { text: "Green", isCorrect: false },
            { text: "Blue", isCorrect: true },
            { text: "Yellow", isCorrect: false }
        ]
  
    },
    {
        id: 1,
        q: "What is the capital of India?",
        a: [{ text: "Banglore", isCorrect: false, isSelected: false },
            { text: "Mumbai", isCorrect: false },
            { text: "Gujarat", isCorrect: false },
            { text: "Delhi", isCorrect: true }
        ]
  
    },
    {
        id: 2,
        q: "What is the capital of Gujarat",
        a: [{ text: "surat", isCorrect: false },
            { text: "vadodara", isCorrect: false },
            { text: "gandhinagar", isCorrect: true },
            { text: "rajkot", isCorrect: false }
        ]
  
    }
  
]
  
// Set start
var start = true;
  
// Iterate
function iterate(id) {
  
    // Getting the result display section
    var result = document.getElementsByClassName("qtn");
    result[0].innerText = "";
  
    // Getting the question
    const question = document.getElementById("question");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "gold";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "gold";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "gold";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "gold";
        selected = op4.value;
    })
  
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Right Answer";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Wrong Answer";
            result[0].style.color = "red";
        }
    })
}
  
if (start) {
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id <= 3) {
        id++;
        iterate(id);
        console.log(id);
    }
    
})

const previous = document.getElementsByClassName('previous')[0];
var id = 0;    
previous.addEventListener("click",() => {
    start = false;
    if (id < 2) {
        id--;
        iterate(id);
        console.log(id);

    }

})

btnp = document.getElementById("btnp")
btnn = document.getElementById("btnn")

isDisabled = false

btnn.addEventListener("click", () => {
    start = false;
    if (id > 1) {
        isDisabled  = !isDisabled;
        btnn.disabled = isDisabled;
    }
});

/*
btnn = document.getElementById("btnn")
btne = document.getElementById("btne")
var id = 0;
 hidden = false

btnn.addEventListener("click", () => {
    start = true;
    if (id < 2) {
        hidden  = !hidden;
        btne.style.display = 'none';
    } 
});*/