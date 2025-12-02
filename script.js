
const questionBank = [
  { id:1, text:"What is the capital city of India?", options:["Mumbai","New Delhi","Kolkata","Chennai"], correctIndex:1 },
  { id:2, text:"Which gas do plants mainly absorb from the atmosphere for photosynthesis?", options:["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"], correctIndex:2 },
  { id:3, text:"Which language is primarily used for styling web pages?", options:["HTML","Python","CSS","C++"], correctIndex:2 },
  { id:4, text:"Who wrote the play 'Romeo and Juliet'?", options:["Charles Dickens","William Shakespeare","Leo Tolstoy","Mark Twain"], correctIndex:1 },
  { id:5, text:"Which planet is known as the Red Planet?", options:["Venus","Jupiter","Mars","Saturn"], correctIndex:2 },
  { id:6, text:"What is H2O commonly known as?", options:["Salt","Water","Hydrogen Peroxide","Oxygen"], correctIndex:1 },
  { id:7, text:"What is the square root of 144?", options:["10","11","12","13"], correctIndex:2 },
  { id:8, text:"Which organ pumps blood through the human body?", options:["Liver","Lungs","Brain","Heart"], correctIndex:3 },
  { id:9, text:"Which instrument measures temperature?", options:["Barometer","Thermometer","Hygrometer","Ammeter"], correctIndex:1 },
  { id:10, text:"Which element has chemical symbol 'O'?", options:["Gold","Oxygen","Iron","Sodium"], correctIndex:1 },
  { id:11, text:"Which is the longest river in the world?", options:["Amazon","Nile","Yangtze","Mississippi"], correctIndex:1 },
  { id:12, text:"Which device is used to view distant objects in space?", options:["Microscope","Periscope","Telescope","Thermostat"], correctIndex:2 },
  { id:13, text:"Who is known as the father of computers?", options:["Alan Turing","Charles Babbage","Tim Berners-Lee","Bill Gates"], correctIndex:1 },
  { id:14, text:"Which is the smallest prime number?", options:["0","1","2","3"], correctIndex:2 },
  { id:15, text:"Which continent is Australia located in?", options:["Asia","Oceania","Africa","Europe"], correctIndex:1 },
  { id:16, text:"What is the freezing point of water in Celsius?", options:["0°C","32°C","100°C","-10°C"], correctIndex:0 },
  { id:17, text:"Which metal is liquid at room temperature?", options:["Mercury","Iron","Gold","Aluminium"], correctIndex:0 },
  { id:18, text:"Which company created the iPhone?", options:["Samsung","Microsoft","Apple","Google"], correctIndex:2 },
  { id:19, text:"Which planet has rings around it?", options:["Mercury","Earth","Saturn","Mars"], correctIndex:2 },
  { id:20, text:"Which currency is used in Japan?", options:["Yen","Dollar","Euro","Rupee"], correctIndex:0 },
  { id:21, text:"How many degrees are in a right angle?", options:["45","90","180","360"], correctIndex:1 },
  { id:22, text:"Which part of the plant conducts photosynthesis?", options:["Root","Stem","Leaf","Flower"], correctIndex:2 },
  { id:23, text:"Which is the largest mammal?", options:["Elephant","Blue Whale","Giraffe","Hippopotamus"], correctIndex:1 },
  { id:24, text:"What does CPU stand for in computers?", options:["Central Processing Unit","Computer Personal Unit","Central Program Unit","Compute Processing Unit"], correctIndex:0 },
  { id:25, text:"Which vitamin is produced when skin is exposed to sunlight?", options:["Vitamin A","Vitamin B","Vitamin C","Vitamin D"], correctIndex:3 },
  { id:26, text:"Which country is known for the Eiffel Tower?", options:["Italy","France","Germany","Spain"], correctIndex:1 },
  { id:27, text:"Which ocean is the largest by surface area?", options:["Atlantic","Indian","Arctic","Pacific"], correctIndex:3 },
  { id:28, text:"Which scientist developed the theory of relativity?", options:["Isaac Newton","Albert Einstein","Galileo Galilei","Nikola Tesla"], correctIndex:1 },
  { id:29, text:"Which gas is essential for human respiration?", options:["Carbon Dioxide","Nitrogen","Oxygen","Helium"], correctIndex:2 },
  { id:30, text:"Which organ cleans and filters blood in the human body?", options:["Heart","Kidney","Liver","Lungs"], correctIndex:1 },
  { id:31, text:"Which language runs in a web browser?", options:["C++","JavaScript","Python","Java"], correctIndex:1 },
  { id:32, text:"What does HTML stand for?", options:["HyperText Markup Language","HighText Markup Language","Hyperlink Markup Language","Hyper Transfer Markup Language"], correctIndex:0 },
  { id:33, text:"Which instrument measures atmospheric pressure?", options:["Barometer","Hygrometer","Thermometer","Altimeter"], correctIndex:0 },
  { id:34, text:"Which one is a programming paradigm that uses objects?", options:["Functional","Procedural","Object-Oriented","Logical"], correctIndex:2 },
  { id:35, text:"Who painted the Mona Lisa?", options:["Van Gogh","Leonardo da Vinci","Pablo Picasso","Michelangelo"], correctIndex:1 },
  { id:36, text:"Which number is a multiple of both 2 and 3?", options:["7","9","10","11"], correctIndex:1 },
  { id:37, text:"Which mineral is the main component of bones?", options:["Calcium","Iron","Potassium","Magnesium"], correctIndex:0 },
  { id:38, text:"Which planet is the closest to the Sun?", options:["Venus","Earth","Mercury","Mars"], correctIndex:2 },
  { id:39, text:"Which device converts AC to DC?", options:["Transformer","Rectifier","Inverter","Oscillator"], correctIndex:1 },
  { id:40, text:"Which chemical is used to disinfect drinking water (commonly)?", options:["Chlorine","Sulfuric Acid","Nitric Acid","Hydrogen Peroxide"], correctIndex:0 },
  { id:41, text:"Which famous scientist discovered penicillin?", options:["Alexander Fleming","Marie Curie","Louis Pasteur","Gregor Mendel"], correctIndex:0 },
  { id:42, text:"Which is the largest internal organ of the human body?", options:["Heart","Liver","Brain","Kidney"], correctIndex:1 },
  { id:43, text:"Which element is a noble gas?", options:["Oxygen","Nitrogen","Neon","Hydrogen"], correctIndex:2 },
  { id:44, text:"Which country hosted the 2016 Summer Olympics?", options:["China","Brazil","UK","Russia"], correctIndex:1 },
  { id:45, text:"Which tool is used to cut wood?", options:["Chisel","Saw","Screwdriver","Wrench"], correctIndex:1 },
  { id:46, text:"Which mathematical operation is the inverse of multiplication?", options:["Addition","Subtraction","Division","Exponentiation"], correctIndex:2 },
  { id:47, text:"Which organelle is the powerhouse of the cell?", options:["Ribosome","Nucleus","Mitochondria","Golgi apparatus"], correctIndex:2 },
  { id:48, text:"Which is the largest continent by area?", options:["Africa","Asia","North America","Europe"], correctIndex:1 },
  { id:49, text:"Which is the fastest land animal?", options:["Lion","Cheetah","Tiger","Leopard"], correctIndex:1 },
  { id:50, text:"Which system controls body hormones?", options:["Nervous system","Digestive system","Endocrine system","Respiratory system"], correctIndex:2 }
];
const TOTAL_TO_ASK = 15; 
let selectedQuestionIndexes = []; 
let current = 0;                 
let userAnswers = [];          
let timerEnabled = true;
let durationSeconds = 20 * 60;   
let timerInterval = null;
let secondsLeft = durationSeconds;


const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const enableTimerSelect = document.getElementById('enable-timer');
const timeMinutesInput = document.getElementById('time-minutes');

const qNumber = document.getElementById('q-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const timerDisplay = document.getElementById('timer-display');

const resultSummary = document.getElementById('result-summary');
const detailedResults = document.getElementById('detailed-results');
const retakeBtn = document.getElementById('retake-btn');
const startOverBtn = document.getElementById('start-over-btn');


function pickRandomIndexes(total, pick) {
  const arr = Array.from({length: total}, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, pick);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}


function renderQuestion(index) {
  const bankIndex = selectedQuestionIndexes[index];
  const q = questionBank[bankIndex];
  qNumber.textContent = `Q${index + 1} of ${TOTAL_TO_ASK}`;
  questionText.textContent = q.text;

  optionsContainer.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const id = `opt-${index}-${idx}`;
    const isChecked = userAnswers[index] === idx;
    const label = document.createElement('label');
    label.className = 'list-group-item option-label';
    label.setAttribute('for', id);
    label.innerHTML = `
      <input type="radio" name="option-${index}" id="${id}" value="${idx}" ${isChecked ? 'checked' : ''} />
      <span>${String.fromCharCode(65 + idx)}. ${opt}</span>
    `;
    label.addEventListener('click', () => {
      userAnswers[index] = idx;
      renderQuestion(index);
    });
    optionsContainer.appendChild(label);
  });

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === (TOTAL_TO_ASK - 1);
}

function renderResults() {
  let correct = 0;
  let attempted = 0;
  for (let i = 0; i < TOTAL_TO_ASK; i++) {
    const sel = userAnswers[i];
    if (sel !== null) attempted++;
    const bankIndex = selectedQuestionIndexes[i];
    const q = questionBank[bankIndex];
    if (sel === q.correctIndex) correct++;
  }

  const wrong = attempted - correct;
  const unattempted = TOTAL_TO_ASK - attempted;
  const percentage = Math.round((correct / TOTAL_TO_ASK) * 100);

  resultSummary.innerHTML = `
    <strong>Total:</strong> ${TOTAL_TO_ASK} &nbsp;&nbsp;
    <strong>Attempted:</strong> ${attempted} &nbsp;&nbsp;
    <strong>Correct:</strong> ${correct} &nbsp;&nbsp;
    <strong>Wrong:</strong> ${wrong} &nbsp;&nbsp;
    <strong>Unattempted:</strong> ${unattempted} &nbsp;&nbsp;
    <strong>Percentage:</strong> ${percentage}%
  `;

  detailedResults.innerHTML = '';
  for (let i = 0; i < TOTAL_TO_ASK; i++) {
    const bankIndex = selectedQuestionIndexes[i];
    const q = questionBank[bankIndex];
    const sel = userAnswers[i];
    const card = document.createElement('div');
    card.className = 'mb-2 p-2 border rounded';
    const yourAnswerText = sel === null ? 'Unattempted' : `${String.fromCharCode(65 + sel)}. ${q.options[sel]}`;
    const correctText = `${String.fromCharCode(65 + q.correctIndex)}. ${q.options[q.correctIndex]}`;
    const status = (sel === q.correctIndex) ? '<span class="badge bg-success">Correct</span>' :
                   (sel === null ? '<span class="badge bg-secondary">Unattempted</span>' : '<span class="badge bg-danger">Wrong</span>');
    card.innerHTML = `
      <div><strong>Q${i + 1}:</strong> ${q.text} ${status}</div>
      <div class="small-muted">Your answer: ${yourAnswerText}</div>
      <div class="small-muted">Correct answer: ${correctText}</div>
    `;
    detailedResults.appendChild(card);
  }
}

function startTimer() {
  if (!timerEnabled) return;
  stopTimer();
  secondsLeft = durationSeconds;
  timerDisplay.textContent = formatTime(secondsLeft);
  timerInterval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft < 0) {
      stopTimer();
      alert('Time is up. The test will be submitted automatically.');
      submitTest();
      return;
    }
    timerDisplay.textContent = formatTime(secondsLeft);
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

startBtn.addEventListener('click', () => {
  timerEnabled = (enableTimerSelect.value === 'true');
  const minutes = Math.max(1, parseInt(timeMinutesInput.value, 10) || 20);
  durationSeconds = minutes * 60;

  selectedQuestionIndexes = pickRandomIndexes(questionBank.length, TOTAL_TO_ASK);
  userAnswers = new Array(TOTAL_TO_ASK).fill(null);
  current = 0;

  startScreen.classList.add('d-none');
  resultScreen.classList.add('d-none');
  quizScreen.classList.remove('d-none');

  if (timerEnabled) {
    timerDisplay.parentElement.style.display = 'block';
    startTimer();
  } else {
    timerDisplay.parentElement.style.display = 'none';
    stopTimer();
  }

  renderQuestion(current);
});

prevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (current > 0) {
    current--;
    renderQuestion(current);
  }
});

nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (current < TOTAL_TO_ASK - 1) {
    current++;
    renderQuestion(current);
  }
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!confirm('Are you sure you want to submit the test?')) return;
  submitTest();
});

retakeBtn.addEventListener('click', () => {
  selectedQuestionIndexes = pickRandomIndexes(questionBank.length, TOTAL_TO_ASK);
  userAnswers = new Array(TOTAL_TO_ASK).fill(null);
  current = 0;
  quizScreen.classList.remove('d-none');
  resultScreen.classList.add('d-none');
  startScreen.classList.add('d-none');
  if (timerEnabled) startTimer();
  renderQuestion(current);
});

startOverBtn.addEventListener('click', () => {
  stopTimer();
  startScreen.classList.remove('d-none');
  quizScreen.classList.add('d-none');
  resultScreen.classList.add('d-none');
});


function submitTest() {
  stopTimer();
  quizScreen.classList.add('d-none');
  renderResults();
  resultScreen.classList.remove('d-none');
}


window.addEventListener('beforeunload', () => stopTimer());
