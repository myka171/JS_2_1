const products = [
    {title : 'cap', price : 1000},
    {title : 'scarf', price : 1500},
    {title : 'coat', price : 4000},
    {title : 'pants', price : 2600}
];

const renderProductsItem = (title, price) => {
  return `<div class="products-item"> <img class="product-item-photo" 
src="https://ru-static.z-dn.net/files/d6b/c6661f48189eabd8482dec55cff8ee28.jpg" 
alt=""> <h3>${title}</h3> <p>${price}</p> <button>Купить</button> </div>`;
};

//Сложный вариант
//const renderProductsList = list => {
//    const productsList = list.map(item => renderProductsItem(item.title, item.price));
//   document.querySelector(`.products-list`).innerHTML = productsList;
//};


// Упрощенный вариант
const renderProductsList = list => {
    document.querySelector(`.products-list`).innerHTML =
        list.map(item => renderProductsItem(item.title, item.price)).join('');

};

renderProductsList(products);


