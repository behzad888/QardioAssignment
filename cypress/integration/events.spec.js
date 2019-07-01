describe('Events', () => {
    const deferred = {};
    deferred.promise = new Promise((resolve, reject) => {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
  
    beforeEach(function() {
      // We use cy.visit({onBeforeLoad: ...}) to spy on
      // window.fetch before any app code runs
      cy.visit('/events', {
        onBeforeLoad(win) {
          // cy.spy(win, 'fetch')
          cy.stub(win, 'fetch')
            .as('fetchEvents')
            .returns(deferred.promise);
        },
      });
    });
  
    it('Button Loading', () => {
        cy.get(':nth-child(1) > .card-header > .navigation-date > :nth-child(2)').should(btn => {
        expect(btn.text()).to.eq('...');
      });
    });
  
    it('requests Events api', function() {
      deferred.resolve({
        json() {
          return new Promise((resolve, reject) => {
            resolve({artObjects: []});
          });
        },
        ok: true,
      });

      cy.get(':nth-child(1) > .card-header > .navigation-date > :nth-child(2)').should(btn => {
        expect(btn.text()).to.eq('<');
      });
      cy.get(':nth-child(1) > .card-header > .navigation-date > :nth-child(3)').should(btn => {
        expect(btn.text()).to.eq('>');
      });

    });
  });
  
  
  //// To be continue 
  
  
  