import { homePage, productPage } from './PageObjects';

it('should add items to the cart', () => {
    homePage.visit();
    homePage.navigateToLaptopsCategory();
    productPage.addToCart();
  
    // Navigate to the cart and assert that the added product is there
    cy.get('#cart').click();
    cy.get('.success').should('contain.text', 'MacBook air');
    cy.get('#orderModalLabel').should('contain.text', 'Your Cart');
    cy.get('.btn-success').click(); 
  
  });
  