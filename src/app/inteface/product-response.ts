import { Meta } from "./meta"
import { Product } from "./product"

export interface ProductResponse {
    data: Product[];
    meta: Meta;
}
