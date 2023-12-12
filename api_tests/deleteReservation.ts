import { expect } from 'chai';

describe('Delete Reservation API Test', () => {
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

  it('should delete an existing reservation', () => {
    const reservationId = 1;

    cy.request({
      method: 'DELETE',
      url: `https://restful-booker.herokuapp.com/booking/${reservationId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
