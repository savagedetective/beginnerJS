console.log('It works!');

const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  event.preventDefault();

  const button = event.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  console.log('button clicked', card);
  console.log(imgSrc);
  console.log(desc);

  // adds content to inner modal based on button clicked
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
  `;

  // show the modal
  modalOuter.classList.add('open');
}

function closeModal() {
  modalOuter.classList.remove('open');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);
modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner');
  console.log(isOutside);

  if (isOutside) {
    closeModal();
  }
});

// add escape key functionality
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
