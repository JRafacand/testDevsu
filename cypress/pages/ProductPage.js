class ProductPage {
  addToCart() {
    cy.contains('a.btn', 'Add to cart').should('be.visible').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Product added');
    });
  }
}

module.exports = new ProductPage();
