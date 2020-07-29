const form =  document.getElementById('form');
const input = document.querySelector('[name="aa"]');

// sdes mi na formu mojem naveshat klik, a mojem dobavit submit
form.addEventListener('submit', (event) => {
  // otmenaem standartnoe brauzernoe povedenie
  event.preventDefault();
  // eto dla toqo ctobi v console vvodit to cto mi vveli v inpute
  console.log(input.value);
  // a eto mi perezaqrujaem input tem samim ocishaya eqo
  form.reset();
})