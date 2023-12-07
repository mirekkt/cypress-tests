import { expect } from 'chai';

describe('Create Reservation API Test', () => {
  it('should create a new reservation', () => {
    const reservationData = {
      firstname: 'Pepa',
      lastname: 'Novak',
      totalprice: 500,
      depositpaid: true,
      bookingdates: {
        checkin: '2023-01-01',
        checkout: '2023-01-10',
      },
      additionalneeds: 'Breakfast',
    };

    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      body: reservationData,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
