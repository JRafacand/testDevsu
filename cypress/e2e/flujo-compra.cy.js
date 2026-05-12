const homePage = require('../pages/HomePage');
const productPage = require('../pages/ProductPage');
const cartPage = require('../pages/CartPage');

describe('Flujo de compra en Demoblaze', () => {
  const products = ['Samsung galaxy s6', 'Nokia lumia 1520'];

  it('debe agregar dos productos, visualizar carrito, completar formulario y finalizar compra', () => {
    homePage.visit();

    homePage.openProduct(products[0]);
    productPage.addToCart();

    homePage.goToHomeFromNavbar();
    homePage.openProduct(products[1]);
    productPage.addToCart();

    homePage.goToCart();
    cartPage.validateCartPage();
    cartPage.validateProductInCart(products[0]);
    cartPage.validateProductInCart(products[1]);

    cartPage.clickPlaceOrder();
    cartPage.completePurchaseForm({
      name: 'Rafael Candilejo',
      country: 'Ecuador',
      city: 'Quito',
      card: '3214654798745632',
      month: '05',
      year: '2026'
    });
    cartPage.confirmPurchase();
    cartPage.validatePurchaseSuccess();
  });
});
