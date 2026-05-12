class CartPage {
  validateCartPage() {
    cy.url().should('include', 'cart.html');
    cy.contains('h2', 'Products').should('be.visible');
  }

  validateProductInCart(productName) {
    cy.contains('#tbodyid tr td', productName).should('be.visible');
  }

  clickPlaceOrder() {
    cy.contains('button', 'Place Order').should('be.visible').click();
    cy.get('#orderModal').should('be.visible');
  }

  completePurchaseForm({ name, country, city, card, month, year }) {
    cy.get('#name').clear().type(name);
    cy.get('#country').clear().type(country);
    cy.get('#city').clear().type(city);
    cy.get('#card').clear().type(card);
    cy.get('#month').clear().type(month);
    cy.get('#year').clear().type(year);
  }

  confirmPurchase() {
    cy.get('#orderModal').contains('button', 'Purchase').click();
  }

  validatePurchaseSuccess() {
    cy.contains('.sweet-alert h2', 'Thank you for your purchase!').should('be.visible');
    cy.get('.sweet-alert .confirm').should('be.visible').click();
  }
}

module.exports = new CartPage();
