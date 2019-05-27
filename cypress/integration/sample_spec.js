var assert = require('assert');

describe('Sample test group', function() {
    describe('Nested test group', function() {
        it('Sample test 1: Does not do much!', function() {
            expect(true).to.equal(true)
          });
          it('Sample test 2: should return -1 when the value is not present', function(){
              assert.equal(-1, [1,2,3].indexOf(4));
            });

    });
  });

  describe('My first test', function(){
      it('checks if stuff is there', function() {
          cy.visit('https://example.cypress.io');
          cy.contains('eq');
      });
      it('clicks the link type', function() {
          cy.contains('type').click();
          cy.url().should('include', '/commands/actions');
      });
      it('checks navBar title', function(){
          cy.get('body > nav > div > div.navbar-header > a').contains('cypress');
      });
  });

  describe('practice with cookies', function(){
      it('gets cookies', function(){
          //tbd
      });
  });

  describe('Trying commands', function(){
      it('Gets types and asserts', function() {
          cy.visit('http://localhost:8080');
          cy.get('body > div:nth-child(4) > div > div > ul > li:nth-child(3) > ul > li:nth-child(1) > a').click();

          cy.url().should('include', '/commands/actions');
          
          let test_email, test_password;
          test_email = 'test@test.test';
          test_password = 'pass123';

          cy.get('#email1')
          .type(test_email)
          .should('have.value', test_email);

          cy.get('#password1')
          .type(test_password)
          .should('have.value', test_password);
      });
  });