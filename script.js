/*
  Name: Stephen Ditta
  Student ID: 033787144
  Proff: Muath Alzghool
  Course Code: WEB222NCC
*/

/* eslint-disable no-undef */

/* Add any JavaScript you need to this file. */

//global variable array containing the items added to cart
let cartItems = [];

//cart counter that increments when a button is pressed
let cartCounter = 0;

//function definition called clicker which has an argument of an event
function clicker(e) {
  //dynamically create a div called itemDescription
  let itemDescriptionCreated = document.createElement('div');
  let itemDescription = document.body.insertBefore(
    itemDescriptionCreated,
    document.body.firstChild
  );
  itemDescription.className = 'itemDescription';
  document.body.style.overflow = 'hidden';

  //dynamically create a div called boxContainer
  let boxContainerCreated = document.createElement('div');
  let boxContainer = itemDescription.appendChild(boxContainerCreated);
  boxContainer.id = 'boxContainer';

  //dynamically create a div called box
  let boxCreated = document.createElement('div');
  let box = boxContainer.appendChild(boxCreated);
  box.id = 'box';

  //dynamically create a span called box
  let closeBoxCreated = document.createElement('span');
  let closeBox = box.appendChild(closeBoxCreated);
  closeBox.id = 'exit';
  closeBox.className = 'material-icons';
  closeBox.innerHTML = 'close';

  //event listener for a click which removes the info created
  closeBox.addEventListener('click', function() {
    itemDescription.remove();
    document.body.style.overflow = 'visible';
  });

  //dynamically create an image for the item
  let imageCreated = document.createElement('img');
  let image = box.appendChild(imageCreated);
  image.src = e.target.parentNode.children[0].src;
  image.style.width = '300px';
  image.style.height = '300px';
  image.style.objectFit = 'cover';
  image.style.margin = 'auto';
  image.style.display = 'block';
  image.alt = e.target.parentNode.children[0].alt;

  //dynamically create a paragraph for the description
  let descriptionCreated = document.createElement('p');
  let description = box.appendChild(descriptionCreated);
  description.id = 'descPara';
  description.innerHTML = items[e.target.parentNode.id].description;
}

//function definition called cart
function cart() {
  //dynamically create a div called shoppingCartContainer
  let shoppingCartContainerCreated = document.createElement('div');
  let shoppingCartContainer = document.body.insertBefore(
    shoppingCartContainerCreated,
    document.body.firstChild
  );
  shoppingCartContainer.className = 'itemDescription';
  document.body.style.overflow = 'hidden';

  //dynamically create a div called cartContainer
  let cartContainerCreated = document.createElement('div');
  let cartContainer = shoppingCartContainer.appendChild(cartContainerCreated);
  cartContainer.id = 'boxContainer';

  //dynamically create a div called cartbox
  let cartboxCreated = document.createElement('div');
  let cartbox = cartContainer.appendChild(cartboxCreated);
  cartbox.id = 'box';

  //dynamically create a span called closeBox
  let closeBoxCreated = document.createElement('span');
  let closeBox = cartbox.appendChild(closeBoxCreated);
  closeBox.id = 'exit';
  closeBox.className = 'material-icons';
  closeBox.innerHTML = 'close';

  //loop through the variable array cartItems and dynamically create a paragraph called itemsInCart
  for (let i = 0; i < cartItems.length; i++) {
    let itemsInCartCreated = document.createElement('p');
    let itemsInCart = cartbox.appendChild(itemsInCartCreated);
    itemsInCart.className = 'itemsCart';
    itemsInCart.innerHTML = cartItems[i].name + ' / $' + cartItems[i].price.toFixed(2);
  }

  //dynamically create a span called removeItems
  let removeItemsCreated = document.createElement('span');
  let removeItems = cartbox.appendChild(removeItemsCreated);
  removeItems.className = 'material-icons';
  removeItems.id = 'rmvShp';
  removeItems.innerHTML = 'remove_shopping_cart';

  //event listener for a click which removes the info created
  removeItems.addEventListener('click', function(e) {
    if (cartCounter > 0) {
      e.target.parentNode.children[cartCounter].remove();
      cartItems.pop();
      cartCounter--;
    }
    document.getElementById('shoppingCartButton').innerHTML = 'Cart (' + cartCounter + ')';
  });

  //event listener for a click which removes the shoppingCartContainer
  closeBox.addEventListener('click', function() {
    shoppingCartContainer.remove();
    document.body.style.overflow = 'visible';
  });
}

//function definition called populator with arguments of categ initialized to "empty" and showAll initialized to false
function populator(categ = 'empty', showAll = false) {
  //counter for the population
  let popCounter = 0;

  let con = document.getElementById('content');

  //if the 2nd element of the id 'content' child is undefined remove it
  if (con.children[1] !== undefined) {
    con.children[1].remove();
  }

  //dynamically create a div called container
  let containerCreated = document.createElement('div');
  let container = con.appendChild(containerCreated);
  container.id = 'itemContainer';

  //loop through the array of objects
  for (let i = 0; i < items.length; i++) {
    //if the catagory is equal to the passed catagory or showAll is true
    if (items[i].category === categ || showAll) {
      //dynamically create a div called card
      let cardCreated = document.createElement('div');
      let card = itemContainer.appendChild(cardCreated);
      card.className = 'card';
      card.id = i;

      //dynamically create a img called image
      let imageCreated = document.createElement('img');
      let image = card.appendChild(imageCreated);
      image.src = items[i].img;
      image.className = 'uniqueImage';
      image.alt = items[i].name;

      //dynamically create a paragraph called loader and
      //a simple onload that displays the images when they are loaded in using a simple loading text
      let loaderCreated = document.createElement('p');
      let loader = card.appendChild(loaderCreated);
      loader.innerHTML = 'Loading...';
      loader.style.display = 'block;';
      let selectedImg = document.getElementsByClassName('uniqueImage')[popCounter];
      selectedImg.onload = function() {
        loader.remove();
        selectedImg.style.display = 'block';
      };

      //dynamically create a h4 called itemName
      let itemNameCreated = document.createElement('h4');
      let itemName = card.appendChild(itemNameCreated);
      itemName.innerHTML = items[i].name;
      itemName.className = 'itemName';

      //dynamically create a button called itemPriceButton
      let itemPriceButtonCreated = document.createElement('button');
      let itemPriceButton = card.appendChild(itemPriceButtonCreated);
      itemPriceButton.className = 'mdc-button mdc-button--raised price';

      //dynamically create a span called buttonLabel
      let btnLabelCreated = document.createElement('span');
      let buttonLabel = itemPriceButton.appendChild(btnLabelCreated);
      buttonLabel.className = 'mdc-button__label';
      buttonLabel.innerHTML = items[i].price.toFixed(2);

      //when a priced item button is clicked, add that item to the cart
      itemPriceButton.addEventListener('click', function() {
        if (cartCounter <= 9) {
          cartItems.push(items[i]);
          let addCartPCreated = document.createElement('h4');
          let addCartP = card.appendChild(addCartPCreated);
          addCartP.className = 'addToCart';
          addCartP.innerHTML = 'Added ' + items[i].name + ' to cart';
          cartCounter++;

          setTimeout(function() {
            addCartP.remove();
          }, 3000);
        } else {
          // eslint-disable-next-line no-alert
          alert('Max of 10 items in cart for now!!');
        }
        //Change the shopping cart counter
        document.getElementById('shoppingCartButton').innerHTML = 'Cart (' + cartCounter + ')';
      });
      //increment the popCounter
      popCounter++;
    }
  }

  //loop through the popCounter create a "click" event listner for each item displayed
  for (let i = 0; i < popCounter; i++) {
    document.getElementsByClassName('card')[i].children[0].addEventListener('click', clicker);
    document.getElementsByClassName('card')[i].children[1].addEventListener('click', clicker);
  }
}

//window onload
window.onload = function() {
  let menuLength = document.getElementById('categories').firstElementChild.children.length;
  document.getElementsByClassName('shoeChoice')[0].classList.add('current');
  populator('', true); //Onload of page display all shoes

  for (let i = 0; i < menuLength; i++) {
    //loops through all the menu selections
    document.getElementsByClassName('shoeChoice')[i].addEventListener('click', function() {
      // if one of the selections was clicked

      let currentSel = document.getElementsByClassName('current');
      currentSel[0].className = currentSel[0].className.replace(' current', ''); //replace the currentSel classname " current" to an empty string

      //if choise made from menu
      if (i === 0) {
        populator('', true);
        document.getElementsByClassName('shoeChoice')[i].classList.add('current');
      } else if (i === 1) {
        populator('men');
        document.getElementsByClassName('shoeChoice')[i].classList.add('current');
      } else if (i === 2) {
        populator('women');
        document.getElementsByClassName('shoeChoice')[i].classList.add('current');
      } else {
        populator('child');
        document.getElementsByClassName('shoeChoice')[i].classList.add('current');
      }

      this.className += ' active'; //adds the active class name to the current element
    });
  }

  // cart button listening for a click event to call the cart function
  document.getElementById('shoppingCartButton').addEventListener('click', cart);
};
