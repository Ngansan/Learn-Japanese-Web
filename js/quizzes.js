const quizData = [
    {
        question: "このゲームをしたいけれど、____が分からない。",
        a: "やりこと",
        b: "やりかた",
        c: "遊ぶこと",
        d: "遊ぶ方",
        correct: "b",
    },
    {
        question: "_____が悪いんです。早く帰ってもいいですか。",
        a: "体",
        b: "げんき",
        c: "くうき",
        d: "気分",
        correct: "d",
    },
    {
        question: "あのう、ここに ____　いいですか。",
        a: "座っても",
        b: "触っても",
        c: "回っても",
        d: "割って",
        correct: "a",
    },
    {
        question: "くつをぬいで、スリッパに ____ください",
        a: "ぬぎかえて",
        b: "いれあけて",
        c: "きがえて",
        d: "はきかえて",
        correct: "d",
    },
    {
        question: "田中さん、このごろとても ____ね。",
        a: "きれいになりました",
        b: "きれいにしました",
        c: "きれいな人です",
        d: "きれいだったです",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn= document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => { 
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () =>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){ 
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2> You answered ${score}/${quizData.length} questions correctly </h2>
            <button onclick="location.reload()"> Reload</button>`
        }
    }
})