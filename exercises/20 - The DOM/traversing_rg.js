console.log('it works!');

// const wes = document.querySelector('.wes');
// console.log(wes.children);
// console.log(wes.childNodes);

const p = document.createElement('p');
p.textContent = 'Will I still exist?';
document.body.appendChild(p);

p.remove();

console.log(p);

// Hey. It still exists.
