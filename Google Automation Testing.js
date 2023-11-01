describe ('Site Google.com', ()=> {
// Test1
    it('works with a basic search', ()=>{
        cy.visit('https://google.com'); 
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('vlog de it').type("{enter}");

        cy.get('#result-stats').should('exist');
    })


}) 