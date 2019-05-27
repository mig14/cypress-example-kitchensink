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
      it('visits Kitchen Sink', function() {
          cy.visit('https://example.cypress.io');
          cy.contains('hype');
      })
  });