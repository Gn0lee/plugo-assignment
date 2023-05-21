import axiosInstance from 'common/api/instance';

import type { Product } from 'features/product/types/product.type';

export interface PostProductApiProps extends Omit<Product, 'id'> {}

export default async function postProductApi({ name, imageUrl, price, description }: PostProductApiProps) {
	const { data } = await axiosInstance.post<Product>('/product', { name, imageUrl, price, description });

	return data;
}
