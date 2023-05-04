import { Meta } from "./meta"
import { Data } from "./product"

export interface ProductResponse {
    data: Data[];
    meta: Meta;
}
