const startBtn = document.querySelector('.start-btn')
const landingPage = document.querySelector('.landing')
const questionPage = document.querySelector('.question')
const resultPage = document.querySelector('.result')
const answerBtns = document.querySelector('.answer-btn')
const progressBar = document.querySelector('.progress-bar')

let shuffledQuestions, currentQuestionIndex, resultConntent

startBtn.addEventListener('click', () => {
  landingPage.classList.add('landing-hide')
  shuffledQuestions = questions.sort()
  currentQuestionIndex = 0
  questionPage.classList.add('question-show')
  setNextQuestion()
})


function setNextQuestion() {
   if (currentQuestionIndex < 12) {
      showQuestion(shuffledQuestions[currentQuestionIndex])
   } else {
      questionPage.classList.remove('question-show')
      resultPage.classList.add('result-show')
      resultConntent = result.valueOf()
      showResult(resultConntent[count])
   }
}


const questionTitle = document.getElementById('title')
const image = document.getElementById('img')
const btns = document.querySelectorAll('.btn')


function showQuestion(question) {
   image.src = question.img
   questionTitle.innerText = question.question
   question.answers.forEach((answer, index) => {
      btns[index].innerText = answer.text
      btns[index].dataset.correct = answer.correct
   })
}

btns.forEach((btn) => {
   btn.addEventListener('click', (e) => {
      currentQuestionIndex++
      progressBar.style.width = 'calc(100/12*' + (currentQuestionIndex + 1) + '%)'
      selectAnswer(e)
      setNextQuestion()
   })
})


let count = 0

function selectAnswer(e) {
   const selectBtn = e.target
   const correct = selectBtn.dataset['correct']
   if (correct === 'true') {
      count+=1;
   }

   console.log(count)
}


const resultTitle = document.getElementById('result-title')
const resultImage = document.getElementById('result-img')
const explain = document.getElementById('explain')


function showResult(result) {
   resultImage.src = result.img
   resultTitle.innerText = result.title
   explain.innerHTML = result.explain
   resultConntent[count]
}

const questions = [
   {
      img: "./img/1.jpg",
      question: "빈칸에 들어갈 말은?",
      answers: [
         { text: '달리는 법', correct: false},
         { text: '멈추는 법', correct: true},
         { text: '내리는 법', correct: false},
         { text: '때리는 법', correct: false},
      ]
   },
   {
      img: "./img/2.jpg",
      question: "빈칸에 들어갈 말은?",
      answers: [
         { text: '선정이 꿀', correct: false},
         { text: '선정이 갓', correct: false},
         { text: '선정이 딸', correct: true},
         { text: '선정이 짱', correct: false},
      ]
   },
   {
      img: "./img/3.jpg",
      question: "빈칸에 들어갈 말은?",
      answers: [
         { text: '저렇게 할수없어요', correct: false},
         { text: '그렇게 알아왔는데', correct: false},
         { text: '햄보칸 조나단이야', correct: false},
         { text: '이렇게 살아왔는데', correct: true},
      ]
   },
   {
      img: "./img/4.jpg",
      question: "빈칸에 들어갈 말은?",
      answers: [
         { text: '이기자고', correct: false},
         { text: '가보자고', correct: true},
         { text: '화이탱탱', correct: false},
         { text: '아자아자', correct: false},
      ]
   },
   {
      img: "./img/5.jpg",
      question: "들어가지 않는 말은?",
      answers: [
         { text: '흐를게', correct: false},
         { text: '버릴게', correct: true},
         { text: '많을게', correct: false},
         { text: '없을게', correct: false},
      ]
   },
   {
      img: "./img/6.jpg",
      question: "빈칸에 들어갈 말은?",
      answers: [
         { text: '간고등어', correct: true},
         { text: '오마카세', correct: false},
         { text: '몸통감기', correct: false},
         { text: '삐지기', correct: false},
      ]
   },
   {
      img: "./img/7.jpg",
      question: "본 게시물의 제목은?",
      answers: [
         { text: '어제 내 세상이 무너졌어', correct: true},
         { text: '오늘 내 목숨이 없어졌어', correct: false},
         { text: '어제 내 행거가 무너졌어', correct: false},
         { text: '지금 내 대장이 무너졌어', correct: false},
      ]
   },
   {
      img: "./img/8.jpg",
      question: "빈칸에 들어갈 말은?",
      answers: [
         { text: '닮았어 나를', correct: false},
         { text: '사람을 찢어', correct: true},
         { text: '위험해 진짜', correct: false},
         { text: '귀여워 진짜', correct: false},
      ]
   },
   {
      img: "./img/9.jpg",
      question: "빈칸에 들어갈 말은?",
      answers: [
         { text: '그래', correct: false},
         { text: '그게 도대체 뭔말이야', correct: false},
         { text: '그거 어떻게 하는건데', correct: true},
         { text: '싫어 이바보 멍청이야', correct: false},
      ]
   },
   {
      img: "./img/10.jpg",
      question: "위 이모티콘과 연관된 노래는?",
      answers: [
         { text: '브레이브 걸스 - 롤린', correct: true},
         { text: '브레이브 걸스 - 치맛바람', correct: false},
         { text: '침착맨 - 제로투', correct: false},
         { text: 'Hai Phút Hơn', correct: false},
      ]
   },
   {
      img: "./img/11.jpg",
      question: "빈칸에 들어갈 가사는?",
      answers: [
         { text: '쇼미는', correct: false},
         { text: 'GD는', correct: false},
         { text: '개코는', correct: false},
         { text: '힙합은', correct: true},
      ]
   },
   {
      img: "./img/12.jpg",
      question: "한사랑 산악회에서 커버하지 않은 노래는?",
      answers: [
         { text: 'Justin Bieber - Peaches', correct: false},
         { text: 'BTS - Dynamite', correct: true},
         { text: 'Harry Styles - Watermelon Sugar', correct: false},
         { text: 'Justin Bieber - Stay', correct: false},
      ]
   }
]


const result = [
   {
      img: '',
      title: '',
      explain: ''
   }
]
