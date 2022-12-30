let menuIcon = document.getElementById('menu-icon');
let items = document.getElementById('items');
let closing = document.getElementById('closing');


menuIcon.addEventListener('click',function(){
    items.style.display = 'block';
})


//closing the items
closing.addEventListener('click',function(){
    items.style.display = 'none'
})