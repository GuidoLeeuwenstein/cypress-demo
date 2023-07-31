import {IknownUser} from "../pageObjects/login/IknownUser";
import {KnownUsersEnum} from "../pageObjects/login/KnownUsersEnum";

Cypress.Commands.add('login', (user: KnownUsersEnum, expectedToFail?: boolean) => {
    //Loads userdata
    cy.fixture("login-info").then((userInfo: Record<KnownUsersEnum, IknownUser>) => {
        //gets the correct user
        cy.log(JSON.stringify(userInfo))
        const specificUserData = userInfo[user]

        //Fills the user data into the login fields
        cy.get("#username").type(specificUserData.username)
        cy.get("#password").type(specificUserData.username)
        cy.get("#log-in").click()

        //Verifies if the login was a success. This check can be avoided in case of testing failed login
        if(!expectedToFail) {
            cy.url().should("contain", "app.html")
        }
    })
})

declare global {
  namespace Cypress {
    interface Chainable {
      login(user: KnownUsersEnum, shouldSucceed?: boolean): Chainable<void>
    }
  }
}