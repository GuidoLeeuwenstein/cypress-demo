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

    //In the web app some dates are displayed relative to now.
    // Because of this a normalize date method is needed.
    //This method is missing a case for unexpected relative dates (day before yesterday), however seeing as the data on the demo app will not change I did not implement this fallback
    standardizeDate(date: string): string {
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

