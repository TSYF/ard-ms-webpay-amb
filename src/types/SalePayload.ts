import { Matcher } from "@/utils";
import { Sale } from "./Sale";

export interface SalePayload {
    sessionId: string,
    returnUrl: string,
    sale: Sale,
}

export const saleMatcher: Matcher = {
    sessionId: "string",
    returnUrl: "string",
    sale: "object",
};