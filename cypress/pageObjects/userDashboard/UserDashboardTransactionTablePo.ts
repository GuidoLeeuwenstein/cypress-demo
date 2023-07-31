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
}

