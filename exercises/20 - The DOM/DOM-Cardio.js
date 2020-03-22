// Make a div
const myDiv = document.createElement('div');
myDiv.innerText = 'This is test text!';
console.log(myDiv);

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement('ul');
console.log(myList);

// add three list items with the words "one, two three" in them
const first = document.createElement('li');
const second = document.createElement('li');
const third = document.createElement('li');

first.innerText = 'first';
second.innerText = 'second';
third.innerText = 'third';

myList.appendChild(first);
myList.appendChild(second);
myList.appendChild(third);

// console.log(myList.innerText);
// console.log(myList.innerHTML);

// put that list into the above wrapper
myDiv.appendChild(myList);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'https://picsum.photos/500';

// set the width to 250
myImg.width = '250';

// add a class of cute
myImg.classList.add('cute');

// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy.';

// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div>
        <p>I am a paragraph!</p>
        <p>I am also a paragraph! (The paragraph before me was removed retroactively)</p>
    </div>
`;

// put this div before the unordered list from above
// Look in to this later --
myList.insertAdjacentHTML('beforebegin', myHTML);
// console.log(myHTML);

// this is what he wanted me to do... not quite working yet
/*      const myFragment = document.createRange().createContextualFragment(myHTML);
        console.log(myFragment);
        myList.insertAdjacentElement('beforebegin', myFragment); */

// add a class to the second paragraph called warning
const secondParagraph = document.querySelector('div p:nth-child(2)');
secondParagraph.classList.add('warning');

// remove the first paragraph
const firstParagraph = document.querySelector('div p');
firstParagraph.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  console.log('Generating player card');

  const ageInDogYears = parseInt(age) * 6;

  const html = `
    <div className="playerCard">
      <h2>
        ${name} - ${age}
      </h2>
      <p>
        Their height is ${height} cm and ${age} years old. In dog years this person would
        be ${ageInDogYears}. That would be a tall dog!
      </p>

      <button class="delete" type="button">Delete</button>
    </div>
  `;

  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('ritchie', 300, 150);
cardsHTML += generatePlayerCard('patrick', 12, 15);
cardsHTML += generatePlayerCard('Sisyphys', 130, 150);
cardsHTML += generatePlayerCard('otis', 12, 12);
// console.log(cardsHTML);

// append those cards to the div
cardDiv.insertAdjacentHTML('afterbegin', cardsHTML);
console.log(cardDiv);

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard() {
  const button = event.currentTarget.parentElement;
  console.log('Delete Card');
  button.remove();
}

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
