import type { Product } from 'features/product/types/product.type';

export interface Cart extends Product {
	quantity: number;
}
