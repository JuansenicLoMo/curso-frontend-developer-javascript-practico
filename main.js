const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart');


const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
MenuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');


}

function toggleMobileMenu (){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');

        if(!ismobileMenuClosed){
            mobileMenu.classList.add('inactive');
        }
        aside.classList.toggle('inactive');
    }



const productList = [];

productList.push({
    name:'Bike',
    price:20,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Pantalla',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Computador',
    price:1120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Bike',
    price:20,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Pantalla',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Computador',
    price:1120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});




function renderProducts(arr){
    for (product of arr){
        const productCard =  document.createElement('div');
        productCard.classList.add('product-card');
      
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
          
        const productInfo =  document.createElement('div');
        productInfo.classList.add('product-info');
      
        const producInfoDiv = document.createElement('div')
      
        const producPrice = document.createElement('p')
        producPrice.innerText = '$' + product.price; 
      
        const producName = document.createElement('p')
        producName.innerText = product.name;
      
        producInfoDiv.appendChild(producPrice);
          producInfoDiv.appendChild(producName);
      
          const producInfoFigur = document.createElement('figure');
          const producImgCart = document.createElement('img');
        producImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      
        producInfoFigur.appendChild(producImgCart);
        
        productInfo.appendChild(producInfoDiv);  
        productInfo.appendChild(producInfoFigur);  
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
      
      }
      
}

renderProducts(productList);