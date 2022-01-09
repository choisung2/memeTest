const startBtn = document.querySelector('.start-btn')
const landingPage = document.querySelector('.landing')
const questionPage = document.querySelector('.question')
const resultPage = document.querySelector('.result')
const answerBtns = document.querySelector('.answer-btn')
const progressBar = document.querySelector('.progress-bar')

let shuffledQuestions, currentQuestionIndex, resultConntent

startBtn.addEventListener('click', () => {
  landingPage.classList.add('landing-hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
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
      img: "./img/00.jpg",
      title: '0점',
      explain: '- 밈이 무슨 뜻인지 알까요...? <br> - 아주 바쁘게 현생을 살고 있는 스타일. <br> - 남들이 깔깔거리며 공유할 때는 별로 관심 없음. n 년 뒤 보고 즐기는 편.<br> - 한참 지난 밈을 보고도 빵빵 터질 준비가 되어있음. <br> - 재밌는 밈인지 억지밈인지 상관없음. \'㉡ㅐㄱГ Øㅓ떻♨게  feel하는지™\' 중요.' 
   },
   {
      img: "./img/00.jpg",
      title: '8점',
      explain: '- 밈이 무슨 뜻인지 알까요...? <br> - 아주 바쁘게 현생을 살고 있는 스타일. <br> - 남들이 깔깔거리며 공유할 때는 별로 관심 없음. n 년 뒤 보고 즐기는 편.<br> = 한참 지난 밈을 보고도 빵빵 터질 준비가 되어있음. <br> - 재밌는 밈인지 억지밈인지 상관없음. \'㉡ㅐㄱГ Øㅓ떻♨게  feel하는지™\' 중요.' 
   },
   {
      img: "./img/00.jpg",
      title: '16점',
      explain: '- 밈이 무슨 뜻인지 알까요...? <br> - 아주 바쁘게 현생을 살고 있는 스타일. <br> - 남들이 깔깔거리며 공유할 때는 별로 관심 없음. n 년 뒤 보고 즐기는 편.<br> = 한참 지난 밈을 보고도 빵빵 터질 준비가 되어있음. <br> - 재밌는 밈인지 억지밈인지 상관없음. \'㉡ㅐㄱГ Øㅓ떻♨게  feel하는지™\' 중요.' 
   },
   {
      img: "./img/01.jpg",
      title: '25점',
      explain: '- 틈날 때 잠깐씩 SNS/커뮤니티를 돌아다니는 편. <br> - 나름 알고 있는게 많다고 생각함. <br> - 단톡방에 짤 올라오면 그냥 웃고 넘기는 편. 공유x. <br> - 한 번 보고 아는 척 함. 어디서 나온 짤인지 모름. <br> - 가끔 웃긴 짤 생각나는데 그게 뭐였는지 생각안남.'
   },
   {
      img: "./img/01.jpg",
      title: '33점',
      explain: '- 틈날 때 잠깐씩 SNS/커뮤니티를 돌아다니는 편. <br> - 나름 알고 있는게 많다고 생각함. <br> - 단톡방에 짤 올라오면 그냥 웃고 넘기는 편. 공유x. <br> - 한 번 보고 아는 척 함. 어디서 나온 짤인지 모름. <br> - 가끔 웃긴 짤 생각나는데 그게 뭐였는지 생각안남.'
   },
   {
      img: "./img/01.jpg",
      title: '42점',
      explain: '- 틈날 때 잠깐씩 SNS/커뮤니티를 돌아다니는 편. <br> - 나름 알고 있는게 많다고 생각함. <br> - 단톡방에 짤 올라오면 그냥 웃고 넘기는 편. 공유x. <br> - 한 번 보고 아는 척 함. 어디서 나온 짤인지 모름. <br> - 가끔 웃긴 짤 생각나는데 그게 뭐였는지 생각안남.'
   },
   {
      img: "./img/02.jpg",
      title: '50점',
      explain: '- 딱히 짤을 찾아보진 않지만, 나름 아는게 많음. 인싸. <br> - 주변에서 떠먹여주는 스타일. <br> - 웃음이 헤픈 편. 짤 중독자들이 좋아함. <br> - 본인이 생각하기에 진짜 웃기면 저장 + 공유. <br> - 짤은 많이 보유하고 있는데 활용을 못 함.<br> - 정상 생활 가능.'
   },
   {
      img: "./img/02.jpg",
      title: '58점',
      explain: '- 딱히 짤을 찾아보진 않지만, 나름 아는게 많음. 인싸. <br> - 주변에서 떠먹여주는 스타일. <br> - 웃음이 헤픈 편. 짤 중독자들이 좋아함. <br> - 본인이 생각하기에 진짜 웃기면 저장 + 공유. <br> - 짤은 많이 보유하고 있는데 활용을 못 함.<br> - 정상 생활 가능.'
   },
   {
      img: "./img/02.jpg",
      title: '66점',
      explain: '- 딱히 짤을 찾아보진 않지만, 나름 아는게 많음. 인싸. <br> - 주변에서 떠먹여주는 스타일. <br> - 웃음이 헤픈 편. 짤 중독자들이 좋아함. <br> - 본인이 생각하기에 진짜 웃기면 저장 + 공유. <br> - 짤은 많이 보유하고 있는데 활용을 못 함.<br> - 정상 생활 가능.'
   },
   {
      img: "./img/03.jpg",
      title: '75점',
      explain: '- 이것도 재밌고 저것도 재밌넼ㅋㅋ 하면서 저장한 짤만 100개.<br> - 짤 홍수 속에 살고 있음. 유행의 중심.<br> - 대박 짤 줍줍하면 모든 단톡방에 뿌림. <br> - 아무것도 모르는 친구 무시함. 그리고 배 터지게 짤 먹여줌. <br> - 와 이거 만든 사람은 어떻게 이런 생각을 하지 ㅋㅋㅋ 라는 생각을 함.<br> - 당신, 인터넷 세상이 좀 더 편하지..?'
   },
   {
      img: "./img/03.jpg",
      title: '83점',
      explain: '- 이것도 재밌고 저것도 재밌넼ㅋㅋ 하면서 저장한 짤만 100개.<br> - 짤 홍수 속에 살고 있음. 유행의 중심.<br> - 대박 짤 줍줍하면 모든 단톡방에 뿌림. <br> - 아무것도 모르는 친구 무시함. 그리고 배 터지게 짤 먹여줌. <br> - 와 이거 만든 사람은 어떻게 이런 생각을 하지 ㅋㅋㅋ 라는 생각을 함.<br> - 당신, 인터넷 세상이 좀 더 편하지..?'
   },
      {
      img: "./img/04.jpg",
      title: '91점',
      explain: '- 핸드폰을 손에서 놓지 않음.<br> - 아무리 바빠도 SNS는 해야 됨. 너튜브는 보고 자야 됨. <br> - 유행 전에 짤을 퍼다 나름. 밈의 선두 주자 암튼 그거임. <br> - 짤의 30%만 봐도 알아 맞춤. 몇 번을 본 거야. <br> - 겉으로 생활 잘하는 척하는 데 속으로 인터넷하고 싶어 죽음. <br> - 짤 없이 대화 불가. 짤은 말보다 빠르다. '
   },
      {
      img: "./img/04.jpg",
      title: '🎉100점🎉',
      explain: '- 핸드폰을 손에서 놓지 않음.<br> - 아무리 바빠도 SNS는 해야 됨. 너튜브는 보고 자야 됨. <br> - 유행 전에 짤을 퍼다 나름. 밈의 선두 주자 암튼 그거임. <br> - 짤의 30%만 봐도 알아 맞춤. 몇 번을 본 거야. <br> - 겉으로 생활 잘하는 척하는 데 속으로 인터넷하고 싶어 죽음. <br> - 짤 없이 대화 불가. 짤은 말보다 빠르다. '
   },
]
