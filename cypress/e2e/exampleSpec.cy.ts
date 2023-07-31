import {KnownUsersEnum} from "../pageObjects/login/KnownUsersEnum";
import UserDashBoardPo from "../pageObjects/userDashboard/UserDashBoardPo";
import {ITransactionData} from "../pageObjects/userDashboard/ITransactionData";

describe('Example spec file', () => {
  it('The user should be able to log in via the login form', () => {
    cy.visit("/")
    cy.login(KnownUsersEnum.standard_user)
  })

  it("The user should be able to see there financial overview", () => {
    cy.visit("/")
    cy.login(KnownUsersEnum.standard_user)

    //Here I initiate the page object to interact with the user dashBoard.
    //I abstract the actual page interactions behind a page object so that, in the case that these actions are needed in other tests, there is no need to write the same code multiple times.
    //Another reason for using page objects is that, in the case something changes in the testing target we only have to update the page object while the actual tests stay the same
    const overview = new UserDashBoardPo()
    overview.getTotalBalance().should("contain.text", "$350")
    overview.getAvailableCredits().should("contain.text", "$17,800")
    overview.getAmountDueToday().should("contain.text", "$180")
  })

  // In this test I will showcase the more advanced capabilities of cypress.
  // Here we will parse the data which is visible in the web page table and compare that data to what we have pre-defined in the expected-transaction-history.json file which can be found in the fixtures folder
  it("The user should be able to see their recent transactions", () => {
    cy.visit("/")
    cy.login(KnownUsersEnum.standard_user)

    const overview = new UserDashBoardPo()
    cy.fixture("expected-transaction-history").then((expectedData: ITransactionData[]) => {
      overview.getParsedRecentTransactions().then((foundData) => {
        foundData.forEach((transaction, i) => {
          expect(JSON.stringify(expectedData[i])).to.eq(JSON.stringify(transaction))
        })
      })
    })
  })
})