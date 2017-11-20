window.addEventListener('load', function() {
  var nameContact = document.getElementById('name');
  var btnSave = document.getElementById('save');
  var containerContact = document.getElementById('container-contact');
  btnSave.addEventListener('click', function(event) {
    event.preventDefault();
    var newContact = document.createElement('li');
    var newName = document.createElement('span');
    newName.setAttribute('class', 'contact-name');
    newName.textContent = time() + '   ' + nameContact.value;
    newContact.appendChild(newName);
    containerContact.insertBefore(newContact, containerContact.firstElementChild);
  });
});
function validar() {
  var text1 = document.getElementById('name');
  if (text1.value !== '') {
    document.getElementById('save').disabled = '';
  } else {
    document.getElementById('save').disabled = 'disabled';
  }
}
function cuenta() {
  var longitud = 140;
  var resta = '';
  var cont = document.getElementById('name').value.length;
  resta = longitud - cont;
  if (cont > 140) {
    document.getElementById('save').disabled = 'disabled';
  } else if (cont > 130 && cont <= 140) {
    document.getElementById('mostrar-caracteres').style.color = '#ab8b6f';
  }
  else if (cont > 120 && cont <= 130) {
    document.getElementById('mostrar-caracteres').style.color = '#f17c72';
  }
  document.getElementById('mostrar-caracteres').value = resta;
}
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);
function autosize() {
  var size = this;
  setTimeout(function() {
    size.style.cssText = 'height:auto; padding:0';
    size.style.cssText = 'height:' + size.scrollHeight + 'px';
  }, 0);
}
function clear() {
  document.getElementById('input-wrapper').innerHTML= '';
}
function time() {
  var date = new Date();
  var hours = date.getHours();
  var min = date.getMinutes();
  var time;
  if (min < 10) {
    min = '0' + min;
  }
  if (hours >= 12 && hours <= 24) {
    time = hours + ':' + min + ' PM';
  } else { 
    time = hours + ':' + min + ' AM';
  }
  return time;
}
