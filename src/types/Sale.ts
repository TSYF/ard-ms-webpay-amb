import { Matcher } from "@/utils";
import { Service } from "./Service";

export interface Sale {
    id?: number,
    buyOrder: string,
    service: Service,
    accounting_date?: string,
    transaction_date?: string,
    installments_number?: number
}

/* 
    "accounting_date": "0526",
    "transaction_date": "2024-05-26T16:24:19.303Z",
    "installments_number": 0
*/

export const saleMatcher: Matcher = {
    buyOrder: "string",
    service: "object",
    accounting_date: "string",
    transaction_date: "string",
    installments_number: "number"
};