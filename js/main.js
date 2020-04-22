document.addEventListener('DOMContentLoaded', main() );

function main() {
  const subscribeForm = document.querySelector('#subscribe-form');
  subscribeForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const emailInput = subscribeForm.querySelector('input[type=text]');
    const email = subscribeForm.elements.namedItem('email').value;
    const errorSmall = subscribeForm.querySelector('small');
    // validate email
    if(email === '' || !isValidEmail(email)) {
      errorText = 'Please provide a valid email';
      emailInput.classList.add('invalid');
      errorSmall.style.display = 'block';
      errorSmall.innerText = errorText;
    } else {
      // remove previous error classes
      emailInput.classList.remove('invalid');
      errorSmall.style.display = 'none';
      alert('You\'ve been successfully suscribed"');
    }
  })
}

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}