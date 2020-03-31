console.log('it works!');

const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);

function handleClick() {
  console.log('button was clicked', this);
}

// listen on multiple items

const buyButtons = document.querySelectorAll('button.buy');

// video 29
// function buyItem() {
//   console.log('buying item!');
// }

// buyButtons.forEach(function(buyButton) {
//   console.log('binding the buy button');
//   buyButton.addEventListener('click', handleClick);
// });
// on to video 30

function handleBuyButtonClick(event) {
  console.log('you clicked a button');
  const button = event.target;
  console.log('You are buying it');
  console.log(button);
  // stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('you clicked on the window', event.target);
  },
  { capture: true }
);

// const photoEl = document.querySelector('.photo');
// photoEl.addEventListener('mousemove', function(event) {
//   console.log(event.currentTarget);
//   console.log(this);
// });

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('click', handlePhotoClick);
photoEl.addEventListener('keyup', handlePhotoClick);

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('you clicked on the photo');
  }
}
