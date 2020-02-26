// video 21 and 22

// const p = document.querySelector('p');
// console.log(p);

// const divs = document.querySelectorAll('div');
// console.log(divs);

// const imgs = document.querySelectorAll('.item img');
// console.log(imgs);

// const heading = document.querySelector('h2');
// console.log(heading.textContent);
// console.log(heading.innerText);

// // adding pizzas to html
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// // the above can be slow
// pizzaList.insertAdjacentText('beforeend', '🍕');

// video 23

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

// pic.addEventListener('click', function() {
//   pic.classList.toggle('round');
// });

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
