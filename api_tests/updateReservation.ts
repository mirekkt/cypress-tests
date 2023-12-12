import { expect } from 'chai';

describe('Update Reservation API Test', () => {
  let authToken: string;

  before(() => {
    // vytvoreni tokenu
    const credentials = {
      username: 'admin',
      password: 'password123',
    };

    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/auth',
      headers: {
        'Content-Type': 'application/json',
      },
      body: credentials,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token').that.is.a('string');
      authToken = response.body.token;
    });
  });

  it('should update an existing reservation', () => {
    const reservationId = 1;

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
      url: `https://restful-booker.herokuapp.com/booking/${reservationId}`,
      body: updatedReservationData,
      headers: {
        Authorization: `Bearer ${authToken}`, // Pridani tokenu do hlavicky pro autentizaci
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
