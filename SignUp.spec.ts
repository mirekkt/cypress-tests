/// <reference types="cypress" />
import { homePage, registrationPage } from './PageObjects';

describe('SignUp Test', () => {
  it('should sign up successfully', () => {
    // Visit the website and navigate to the registration page
    homePage.visit();
    homePage.navigateToSignUp();

    // Fill in the registration form
    registrationPage.fillRegistrationForm('suprcuprtester2', 'suprcuprheslo2');

    // Assert the registration is successful
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain.text', 'Sign up successful.');
  });
});
