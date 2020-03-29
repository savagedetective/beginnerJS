console.log('I work!');

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('form submitted!');
  console.log(event.currentTarget);
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
