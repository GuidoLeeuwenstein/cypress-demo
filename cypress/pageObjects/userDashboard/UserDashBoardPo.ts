import UserDashboardTransactionTablePo from "./UserDashboardTransactionTablePo";
import {ITransactionData} from "./ITransactionData";

export default class UserDashBoardPo {
    getTotalBalance() {
        return cy.get(".balance-value").eq(0)
    }

    getAvailableCredits() {
        return cy.get(".balance-value").eq(1)
    }

    getAmountDueToday() {
        return cy.get(".balance-value").eq(2)
    }

    getParsedRecentTransactions() {
        const transactionsPo = new UserDashboardTransactionTablePo()
        const transactions = transactionsPo.getRecentTransactions()

        const parsedData: ITransactionData[] = []
        return transactions.each((transaction) => {
            parsedData.push({
                status: transaction.find("td").eq(0).find("span").eq(1).text(),
                date: transactionsPo.standardizeDate(transaction.find("td").eq(1).find("span").eq(0).text()),
                description: transaction.find("td").eq(2).find("span").text(),
                category: transaction.find("td").eq(3).find("a").text(),
                amount: transaction.find("td").eq(4).find("span").text()
            })
        }).then(() => {
            return parsedData
        })
    }
}