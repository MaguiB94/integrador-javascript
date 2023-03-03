
const productsData = [
    {
        id: 1,
        imagen: "./imagenes/combinado2.jpg",
        titulo: "Tablas x 15u",
        descripcion: "Tablas combinadas",
        precio: $4500,
        categoria: "Tablas",
    },
    {
        id: 2,
        imagen: "./imagenes/combinado 30.jpg.jpg",
        titulo: "Tablas x 30u",
        descripcion: "Tablas full salmón",
        precio: $6500,
        categoria: "Tablas",
    },
    {
        id: 3,
        imagen: "./imagenes/hotroll1.png",
        titulo: "Hot roll Cuba",
        descripcion: "Roll rebozado relleno de arroz, queso y salmon cocido.",
        precio: $950,
        categoria: "Hot Roll",
    },
    {
        id: 4,
        imagen: "./imagenes/hotrolls3.jpg",
        titulo: "Hot roll Mexico",
        descripcion: "Roll relleno de arroz, salmon grill con salsa de mango.",
        precio: $900,
        categoria: "Hot Roll",
    },
    {
        id: 5,
        imagen: "./imagenes/hotroll4.jpg",
        titulo: "Hot roll Persia",
        descripcion: "Roll relleno de arroz, langostino y palta envuelto en salmón.",
        precio: $880,
        categoria: "Hot Roll",
    },
    {
        id: 6,
        imagen: "./imagenes/hotroll2.jpg",
        titulo: "Hot roll Caribe",
        descripcion: "Roll relleno de langostino con arroz rebozado con caviar.",
        precio: $980,
        categoria: "Hot Roll",
    },
    {
        id: 7,
        imagen: "./imagenes/11.jpg",
        titulo: "Roll Bs As",
        descripcion: "Roll relleno de salmón cocido, verdeo y arroz.",
        precio: $850,
        categoria: "Rolls",
    },
    {
        id: 8,
        imagen: "./imagenes/13.jpg",
        titulo: "Roll New York",
        descripcion: "Roll relleno de salmón, palta y queso Philadelphia.",
        precio: $890,
        categoria: "Rolls",
    },
    {
        id: 9,
        imagen: "./imagenes/14.jpg",
        titulo: "Roll Hawai",
        descripcion: "Roll relleno de arroz, mango y queso Philadelphia.",
        precio: $850,
        categoria: "Rolls",
    },
    {
        id: 10,
        imagen: "./imagenes/14.jpg",
        titulo: "Roll Hawai",
        descripcion: "Roll relleno de arroz, mango y queso Philadelphia.",
        precio: $850,
        categoria: "Rolls",
    },
    {
        id: 11,
        imagen: "./imagenes/4.jpg",
        titulo: "Nigiri salmón",
        descripcion: "Bocadito de arroz envuelto en salmón",
        precio: $850,
        categoria: "Rolls",
    },
    {
        id: 12,
        imagen: "./imagenes/15.jpg",
        titulo: "Roll California",
        descripcion: "Roll relleno de arroz, palta y atún.",
        precio: $900,
        categoria: "Rolls",
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