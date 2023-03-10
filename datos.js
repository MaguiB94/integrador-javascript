const products = document.querySelector('.products-container')
const categories = document.querySelector('.categories')
const categoriesList = document.querySelectorAll('.category')
const btnVer = document.querySelector('.btn-ver')

/*carrito y menu hamburguesa */

const productsCart = document.querySelector('.cart-container')
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


const init = () => {
    renderProducts();
    btnVer.addEventListener('click', showMoreProducts);
    categories.addEventListener('click', applyFilter);
}
init();