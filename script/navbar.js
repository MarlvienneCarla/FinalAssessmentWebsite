// js inside nav tag
const navbar = document.querySelector('nav') //select the <nav> element
const menu = navbar.querySelector('ul')  //selects the <ul> element in <nav> element
const openBtn = navbar.querySelector('.fa-bars')//selects the element in "fa-bars"
const closeBtn = menu.querySelector('.fa-times')//selects the element in "fa-times"

// toggle is a way to touch the visibility or state of an element
// this is for the btn to show and hide the nav bar buttons
openBtn.onclick = () => menu.classList.toggle('menu')//adds a click event listener to opem the button and toggles the menu
closeBtn.onclick = () => menu.classList.toggle('menu')//adds a click even lister to close the button