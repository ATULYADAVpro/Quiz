const questions =
[
    {
        "que":"Which of the following is a markup language?",
        "a":"HTML",
        "b":"CSS",
        "c":"JavaScript",
        "d":"PHP",
        "correct" : "a"
    },
    {
        "que":"Which of the following is a  style sheet language?",
        "a":"HTML",
        "b":"CSS",
        "c":"JavaScript",
        "d":"PHP",
        "correct" : "b"
    },
    {
        "que":"Which of the following is a program language?",
        "a":"HTML",
        "b":"CSS",
        "c":"JavaScript",
        "d":"PHP",
        "correct" : "c"
    },
    {
        "que":"Which of the following is a sripting language? ",
        "a":"HTML",
        "b":"CSS",
        "c":"JavaScript",
        "d":"PHP",
        "correct" : "d"
    }
]
let index = 0;
let total = questions.length;
let right = 0;
let wrong =0;

const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".optionInput");


const loadQuestion = () => 
{
if(index === total)
{
    return endQuiz();
}
reset();
const data = questions[index];
quesBox.innerText =`${index+1}. ${data.que}`
optionInput[0].nextElementSibling.innerText = data.a;
optionInput[1].nextElementSibling.innerText = data.b;
optionInput[2].nextElementSibling.innerText = data.c;
optionInput[3].nextElementSibling.innerText = data.d;
}

const submitAnswer = () =>
{
    // console.log("click");
    const data = questions[index]
     const ans = getAnser();
     if (ans == data.correct)
     {
        right++;
     }else{
        wrong++;
     }
     index++;
     loadQuestion();
     return;
}

const getAnser = () =>
{
    let answer;
    optionInput.forEach( 
        (inputs) => { 
            if (inputs.checked) {
               answer=inputs.value
                
            }
        }
)
return answer;
}

const reset = () =>
{
    optionInput.forEach(
        (inputs) => {
            inputs.checked = false;
        }
    )
} 

const endQuiz = () =>
{
    const box = document.getElementById("box").innerHTML = `
     <h3> Thank you for playing Quize </h3>
     <h2>${right} / ${total} are correct</h2>
    `
    
}

loadQuestion();