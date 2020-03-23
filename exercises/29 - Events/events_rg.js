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

function buyItem() {
  console.log('buying item!');
}

buyButtons.forEach(function(buyButton) {
  console.log('binding the buy button');
  buyButton.addEventListener('click', handleClick);
});
