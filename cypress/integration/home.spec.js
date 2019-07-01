describe('Home', () => {
  it('Visit Home page', () => {
    cy.visit('/');
    cy.get('[href="/events"]').should(btn => {
      expect(btn.text()).to.eq('View Events');
    });
    cy.get('[href="/collection"]').should(btn => {
      expect(btn.text()).to.eq('View Collection');
    });
  });
  it('Visit Event page', () => {
    cy.visit('/');
    let text = 'View Events';
    cy.get('[href="/events"]').click();
    cy.location().should(loc => {
      expect(loc.hash).to.eq('');
      expect(loc.host).to.eq('localhost:3000');
      expect(loc.hostname).to.eq('localhost');
      expect(loc.href).to.eq('http://localhost:3000/events');
      expect(loc.origin).to.eq('http://localhost:3000');
      expect(loc.pathname).to.eq('/events');
      expect(loc.port).to.eq('3000');
      expect(loc.protocol).to.eq('http:');
      expect(loc.search).to.eq('');
      expect(loc.toString()).to.eq('http://localhost:3000/events');
    });
  });
  it('Visit Collection page', () => {
    cy.visit('/');
    cy.get('[href="/collection"]').click();
    cy.location().should(loc => {
      expect(loc.hash).to.eq('');
      expect(loc.host).to.eq('localhost:3000');
      expect(loc.hostname).to.eq('localhost');
      expect(loc.href).to.eq('http://localhost:3000/collection');
      expect(loc.origin).to.eq('http://localhost:3000');
      expect(loc.pathname).to.eq('/collection');
      expect(loc.port).to.eq('3000');
      expect(loc.protocol).to.eq('http:');
      expect(loc.search).to.eq('');
      expect(loc.toString()).to.eq('http://localhost:3000/collection');
    });
  });
});
