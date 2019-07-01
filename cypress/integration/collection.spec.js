describe('Collection', () => {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  beforeEach(function() {
    // We use cy.visit({onBeforeLoad: ...}) to spy on
    // window.fetch before any app code runs
    cy.visit('/collection', {
      onBeforeLoad(win) {
        // cy.spy(win, 'fetch')
        cy.stub(win, 'fetch')
          .as('fetchCollection')
          .returns(deferred.promise);
      },
    });
  });

  it('Button Loading', () => {
    cy.get('.btn').should(btn => {
      expect(btn.text()).to.eq('...');
    });
  });

  it('requests collection api', function() {
    deferred.resolve({
      json() {
        return new Promise((resolve, reject) => {
          resolve({artObjects: []});
        });
      },
      ok: true,
    });

    cy.get('.btn').should(btn => {
      expect(btn.text()).to.eq('Search');
    });
  });
});


//// To be continue 


