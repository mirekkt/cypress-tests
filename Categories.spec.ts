import { homePage } from './PageObjects';

it('should navigate to different categories', () => {
    homePage.visit();
    homePage.navigateToLaptopsCategory();
  
    // Assert that the current URL corresponds to the 'Laptops' category
    cy.url().should('eq', 'https://www.demoblaze.com/views/category.html?id=6');
  });
  
  it('should filter products within a category', () => {
    homePage.visit();
    homePage.navigateToLaptopsCategory();
  
    // Filter products
    cy.get('#tbodyid > :nth-child(1) > :nth-child(2) > .btn').click(); // Add to cart button
  
    // Assert that the product is successfully added to the cart
    cy.get('#cart').click(); // Go to cart
    cy.get('.success').should('contain.text', 'MacBook air');
  });
  