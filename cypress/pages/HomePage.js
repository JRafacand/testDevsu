class HomePage {
  visit() {
    cy.visit('/');
    cy.contains('a.nav-link', 'Home').should('be.visible');
  }

  openProduct(productName) {
    cy.contains('.card-title a', productName).should('be.visible').click();
  }

  goToCart() {
    cy.contains('#cartur', 'Cart').click();
  }

  goToHomeFromNavbar() {
    cy.contains('a.nav-link', 'Home').click();
  }
}

module.exports = new HomePage();
