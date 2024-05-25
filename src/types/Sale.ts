import { Matcher } from "@/utils";
import { Service } from "./Service";

export interface Sale {
    id?: number,
    buyOrder: string,
    service: Service,
}

export const saleMatcher: Matcher = {
    buyOrder: "string",
    service: "object",
};