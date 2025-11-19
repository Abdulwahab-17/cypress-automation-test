import 'cypress-mochawesome-reporter/lib/addContext';

describe ('assertionSuite' , ()=>{ //suite 1
    it('T1', ()=>{ //test2
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq',"OrangeHRM")
        cy.url().should('include',"orangehrmlive.com")
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('not.contain',"Apple")
        // cy.get('').type('')
        // cy.get('').click()

        cy.xpath("//a").should('have.length',5)

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="username"]').should('have.value','Admin')
    }
    )

    it('Explicit', ()=>{ //test1
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.title().should('eq',"OrangeHRM")
        // cy.url().should('include',"orangehrmlive.com")
        // .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .and('not.contain',"Apple")
        // // cy.get('').type('')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="username"]').should('have.value','Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get("button[type='submit']").click()

        let xName = "Dmitrii Vol";
        cy.get('.oxd-userdropdown-name').then ( (x)=> {
            let rName = x.text();
            expect(rName).to.equal(xName)

            assert.equal(rName,xName)
        }
        )
        //Explicit Assertions
        //-> expect support BDD or assert support TDD
    }
    )
})
