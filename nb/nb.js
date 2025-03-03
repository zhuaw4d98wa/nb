// 生成一个1到100之间的随机数
const targetNumber = Math.floor(Math.random() * 100) + 1;
const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const resultElement = document.getElementById('result');

guessButton.addEventListener('click', function () {
  const userGuess = parseInt(guessInput.value);
  if (isNaN(userGuess)) {
    resultElement.textContent = '请输入一个有效的数字！';
  } else if (userGuess < 1 || userGuess > 100) {
    resultElement.textContent = '请输入1到100之间的数字！';
  } else if (userGuess === targetNumber) {
    resultElement.textContent = `恭喜你，猜对了！数字是 ${targetNumber}`;
    guessButton.disabled = true;
  } else if (userGuess < targetNumber) {
    resultElement.textContent = '猜小了，请再试一次。';
  } else {
    resultElement.textContent = '猜大了，请再试一次。';
  }
  guessInput.value = '';
});