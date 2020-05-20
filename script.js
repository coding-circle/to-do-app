window.onload = () => {

  /* put stuff here */
  console.log('hey there');

let listItem = document.getElementById('listBox');
console.log(listItem);

let list = document.getElementById('theList');
console.log(list);

let regularList = document.getElementsByClassName('regularItem');
console.log(regularList);




function clickButton () {
  list.innerHTML += `<li class="checkBox">${listBox.value} <input type="checkbox"></li><br>`
  console.log('You clicked a button!');

  /*let checkBox = document.getElementsByClassName('checkBox');
  checkBox.addEventListener('checked', checkTheBox);*/
}



function clickFavorite (itemName) {
  list.innerHTML += `<li class="checkBox">${itemName} <input type="checkbox"></li><br>`

}

const submitButton = document.getElementById('button');
submitButton.addEventListener('click', clickButton);

const coffeeButton = document.getElementById('coffee');
coffeeButton.addEventListener('click', () => clickFavorite("Coffee"));

const cokeButton = document.getElementById('cocaCola');
cokeButton.addEventListener('click', () => clickFavorite("Coca Cola"));

function checkTheBox () {
  console.log('checked box') 
  
}






};

