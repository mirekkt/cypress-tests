import { expect } from 'chai';

describe('Update Non-Existing Reservation API Test', () => {
  it('should not update a non-existing reservation', () => {
    const updatedReservationData = {
      // Vynechane udaje pro aktualizaci
    };

    cy.request({
      method: 'PUT',
      url: 'https://restful-booker.herokuapp.com/booking/9999', // Neexistující ID rezervace
      body: updatedReservationData,
      failOnStatusCode: false, // Přijmu chybný stav
    }).then((response) => {
      expect(response.status).to.eq(404); // Očekávám chybou (Not Found)
    });
  });
});
