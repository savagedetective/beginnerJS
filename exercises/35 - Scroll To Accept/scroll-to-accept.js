console.log('IT WORKS!');

function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  const button = document.querySelector('.accept');

  if (!terms) {
    return; // quits function if terms is not on the page
  }

  function obCallback(payload) {
    console.log(payload[0].intersectionRatio);
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);
}

scrollToAccept();
