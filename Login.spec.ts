/// <reference types="cypress" />
import { homePage, loginPage } from './PageObjects';

describe('Login Test', () => {
  it('should log in successfully', () => {
    // Visit the website and navigate to the login page
    homePage.visit();
    homePage.navigateToLogin();

    // Fill in the login form
    loginPage.fillLoginForm('suprcuprtester2', 'suprcuprheslo2');

    // Assert that the login is successful
    cy.get('#nameofuser')
      .should('be.visible')
      .and('contain.text', 'Welcome suprcuprtester2');
  });
});
