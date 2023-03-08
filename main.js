
const productsData = [
    {
        id: 1,
        imagen: "./imagenes/combinado2.jpg",
        titulo: "Tablas x 15u",
        descripcion: "Tablas combinadas",
        precio: 4500,
        category: "tablas",
    },
    {
        id: 2,
        imagen: "./imagenes/combinado1.jpg",
        titulo: "Tablas x 30u",
        descripcion: "Tablas full salmón",
        precio: 6500,
        category: "tablas",
    },
    {
        id: 3,
        imagen: "./imagenes/hotroll1.png",
        titulo: "Hot roll Cuba",
        descripcion: "Arroz, queso y salmon cocido.",
        precio: 950,
        category: "hotrolls",
    },
    {
        id: 4,
        imagen: "./imagenes/hotrolls3.jpg",
        titulo: "Hot roll Mexico",
        descripcion: "Arroz, salmon grill con salsa de mango.",
        precio: 900,
        category: "hotrolls",
    },
    {
        id: 5,
        imagen: "./imagenes/hotroll4.jpg",
        titulo: "Hot roll Persia",
        descripcion: "Arroz, langostino y palta envuelto en salmón.",
        precio: 880,
        category: "hotrolls",
    },
    {
        id: 6,
        imagen: "./imagenes/hotroll2.jpg",
        titulo: "Hot roll Caribe",
        descripcion: "Langostino con arroz rebozado con caviar.",
        precio: 980,
        category: "hotrolls",
    },
    {
        id: 7,
        imagen: "./imagenes/11.jpg",
        titulo: "Roll Bs As",
        descripcion: "Salmón cocido, verdeo y arroz.",
        precio: 850,
        category: "rolls",
    },
    {
        id: 8,
        imagen: "./imagenes/13.jpg",
        titulo: "Roll New York",
        descripcion: "Salmón, palta y queso Philadelphia.",
        precio: 890,
        category: "rolls",
    },
    {
        id: 9,
        imagen: "./imagenes/14.jpg",
        titulo: "Roll Hawai",
        descripcion: "Aarroz, mango y queso Philadelphia.",
        precio: 850,
        category: "rolls",
    },
    {
        id: 10,
        imagen: "./imagenes/14.jpg",
        titulo: "Roll Hawai",
        descripcion: "Arroz, mango y queso Philadelphia.",
        precio: 850,
        category: "rolls",
    },
    {
        id: 11,
        imagen: "./imagenes/4.jpg",
        titulo: "Nigiri salmón",
        descripcion: "Bocadito de arroz envuelto en salmón",
        precio: 850,
        category: "rolls",
    },
    {
        id: 12,
        imagen: "./imagenes/15.jpg",
        titulo: "Roll California",
        descripcion: "Arroz, palta y atún.",
        precio: 900,
        category: "rolls",
    },
];



const splitProducts = size => {
    let dividedProducts = [];
    for (let i = 0; i < productsData.length; i += size) {
        dividedProducts.push(productsData.slice(i, i + size))
    }
    return dividedProducts;
}

const productsController = {
    dividedProducts: splitProducts(6),
    nextProductsIndex: 1,
    productsLimit: splitProducts(6).length
}