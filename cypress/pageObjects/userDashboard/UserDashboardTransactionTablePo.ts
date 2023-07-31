import format from "date-fns/format";
import BaseTablePo from "../genericPo/BaseTablePo";
import {TransactionStatusEnum} from "./TransactionStatusEnum";

export default class UserDashboardTransactionTablePo extends BaseTablePo{
    constructor() {
        super("table");
    }

    getRecentTransactions(){
        return super.getTableRows()
    }

    getRecentTransactionByStatus(status: TransactionStatusEnum) {
        return super.filterTableRowsByContents(status)
    }

    standardizeData(date: string): string {
        let actualDate: number
        let currentDate = new Date()
        switch (date) {
            case "Today":
                actualDate = currentDate.getMilliseconds()
                break
            case "Yesterday":
                actualDate = currentDate.setDate(currentDate.getDate()-1)
                break
            default:
                return date
        }
        return format(actualDate, "MMM Do")
    }
}

