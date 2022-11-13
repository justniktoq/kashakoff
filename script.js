'use strict';

let age = confirm('Вас зовут Миша?')
function checkAge () {
  if (age === true) {
    let age = confirm('Ваша фамилия Коршак?')
    if (age === true ) {
      alert ('Проходите.');
    }
    else {
      alert('Идите нахуй!');
    }
  }
  else {
    alert('Идите нахуй!')
  }
}
checkAge();
