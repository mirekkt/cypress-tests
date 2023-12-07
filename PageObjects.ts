class HomePage {
  visit() {
    cy.visit('https://www.demoblaze.com/');
  }

  navigateToSignUp() {
    cy.get('#signin2').click();
  }

  navigateToLogin() {
    cy.get('#login2').click();
  }

  navigateToLaptopsCategory() {
    cy.get('.list-group-item').contains('Laptops').click();
  }

  navigateToMacBookAir() {
    cy.get('.hrefch').contains('MacBook air').click();
  }
}

class RegistrationPage {
  fillRegistrationForm(username: string, password: string) {
    cy.get('#sign-username').type(username);
    cy.get('#sign-password').type(password);
    cy.get('#sign-up').click();
  }
}

class LoginPage{
  fillLoginForm(username: string, password: string) {
    cy.get('loginusername').type(username);
    cy.get('#loginpassword').type(password);
    cy.get('#loginModal .btn-primary').click();
  }  
}
class ProductPage{
  addToCart() {
    cy.contains('Add to cart').click();
  }
}

export const homePage = new HomePage();
export const registrationPage = new RegistrationPage();
export const loginPage = new LoginPage();
export const productPage = new ProductPage();
