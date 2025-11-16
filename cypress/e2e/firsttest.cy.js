describe ('screen' , ()=>{ //suite 1
    it('does not do much', ()=>{ //test1
        
        cy.visit('automationpractice.com')
        cy.title().should('eq','My Store');
    }
    )
})