function playNow() {
  setHiddenById('home-screen');
  setHiddenById('score-screen');
  removeHiddenById('playground-screen');
  continuegame();
}
function continuegame() {
  const randomAlphabet = getRandomNumber();
  const displayText = document.getElementById('display-text');
  displayText.innerText = randomAlphabet.toUpperCase();
  setBackgroundById(randomAlphabet);
  // removeBackgroundById();
}
document.addEventListener('keyup', handleUserKeyUpEvent);
function handleUserKeyUpEvent(Event) {
  const userPressKey = Event.key;
  if (userPressKey === 'Escape') {
    gameOver();
  }
  // console.log(userPressKey);
  const displayAlphabet = document.getElementById('display-text');
  const currentAlphabet = displayAlphabet.innerText.toLowerCase();
  // console.log(currentAlphabet);

  if (userPressKey === currentAlphabet) {
    const currentScoreValue = getElementValueById('current-score');
    const score = currentScoreValue + 1;
    setElementValueById('current-score', score);

    removeBackgroundById(currentAlphabet);
    continuegame();
  } else {
    const currentLifeValue = getElementValueById('current-life');
    const score = currentLifeValue - 1;
    if (score === 0) {
      gameOver();
    }
    setElementValueById('current-life', score);

    removeBackgroundById(currentAlphabet);
    continuegame();
  }
}
function playGame() {
  setHiddenById('home-screen');
  setHiddenById('score-screen');
  removeHiddenById('playground-screen');
  const reGetAlphabet = document.getElementById('display-text');
  const getAlphabet = reGetAlphabet.innerText.toLowerCase();
  removeBackgroundById(getAlphabet);
  setElementValueById('current-score', 0);
  setElementValueById('current-life', 5);
  continuegame();
}
//==================================================================================
function setHiddenById(element) {
  const setHiddenScreen = document.getElementById(element);
  // console.log(setHiddenScreen.classList);
  setHiddenScreen.classList.add('hidden');
}
function removeHiddenById(element) {
  const removeHiddenScreen = document.getElementById(element);
  removeHiddenScreen.classList.remove('hidden');
}
function getRandomNumber() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArray = alphabet.split('');
  const randomNumber = Math.random() * 25;
  const fullRandom = Math.round(randomNumber);
  const randomAlphabet = alphabetArray[fullRandom];
  // console.log(randomAlphabet);
  return randomAlphabet;
}
function setBackgroundById(element) {
  const backgroundText = document.getElementById(element);
  backgroundText.classList.add('bg-orange-500');
}
function removeBackgroundById(element) {
  const backgroundText = document.getElementById(element);
  backgroundText.classList.remove('bg-orange-500');
}

function getElementValueById(element) {
  const getValue = document.getElementById(element);
  const scoreValue = parseInt(getValue.innerText);
  return scoreValue;
}
function setElementValueById(element, value) {
  const getValue = document.getElementById(element);
  getValue.innerText = value;
}
function gameOver() {
  setHiddenById('home-screen');
  setHiddenById('playground-screen');
  removeHiddenById('score-screen');
  const finalScore = getElementValueById('current-score');
  setElementValueById('final-score', finalScore);
}
