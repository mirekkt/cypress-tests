import { expect } from 'chai';

describe('Update Reservation API Test', () => {
  it('should update an existing reservation', () => {
    const updatedReservationData = {
      firstname: 'UpdatedFirstName',
      lastname: 'UpdatedLastName',
      totalprice: 600,
      depositpaid: false,
      bookingdates: {
        checkin: '2023-02-01',
        checkout: '2023-02-10',
      },
      additionalneeds: 'Dinner',
    };

    cy.request({
      method: 'PUT',
      url: 'https://restful-booker.herokuapp.com/booking/1',
      body: updatedReservationData,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
