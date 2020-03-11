console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a paragraph';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = `https://picsum.photos/500`;
myImage.alt = 'nice picture';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// lets add a heading after the fact
const heading = document.createElement('h2');
heading.textContent = `Cool things!`;

myDiv.insertAdjacentElement('afterbegin', heading);

// creating unordered list using the above

const myList = document.createElement('ul');
console.log(myList);

const first = document.createElement('li');
first.textContent = 'I am first!';

const second = document.createElement('li');
second.textContent = 'I am second!';

const third = document.createElement('li');
third.textContent = 'I am third!';

const fourth = document.createElement('li');
fourth.textContent = 'I am fourth!';

const fifth = document.createElement('li');
fifth.textContent = 'I am fifth!';

myList.appendChild(first);
myList.appendChild(second);
myList.appendChild(third);
myList.appendChild(fourth);
myList.appendChild(fifth);

document.body.insertAdjacentElement('afterbegin', myList);
