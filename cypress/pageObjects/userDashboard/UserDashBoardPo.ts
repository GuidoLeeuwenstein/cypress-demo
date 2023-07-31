export default class UserDashBoardPo {
    getTotalBalance() {
        return cy.get(".balance-value").eq(0)
    }

    getAvailebleCredits() {
        return cy.get(".balance-value").eq(1)
    }

    getAmountDueToday() {
        return cy.get(".balance-value").eq(2)
    }
}