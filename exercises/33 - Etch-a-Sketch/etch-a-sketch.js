console.log('Etch-a-sketch is goooo');

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// setting up canvas
const { width, height } = canvas; // creates variables from canvas properties. "Destructuring"

// create random width and height for starting point
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let hue = 0;

ctx.strokeStyle = `hsl( ${hue}, 100%, 50% )`;
ctx.beginPath(); // starts the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// moves etch a sketch line based on user input above
function draw({ key }) {
  hue += 3;
  ctx.strokeStyle = `hsl( ${hue}, 100%, 50% )`;

  ctx.beginPath();
  ctx.moveTo(x, y);

  if (key === 'ArrowLeft') {
    console.log('moving left');
    x -= MOVE_AMOUNT;
  } else if (key === 'ArrowRight') {
    console.log('moving right');
    x += MOVE_AMOUNT;
  } else if (key === 'ArrowUp') {
    console.log('moving up');
    y -= MOVE_AMOUNT;
  } else if (key === 'ArrowDown') {
    console.log('Moving Down');
    y += MOVE_AMOUNT;
  } else {
    console.log('how did you hit this code block?');
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}
// handles user input and sends to draw function
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    draw({ key: e.key });
    e.preventDefault();
    // console.log('Handling keys: ', e.key);
  }
}

// clear canvas function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
