const quizData = [
    {
        question: "問題 1: ケネディ殺害の容疑者は（　　　）に謎を残したままマフィアに撃たれて死亡した。",
        a: "動機",
        b: "本音",
        c: "動力",
        d: "下心",
        correct: "a",
    },
    {
        question: " 問題 2:いつ見つけても（　　　）の早いがんでは予後が悪く、遅いがんは予後がいい。早くても遅くても意味はないのです。",
        a: "先進",
        b: "増進",
        c: "進出",
        d: "進行",
        correct: "d",
    },
    {
        question: " 問題 3: インターネット広告（　　　）と広告の効果の関係について考えてみよう。",
        a: "値",
        b: "費",
        c: "料",
        d: "額",
        correct: "b",
    },
    {
        question: " 問題 4:この数年間で千葉や隣接県では女児連れ去り事件が多発していた。まだ（　　　）解決の案件もあるが、未遂に終わり、容疑者が逮捕されたケースもある。",
        a: "非",
        b: "双",
        c: "未",
        d: "無",
        correct: "c",
    },
    {
        question: "問題 5: 辞書を引いたら、最初に（　　　）されている語義だけでなく、すべての語義をざっと確認する習慣を付けましょう。",
        a: "記載",
        b: "援用",
        c: "参照",
        d: "出典",
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
            <button 
            onclick="location.reload()"
            style="color: white; 
            width: 100%;
            border: none;
            display: block;
            cursor: pointer;
            font-size: 1.1rem;
            font-family: inherit;
            padding: 1.3rem;
            background-color: rgb(38, 92, 240);"> Reload</button>`
        }
    }
})