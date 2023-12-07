import { expect } from 'chai';

describe('Delete Reservation API Test', () => {
  it('should delete an existing reservation', () => {
    cy.request('DELETE', 'https://restful-booker.herokuapp.com/booking/1').then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
