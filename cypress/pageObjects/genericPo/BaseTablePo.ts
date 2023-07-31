export default abstract class BaseTablePo {
    private main: Function

    protected constructor(parentElementSelector: string) {
        this.main = () => cy.get(parentElementSelector)
    }

    getTableRows(): Cypress.Chainable<JQuery> {
        return this.main().find("tbody").find("tr")
    }

    filterTableRowsByContents(content: string): Cypress.Chainable<JQuery> {
        return this.getTableRows().filter(`:contains('${content}')`)
    }
}