const products = document.querySelector('.products-container')
const categories = document.querySelector('.categories')
const categoriesList = document.querySelectorAll('.category')
const btnVer = document.querySelector('.btn-ver')

/*carrito y menu hamburguesa */

const productsCart = document.querySelector('.cart-container')
const total = document.querySelector('.total')
const btnComprar = document.querySelector('.btn-comprar')
const btnBorrar = document.querySelector('.btn-borrar')
const cartBubble = document.querySelector('.cart-bubble')
const cartBtn = document.querySelector('.cart-label')
const cartMenu = document.querySelector('.cart')
const barsBtn = document.querySelector('.menu-label')
const barsMenu = document.querySelector('.navbar-list')
const overlay = document.querySelector('.overlay')
const successModal = document.querySelector('.add-modal')




let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveLocalStorage = (cartList) => {
    localStorage.setItem('cart', JSON.stringify(cartList));
}


const renderProduct = ({ id, imagen, titulo, descripcion, precio }) => {

    return `
    
    <div class="product">
    <img src=${imagen} alt="combinado2">
    <div class="product-info">
        <div class="product-top">
            <h2>${titulo} </h2>
            <p>${descripcion}</p>
        </div>
        <div class="product-mid">
            <span>$${precio}</span>
        </div>
        <button class="btn-agregar" 
        data-id='${id}'
        data-img='${imagen}'
        data-titulo='${titulo}'
        data-desc='${descripcion}'
        data-precio= $'${precio}'>Agregar</button>
    </div>
</div>
      
    `
}


const renderFilteredProducts = (category) => {
    const productsList = productsData.filter((product) => product.category === category);
    products.innerHTML = productsList.map(renderProduct).join('');
}


const renderDividedProducts = (index = 0) => {
    const productsToRender = productsController.dividedProducts[index]
    products.innerHTML += productsToRender.map(renderProduct).join('');
}


const renderProducts = (index = 0, category = null) => {
    if (!category) {
        renderDividedProducts(index)
    } else {
        renderFilteredProducts(category);
    }
}


const isLastIndex = () => productsController.nextProductsIndex === productsController.productsLimit


const showMoreProducts = () => {
    renderProducts(productsController.nextProductsIndex);
    productsController.nextProductsIndex++;
    if (isLastIndex()) {
        btnVer.classList.add('hidden');
    }
}


const changeBtnTodosState = (selectedCategory) => {
    const categories = [...categoriesList];
    categories.forEach((categoryBtn) => {
        if (categoryBtn.dataset.category !== selectedCategory) {
            categoryBtn.classList.remove('todos');
        } else {
            categoryBtn.classList.add('todos');
        }
    })
}


const changeShowMoreBtnState = selectedCategory => {
    if (!selectedCategory) {
        btnVer.classList.remove('hidden');
        return
    }
    btnVer.classList.add('hidden')
}


const changeFilterState = (selectedCategory) => {
    changeBtnTodosState(selectedCategory)
    changeShowMoreBtnState(selectedCategory)
}


const applyFilter = (e) => {
    if (!e.target.classList.contains('category')) return;
    const clickedCategory = e.target.dataset.category;
    changeFilterState(clickedCategory);
    if (!clickedCategory) {
        products.innerHTML = '';
        renderProducts();
    } else {
        renderProducts(0, clickedCategory);
        productsController.nextProductsIndex = 1;
    }
}


const toggleMenu = () => {
    barsMenu.classList.toggle('open-menu');
    if (cartMenu.classList.contains('open-cart')) {
        cartMenu.classList.remove('open-cart')
        return;
    }
    overlay.classList.toggle('show-overlay')
}


const toggleCart = () => {
    cartMenu.classList.toggle('open-cart');
    if (barsMenu.classList.contains('open-menu')) {
        barsMenu.classList.remove('open-menu');
        return;
    }
    overlay.classList.toggle('show-overlay')
}

const closeOnScroll = () => {
    if (
        !barsMenu.classList.contains('open-menu') &&
        !cartMenu.classList.contains('open-cart')
    ) return;

    barsMenu.classList.remove('open-menu')
    cartMenu.classList.remove('open-cart')
    overlay.classList.remove('show-overlay')
}

const closeOnClick = (e) => {
    if (!e.target.classList.contains('navbar-link')) return;
    barsMenu.classList.remove('open-menu');
    overlay.classList.remove('show-overlay');
}


const closeOnOverlayClick = () => {
    barsMenu.classList.remove('open-menu')
    cartMenu.classList.remove('open-cart')
    overlay.classList.remove('show-overlay')
}


const renderCartProduct = ({ id, name, precio, img, quantity }) => {
    return `
 <div class="cart-item">
   <img src=${img} alt="carrito">
    <div class="item-info">
     <h3 class="item-title">${name}</h3>
     <span class="item-price">${precio}</span>
 </div>
 <div class="item-handler">
     <span class="quantity-handler down" data-id=${id}>-</span>
     <span class="item-quantity">${quantity}</span>
     <span class="quantity-handler up" data-id=${id}>+</span>
 </div>
</div>
 
 `
}


const renderCart = () => {
    if (!cart.length) {
        productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`
        return;
    }
    productsCart.innerHTML = cart.map(renderCartProduct).join('')

}

const getCartTotal = () => {
    return cart.reduce((accum, precioValue) => accum + Number(precioValue.precio) * precioValue.quantity, 0);
}


const showTotal = () => {
    total.innerHTML = `${getCartTotal().tofixed(2)} $`
}






const init = () => {
    renderProducts();
    btnVer.addEventListener('click', showMoreProducts);
    categories.addEventListener('click', applyFilter);

    barsBtn.addEventListener('click', toggleMenu)
    cartBtn.addEventListener('click', toggleCart)

    window.addEventListener('scroll', closeOnScroll)
    barsMenu.addEventListener('click', closeOnClick)
    overlay.addEventListener('click', closeOnOverlayClick)


    document.addEventListener('DOMContentLoaded', renderCart);
    document.addEventListener('DOMContentLoaded', showTotal)

}
init();