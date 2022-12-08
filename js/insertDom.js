var article1 = document.getElementById('first-article');
var element = document.createElement('p');
element.innerHTML = 'This is added by javascript';
article1.appendChild(element);

//Add One More Gift Item
var list = document.getElementById('gift-list');
var anotherOne = document.createElement('li');
anotherOne.innerHTML = 'Added by js';
list.appendChild(anotherOne);