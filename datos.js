const products = document.querySelector('.products-container')
const categories = document.querySelector('.categories')
const categoriesList = document.querySelectorAll('.category')
const btnVer = document.querySelector('.btn-ver')







const hamburguesa = document.querySelector('.hamburguesa');
const navbar = document.querySelector('.navbar');
const enlaces = document.querySelectorAll('.navbar a')
document.addEventListener('DOMContentLoaded', () => {
    mostrarMenu();
    cerrarMenu();
});

function mostrarMenu() {
    hamburguesa.addEventListener('click', () => {
        navbar.classList.toggle('ocultar');

    });
}


function cerrarMenu() {
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {

            if (e.target.tagName === 'A') {
                navbar.classList.add('ocultar');
            }
        });
    });
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


const renderFilteredProducts = category => {
    const productsList = productsData.filter(product => product, category === category)
    products.innerHTML = productsList.map(renderProduct).join('')
}


const renderDividedProducts = (index = 0) => {
    const productsToRender = productsController.dividedProducts[index]
    products.innerHTML += productsToRender.map(renderProduct).join('')
}


const renderProducts = (index = 0, category = null) => {
    if (!category) {
        renderDividedProducts(index)
    }
    else {
        renderFilteredProducts




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


const changeFilterState = selectedCategory => {
    change
}


const applyFilter = e => {
    if (!e.target.classList.contains('category')) return;
    const clickedCategory = e - target.dataset.category
    changeFilterState(clickedCategory)
    if (!clickedCategory) {
        products.innerHTML = '';
        renderProducts()
    } else {
        renderProducts(0, clickedCategory);
        productsController.nextProductsIndex = 1
    }
}


const init = () => {
    renderProducts()
    btnVer.addEventListener('click', showMoreProducts)
    categories.addEventListener('click', applyFilter)
}
init()