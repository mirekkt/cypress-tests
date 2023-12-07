import { expect } from 'chai';

describe('Get Reservation API Test', () => {
  it('should get information about a reservation', () => {
    cy.request('GET', 'https://restful-booker.herokuapp.com/booking/1').then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
