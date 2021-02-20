let phrases = [
  { text: 'Отправить другу РЖАКУ', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'посмотреть халяву на кино', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'петь как рэпер', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'Юрий Дудь', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'Почистить полку', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },

];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
  // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
} 