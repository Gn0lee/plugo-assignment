import type { Product } from 'features/product/types/product.type';

export interface CartData extends Product {
	quantity: number;
	selected: boolean;
}

export interface GetCartApiResponse {
	totalPrice: number;
	cart: CartData[];
}
