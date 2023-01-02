const quizData = [{
        question: "Which of the following are valid ways to represent a colour in CSS?",
        a: "A valid color name",
        b: "RGB values",
        c: "HEX values",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "The purpose of markup is to?",
        a: "Add hypertext capabilities",
        b: "Enhance the document",
        c: "Both A & B",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

const SubmitQuiz = () => {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const PlayAgain = () =>
{
    location.reload()
}

const Clear = () =>
{
    reset();
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 style = "text-align: center; font-size:20px; color: green; padding-bottom:20px"> Thank You For Playing </h3>
            <h3 class = "result">Total Questions :  ${total} </h3>
            <h3 class = "result">Correct :  ${correct} </h3>
            <h3 class = "result">Wrong :  ${incorrect} </h3>
        </div>

        <button class ="play-again" onclick="PlayAgain()">Play Again</button>
    `
}
loadQuestion(index);