import { expect } from 'chai';

describe('Create Reservation Negative API Test', () => {
  it('should not create a reservation with missing required data', () => {
    const invalidReservationData = {
      // Chybí povinné údaje
    };

    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      body: invalidReservationData,
      failOnStatusCode: false, // Přijmu chybný stav
    }).then((response) => {
      expect(response.status).to.eq(400); // Očekávám chybu
    });
  });
});
