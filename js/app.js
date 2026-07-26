// ==========================================
// ОСНОВНЫЕ ЭЛЕМЕНТЫ КОНТЕНТА КВИЗА
// ==========================================
const quizImage = document.getElementById('quizImage');
const optionsContainer = document.getElementById('optionsContainer');

// ==========================================
// ИНФОРМАЦИОННЫЕ ПАНЕЛИ И СЧЕТЧИКИ
// ==========================================
const scoreDisplay = document.getElementById('scoreDisplay');
const questionCounter = document.getElementById('questionCounter');

// ==========================================
// ПОЯСНЕНИЕ ОТВЕТА (ВЫПЛЫВАЮЩАЯ ПАНЕЛЬ)
// ==========================================
const explanationBox = document.getElementById('explanationBox');
const correctAnswerTitle = document.getElementById('correctAnswerTitle');
const explanationText = document.getElementById('explanationText');

// ==========================================
// ГЛАВНЫЕ КНОПКИ УПРАВЛЕНИЯ И НАВИГАЦИИ
// ==========================================
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnFinish = document.getElementById('btnFinish');
const btnViewResult = document.getElementById('btnViewResult');

// ==========================================
// АНИМАЦИЯ ПОЗДРАВЛЕНИЯ (GSAP ОВЕРЛЕЙ)
// ==========================================
const gsapSuccessOverlay = document.getElementById('gsapSuccessOverlay');
const gsapSuccessCard = document.getElementById('gsapSuccessCard');

// ==========================================
// МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ ВЫБОРА
// ==========================================
const confirmDialog = document.getElementById('confirmDialog');
const dialogBtnYes = document.getElementById('dialogBtnYes');
const dialogBtnNo = document.getElementById('dialogBtnNo');

// ==========================================
// МОДАЛЬНОЕ ОКНО ИТОГОВЫХ РЕЗУЛЬТАТОВ
// ==========================================
const resultDialog = document.getElementById('resultDialog');
const resultModalScore = document.getElementById('resultModalScore');
const btnContinuePlaying = document.getElementById('btnContinuePlaying'); 
const btnGoHomeFromResult = document.getElementById('btnGoHomeFromResult');

// ==========================================
// ФОРМА И ПОЛЕ ВВОДА ЭЛЕКТРОННОЙ ПОЧТЫ
// ==========================================
const emailForm = document.getElementById('emailForm');
const userEmailInput = document.getElementById('userEmail');

// ==========================================
// ОКНО УСПЕШНОЙ ОТПРАВКИ НА EMAIL
// ==========================================
const successDialog = document.getElementById('successDialog');
const successMailText = document.getElementById('successMailText');
const btnGoHomeFromSuccess = document.getElementById('btnGoHomeFromSuccess');

// =================================================================
// 1. СОСТОЯНИЕ ИГРЫ (ПЕРЕМЕННЫЕ)
// =================================================================
let currentQuestionIndex = 0; 
let tempSelectedOptionIndex = null;
let isQuizFinished = false; 

// =================================================================
// 2. ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ (ПОДСЧЕТ БАЛЛОВ)
// =================================================================
const calculateScore = () => {
  let count = 0;
  quizData.forEach((q) => { 
    if (q.respuesta !== '' && parseInt(q.respuesta) === q.correcta) {
      count++;
    }
  });
  return count;
};

// =================================================================
// 3. GSAP АНИМАЦИЯ ПОЗДРАВЛЕНИЯ
// =================================================================
const animateSuccessCard = () => { 
  gsap.set(gsapSuccessCard, { clearProps: "all" });
  gsap.set(gsapSuccessCard, { scale: 0, opacity: 0, rotationX: 0, rotationY: 0, rotation: 0, y: 0 });

  gsapSuccessOverlay.classList.remove('hidden');
  gsapSuccessOverlay.classList.add('flex');
  
  const timeline = gsap.timeline({
    onComplete: () => { 
      gsapSuccessOverlay.classList.remove('flex');
      gsapSuccessOverlay.classList.add('hidden');
    }
  });

  timeline.to(gsapSuccessCard, { 
    duration: 1.5,
    scale: 1,
    opacity: 1,
    rotationX: 360,
    rotationY: 360,
    ease: "power2.out"
  })
  .to(gsapSuccessCard, { 
    duration: 2.0
  })
  .to(gsapSuccessCard, { 
    duration: 0.6,
    scale: 0.7,
    opacity: 0,
    y: -80,
    ease: "power2.in"
  });
};

// =================================================================
// 4. ФУНКЦИЯ ОТРИСОВКИ ВОПРОСА И ВАРИАНТОВ ОТВЕТА
// =================================================================
const loadQuestion = (index) => {
  const currentQ = quizData[index]; 
  tempSelectedOptionIndex = null;
  
  quizImage.src = currentQ.image;
  questionText.innerText = currentQ.pregunta;
  questionCounter.innerText = `${index + 1} / ${quizData.length}`;
  optionsContainer.innerHTML = '';
  
  const isConfirmed = currentQ.respuesta !== ''; 

  currentQ.opciones.forEach((option, optIndex) => { 
    const wrapper = document.createElement('div');
    wrapper.className = "flex items-center gap-4 w-full";

    const button = document.createElement('button');
    button.className = "flex-1 py-4 px-6 text-center text-lg font-bold rounded-full transition duration-200 cursor-pointer disabled:cursor-not-allowed shadow-sm flex items-center justify-center gap-3";
    button.innerText = option;
    
    let arrowIcon = null;

    if (isConfirmed || isQuizFinished) { 
      button.disabled = true;
      const userAns = parseInt(currentQ.respuesta); 

      if (optIndex === currentQ.correcta) {
        button.className = "flex-1 py-4 px-6 bg-slate-800 text-white font-extrabold rounded-full text-center text-lg disabled:opacity-100 shadow-md flex items-center justify-center gap-3";
        
        arrowIcon = document.createElement('span');
        arrowIcon.className = "w-10 h-10 flex items-center justify-center bg-slate-800 text-white font-black rounded-full text-base shrink-0 shadow-md animate-pulse rotate-180";
        arrowIcon.innerText = "➔";
        
        button.appendChild(arrowIcon);
      } else if (!isNaN(userAns) && optIndex === userAns && userAns !== currentQ.correcta) {
        button.className = "flex-1 py-4 px-6 bg-[#cca3a3] text-[#5c3a3a] font-extrabold rounded-full text-center text-lg disabled:opacity-100 shadow-md flex items-center justify-center gap-3";
      } else {
        button.className = "flex-1 py-4 px-6 text-slate-400 bg-white/40 rounded-full text-center text-lg disabled:opacity-40 flex items-center justify-center gap-3";
      }
    } else { 
      button.classList.add('bg-white', 'text-slate-800', 'hover:bg-[#2d3a4b]', 'hover:text-white', 'active:scale-[0.98]');
      button.addEventListener('click', () => { handleOptionSelect(optIndex, button); });
    }
    
    wrapper.appendChild(button);
    optionsContainer.appendChild(wrapper);
  });

  if (isConfirmed) { 
    explanationBox.classList.remove('hidden');
    explanationBox.classList.add('block');
    correctAnswerTitle.innerText = currentQ.opciones[currentQ.correcta];
    explanationText.innerText = currentQ.explicacion;
    
    gsap.fromTo(explanationBox, 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  } else {
    explanationBox.classList.remove('block');
    explanationBox.classList.add('hidden');
  }

  btnPrev.disabled = index === 0; 
  btnNext.disabled = index === quizData.length - 1; 
  
  scoreDisplay.innerText = `Puntuación ${calculateScore()} / ${quizData.length}`;
};

// =================================================================
// 5. ОБРАБОТЧИКИ КЛИКОВ И МОДАЛЬНЫХ ОКON
// =================================================================
const handleOptionSelect = (optIndex, clickedButton) => {
  tempSelectedOptionIndex = optIndex; 
  
  const buttons = optionsContainer.querySelectorAll('button');
  buttons.forEach(btn => { 
    btn.classList.remove('bg-[#2d3a4b]', 'text-white');
    btn.classList.add('bg-white', 'text-slate-800');
  });
  
  clickedButton.classList.remove('bg-white', 'text-slate-800'); 
  clickedButton.classList.add('bg-[#2d3a4b]', 'text-white');
  
  confirmDialog.showModal(); 
};

const handleConfirmYes = () => { 
  const currentQ = quizData[currentQuestionIndex];
  currentQ.respuesta = String(tempSelectedOptionIndex);
  confirmDialog.close();

  if (parseInt(currentQ.respuesta) === currentQ.correcta) {
    animateSuccessCard();
  }

  loadQuestion(currentQuestionIndex);
};

const handleConfirmNo = () => {
  confirmDialog.close();
  tempSelectedOptionIndex = null;

  const buttons = optionsContainer.querySelectorAll('button'); 
  buttons.forEach(btn => {
    btn.classList.remove('bg-[#2d3a4b]', 'text-white');
    btn.classList.add('bg-white', 'text-slate-800');
  });
};

const resetQuiz = () => {
  currentQuestionIndex = 0;
  tempSelectedOptionIndex = null;
  isQuizFinished = false;

  quizData.forEach(q => { 
    q.respuesta = '';
  });

  userEmailInput.value = ''; 
  resultDialog.close();
  successDialog.close();

  loadQuestion(0);
};

const handleFinishQuiz = () => { 
  resetQuiz();
};

const handleViewResult = () => {
  const finalScore = calculateScore();
  resultModalScore.innerText = `${finalScore} / ${quizData.length}`;
  resultDialog.showModal();
};

const handleEmailSubmit = () => { 
  const email = userEmailInput.value;
  if (!email) return;

  resultDialog.close();
  
  successMailText.innerText = `Sus respuestas y la calificación ha sido enviada a ${email}.`;
  successDialog.close();
  successDialog.showModal();
};

// =================================================================
// 6. СБОРКА И ИНИЦИАЛИЗАЦИЯ СЛУШАТЕЛЕЙ СОБЫТИЙ (СТАРТ)
// =================================================================
const initQuiz = () => {
  loadQuestion(0); 
  
  dialogBtnYes.addEventListener('click', handleConfirmYes); 
  dialogBtnNo.addEventListener('click', handleConfirmNo);
  
  btnFinish.addEventListener('click', handleFinishQuiz); 
  btnViewResult.addEventListener('click', handleViewResult);
  
  btnContinuePlaying.addEventListener('click', () => {
    resultDialog.close();
  });
  
  emailForm.addEventListener('submit', handleEmailSubmit); 
  btnGoHomeFromResult.addEventListener('click', resetQuiz);
  btnGoHomeFromSuccess.addEventListener('click', resetQuiz);
  
  btnPrev.addEventListener('click', () => { 
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion(currentQuestionIndex);
    }
  });
  
  btnNext.addEventListener('click', () => { 
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      loadQuestion(currentQuestionIndex);
    }
  });

  gsap.from(["#scoreBlock", "#leftImageContainer"], { 
    x: -120,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });

  gsap.from(["#topButtonsBlock", "#rightContentBlock", "#bottomNavBlock"], { 
    x: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.1
  });
};

// =================================================================
// 7. ЗАПУСК ПРИЛОЖЕНИЯ
// =================================================================
initQuiz();
