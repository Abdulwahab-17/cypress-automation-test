describe ('xpath' , ()=>{ //suite 1
    it('xpathtest', ()=>{ //test1
        
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.xpath("//a[normalize-space()='Best Sellers']").click()
        cy.xpath("(//div[@class='product-container'])").should('have.length',6)

})


})