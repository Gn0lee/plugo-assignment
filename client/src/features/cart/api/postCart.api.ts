import axiosInstance from 'common/api/instance';

import type { Product } from 'features/product/types/product.type';
import type { Cart } from 'features/cart/types/cart.type';

export interface PostCartApiProps {
	products: Pick<Cart, 'id' | 'quantity'>[];
}

export default async function postCartApi({ products }: PostCartApiProps) {
	const { data } = await axiosInstance.post<Product>('/cart', { products });

	return data;
}
