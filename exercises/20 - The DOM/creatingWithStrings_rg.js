console.log('it works!');

const item = document.querySelector('.item');

const src = `https://picsum.photos/200`;
const myHTML = `
    <div class="wrapper">
        <h2>Cute Pup</h2>
        <img src="${src}" alt="a dog"/>
    </div>
`;

// turn string in to DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);
console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);
